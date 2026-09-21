# Hostinger setup — enquiry form email delivery

The form on `enquiry.html` now POSTs to `send-enquiry.php`, which emails every submission to **Masuma0205@icloud.com** and also appends a copy to `enquiries.log` on the server, so nothing is ever lost. It works only once the site is published on Hostinger (PHP does not run in a static/local preview).

## 0. Deploying the website — one zip

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
4. Right-click it → **Extract** → extract into `public_html` itself (not a
   subfolder), and allow it to overwrite existing files.
5. Delete the zip from `public_html` afterwards.
6. Check: `https://hennabymasu.com/assets/site.css` and
   `https://hennabymasu.com/enquiry.html` should both open, not 404.

The zip deliberately **does not contain `send-enquiry.php`**, so extracting it
can never overwrite the mail settings you have edited on the server. Upload
that file by hand only when you intend to replace them (step 1 below).

`build/` and `deploy/` are local tools — never upload them.

## 1. `send-enquiry.php` (first setup only)

Upload it into `public_html`, next to `enquiry.html`, and edit its CONFIG block
there (steps 2–4). Check the domain: the repo copy says `hennaartbymasu.com`,
but the website is `hennabymasu.com`. The `$FROM` address must be a mailbox on
a domain you actually own on Hostinger, or mail will be rejected or land in junk.

`.htaccess` is included in the zip (it keeps `enquiries.log` private and
redirects `/index.html` to `/`). It is a hidden file — if the File Manager
hides dotfiles, it is still there.

## 2. Create a sending mailbox

Hostinger → **Emails → Email Accounts → Create**. Make something like `enquiries@yourdomain.com`. You need this because mail sent "from" an iCloud address on a Hostinger server gets marked as spam — the From address must belong to your own domain.

## 3. Edit the CONFIG block at the top of `send-enquiry.php`

```php
$TO        = 'Masuma0205@icloud.com';            // already set
$FROM      = 'enquiries@yourdomain.com';         // the mailbox from step 2
$SITE      = 'yourdomain.com';                   // your real domain
```

That alone will work on most Hostinger plans (they allow PHP `mail()`).

## 4. Recommended: switch on SMTP

Much better deliverability — iCloud is strict, and plain `mail()` often lands in Junk. In the same CONFIG block:

```php
$USE_SMTP  = true;
$SMTP_HOST = 'smtp.hostinger.com';
$SMTP_PORT = 465;
$SMTP_USER = 'enquiries@yourdomain.com';
$SMTP_PASS = 'the mailbox password';
```

No plugins or libraries needed — the SMTP client is built into the file.

## 5. Check the DNS records

Hostinger → **Emails → your mailbox → DNS/Configuration**. Confirm the **SPF**, **DKIM** and **DMARC** records are present and green. If the domain's DNS is managed elsewhere, copy those records over. Without them iCloud may silently drop the mail.

## 6. Test

Publish, open `enquiry.html`, submit a real enquiry. You should see "Thank you — your enquiry is with us" and get the email within a minute. Check the Junk folder on the first try and mark it "not junk".

If it fails, the page shows the server's error message and offers WhatsApp/email as a fallback so the customer is never stuck. You can also read `enquiries.log` in the File Manager to see submissions that arrived but did not email.

## Notes

- Requires PHP 7.4 or newer — Hostinger's default is fine (**Advanced → PHP Configuration** to check).
- Customer replies work directly: the email's Reply-To is set to the customer's own address.
- A hidden honeypot field blocks basic spam bots. If spam ever gets through, add Cloudflare Turnstile or hCaptcha and I can wire it in.
