<?php
/* Enquiry form handler — Henna Art by Masu
   Upload alongside the site files (public_html). Requires PHP 7.4+ (Hostinger default is fine).
   Do NOT put the mailbox password in this file — the repository is public.
   It goes in enquiry-config.php on the server; see enquiry-config.example.php. */

// ---------- CONFIG ----------
// No secrets in this file — the repository is public. The mailbox password
// lives in enquiry-config.php, which exists only on the server (see
// enquiry-config.example.php). That file may override any value below.
$TO          = 'Masuma0205@icloud.com';                  // where enquiries arrive
$FROM        = 'enquiries@hennabymasu.com';              // must be a mailbox on hennabymasu.com (Hostinger > Emails)
$FROM_NAME    = 'Henna Art by Masu website';
$SITE         = 'hennabymasu.com';                       // used in the subject line

// SMTP through the Hostinger mailbox: the message is DKIM-signed for
// hennabymasu.com, which is what gets it into an iCloud inbox rather than
// junk. It switches on automatically once a password is configured.
$SMTP_HOST    = 'smtp.hostinger.com';
$SMTP_PORT    = 465;                                     // 465 = SSL
$SMTP_USER    = 'enquiries@hennabymasu.com';
$SMTP_PASS    = '';
$USE_SMTP     = null;                                    // null = use SMTP whenever $SMTP_PASS is set

if (is_file(__DIR__ . '/enquiry-config.php')) {
  require __DIR__ . '/enquiry-config.php';
}
if ($USE_SMTP === null) { $USE_SMTP = ($SMTP_PASS !== ''); }
// ---------- END CONFIG ----------

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

$clean = function ($k) use ($data) {
  $v = isset($data[$k]) ? trim((string)$data[$k]) : '';
  return str_replace(["\r", "\n"], ' ', substr($v, 0, 2000));
};

// Honeypot — real people never fill this in.
if ($clean('company') !== '') { echo json_encode(['ok' => true]); exit; }

$name     = $clean('name');
$phone    = $clean('phone');
$email    = $clean('email');
$address  = $clean('address');
$occasion = $clean('occasion');
$date     = $clean('date');
$notes    = isset($data['notes']) ? trim(substr((string)$data['notes'], 0, 4000)) : '';

$errors = [];
if ($name === '')    { $errors[] = 'name'; }
if ($phone === '')   { $errors[] = 'phone'; }
if ($address === '') { $errors[] = 'address'; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors[] = 'email'; }
if ($errors) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Please check: ' . implode(', ', $errors)]);
  exit;
}

$subject = 'Henna enquiry — ' . $name . ' — ' . ($occasion !== '' ? $occasion : 'General');

$lines = [
  'New enquiry from ' . $SITE,
  '',
  'Name:      ' . $name,
  'Phone:     ' . $phone,
  'Email:     ' . $email,
  'Address:   ' . $address,
  'Occasion:  ' . ($occasion !== '' ? $occasion : '—'),
  'Date:      ' . ($date !== '' ? $date : '—'),
  '',
  'Notes:',
  ($notes !== '' ? $notes : '—'),
  '',
  '—',
  'Sent ' . date('D j M Y, H:i') . ' from the website enquiry form.',
];
$body = implode("\n", $lines);

$sent = false;
$failure = '';

// Headers must be 7-bit: the subject's em dash, or a name like "Zoë", would
// otherwise show up garbled in some mail apps.
$mime = function ($s) { return preg_match('/[^\x20-\x7E]/', $s) ? '=?UTF-8?B?' . base64_encode($s) . '?=' : $s; };
$subjectHeader = $mime($subject);
$replyTo = $mime($name) . ' <' . $email . '>';

if ($USE_SMTP && $SMTP_PASS !== '') {
  // Minimal SMTP client — no external libraries needed.
  $ctx = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
  $scheme = ($SMTP_PORT === 465) ? 'ssl://' : '';
  $fp = @stream_socket_client($scheme . $SMTP_HOST . ':' . $SMTP_PORT, $eno, $estr, 20, STREAM_CLIENT_CONNECT, $ctx);
  if (!$fp) {
    $failure = 'SMTP connect failed: ' . $estr;
  } else {
    stream_set_timeout($fp, 20);
    $read = function () use ($fp) { $out = ''; while ($line = fgets($fp, 515)) { $out .= $line; if (substr($line, 3, 1) === ' ') break; } return $out; };
    $say  = function ($cmd) use ($fp, $read) { fwrite($fp, $cmd . "\r\n"); return $read(); };
    $read();
    $say('EHLO ' . $SITE);
    if ($SMTP_PORT !== 465) { $say('STARTTLS'); stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT); $say('EHLO ' . $SITE); }
    $say('AUTH LOGIN');
    $say(base64_encode($SMTP_USER));
    $auth = $say(base64_encode($SMTP_PASS));
    if (strpos($auth, '235') === 0) {
      $say('MAIL FROM:<' . $SMTP_USER . '>');
      $say('RCPT TO:<' . $TO . '>');
      $say('DATA');
      $headers = "From: " . $FROM_NAME . " <" . $SMTP_USER . ">\r\n"
        . "Reply-To: " . $replyTo . "\r\n"
        . "To: <" . $TO . ">\r\n"
        . "Subject: " . $subjectHeader . "\r\n"
        . "Date: " . date('r') . "\r\n"
        . "Message-ID: <" . bin2hex(random_bytes(12)) . "@" . $SITE . ">\r\n"
        . "MIME-Version: 1.0\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
      $res = $say($headers . str_replace("\n.", "\n..", $body) . "\r\n.");
      $sent = (strpos($res, '250') === 0);
      if (!$sent) { $failure = 'SMTP rejected the message.'; }
      $say('QUIT');
    } else {
      $failure = 'SMTP login failed — check the mailbox user and password.';
    }
    fclose($fp);
  }
}

if (!$sent) {
  $headers = "From: " . $FROM_NAME . " <" . $FROM . ">\r\n"
    . "Reply-To: " . $replyTo . "\r\n"
    . "MIME-Version: 1.0\r\n"
    . "Content-Type: text/plain; charset=UTF-8";
  $sent = @mail($TO, $subjectHeader, $body, $headers, '-f' . $FROM);
  if (!$sent && $failure === '') { $failure = 'The server refused to send the message.'; }
}

// Keep a copy on the server regardless, so nothing is ever lost.
@file_put_contents(__DIR__ . '/enquiries.log', $body . "\n\n====\n\n", FILE_APPEND | LOCK_EX);

if ($sent) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => $failure]);
}
