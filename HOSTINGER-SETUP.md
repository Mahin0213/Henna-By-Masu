# Hostinger setup — website and enquiry email

The form on `enquiry.html` posts to `send-enquiry.php`, which emails every
submission to **Masuma0205@icloud.com** — from a phone or a computer alike — and
also appends a copy to `enquiries.log` on the server, so nothing is ever lost.
PHP only runs once the site is on Hostinger, not in a local preview.

> **The GitHub repository is public.** Never type the mailbox password into
> any file in this project. It goes in one file that exists only on the server
> (step 3).

## 1. Deploy the website — one zip

Upload the whole site as one zip rather than file by file. Uploading pages
individually is how the live site once ended up with a new `index.html` but
every other page, the stylesheet and the script returning 404.

1. Make the zip (rebuilds every page first):
   ```
   cd build
   npm install        # first time only
   npm run package
   ```
   This writes **`deploy/hennabymasu-site.zip`**.
2. Hostinger → **Files → File Manager → `public_html`**.
3. **Upload** `hennabymasu-site.zip` into `public_html`.
4. Right-click it → **Extract** → into `public_html` itself (not a subfolder),
   allowing it to overwrite existing files.
5. Delete the zip from `public_html` afterwards.
6. Check: `https://hennabymasu.com/assets/site.css` and
   `https://hennabymasu.com/enquiry.html` should both open, not 404.

The zip contains `send-enquiry.php` and `.htaccess` (a hidden file — it is
there even if the File Manager hides dotfiles). It never contains the password
file, so a deploy can't overwrite or leak it. `build/` and `deploy/` are local
tools — never upload them.

## 2. Create the sending mailbox (once)

Hostinger → **Emails → Email Accounts → Create** →
**`enquiries@hennabymasu.com`**, and note its password.

The form sends *as* this address. It has to be on `hennabymasu.com`: that
domain's email records (MX, SPF, DKIM, DMARC) are already set up and pointing
at Hostinger, which is what iCloud checks before accepting mail. An earlier
version of the form sent as `hennaartbymasu.com`, a domain with no email
records at all — mail from it is likely to be rejected or junked.

## 3. Put the password on the server (once)

In File Manager, in `public_html` (next to `send-enquiry.php`):

1. **New file** → name it exactly **`enquiry-config.php`**
2. Paste this, with the real password:
   ```php
   <?php
   $SMTP_USER = 'enquiries@hennabymasu.com';
   $SMTP_PASS = 'the mailbox password';
   ```
3. Save.

That's all — `send-enquiry.php` detects the password and switches to sending
through the mailbox (SMTP), which signs the mail for `hennabymasu.com` and is
far more reliable into iCloud than plain PHP `mail()`. `.htaccess` blocks
`enquiry-config.php` from ever being downloaded, and git and the deploy zip
both ignore it. The template is `site/enquiry-config.example.php`.

If the password is wrong or missing, the form still falls back to plain
`mail()`, and every enquiry is still written to `enquiries.log`.

## 4. Test from a phone and a computer

Open `https://hennabymasu.com/enquiry.html`, send a real enquiry, and check
**Masuma0205@icloud.com**. You should see "Thank you — your enquiry is with us"
and the email within a minute or two. Look in **Junk** on the first try and mark
it "not junk" — iCloud learns from that. Then repeat from the other device.

If it fails, the page shows the server's error message and offers WhatsApp and
email instead, so the customer is never stuck. `enquiries.log` in File Manager
shows every submission that reached the server, emailed or not.

## Notes

- Requires PHP 7.4 or newer — Hostinger's default is fine (**Advanced → PHP
  Configuration** to check).
- Replying to an enquiry email replies to the customer: Reply-To is set to
  their own address.
- A hidden honeypot field blocks basic spam bots. If spam ever gets through,
  Cloudflare Turnstile or hCaptcha can be added.
