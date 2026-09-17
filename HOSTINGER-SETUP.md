# Hostinger setup — enquiry form email delivery

The form on `enquiry.html` now POSTs to `send-enquiry.php`, which emails every submission to **Masuma0205@icloud.com** and also appends a copy to `enquiries.log` on the server, so nothing is ever lost. It works only once the site is published on Hostinger (PHP does not run in a static/local preview).

## 0. Before you upload — rebuild if you edited any `.jsx` file

The pages in `site/` are static HTML (no React or Babel loads in the browser anymore — see the `build/` folder). The `.jsx` files are the source of truth for content and layout; a small Node script renders them once, at build time, into each page's HTML. If you change a `.jsx` file, re-run the build before uploading:

```
cd build
npm install   # first time only
npm run build
```

This rewrites the `<body>` of every `site/*.html` file in place. `build/` itself is a dev-only tool — **do not upload the `build/` folder to Hostinger.**

## 1. Upload these files to `public_html`

- everything in `site/` (`index.html`, `enquiry.html`, `pricing.html`, the `.jsx` files, `assets/`, `_ds/`) — **not** `build/`
- **`send-enquiry.php`**
- **`.htaccess`** (keeps `enquiries.log` private and redirects `/index.html` to `/`)

Keep `send-enquiry.php` in the **same folder** as `enquiry.html`.

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
