<?php
/* Template for the mail password — this example file holds no secrets.

   On the SERVER only (Hostinger File Manager, in public_html next to
   send-enquiry.php):
     1. Create a new file named   enquiry-config.php
     2. Paste in the two lines below and put the mailbox password in.
     3. Save.

   Never put the real password in this example file or in send-enquiry.php:
   the GitHub repository is public. enquiry-config.php is ignored by git, left
   out of the deploy zip, and blocked from the web by .htaccess. */

$SMTP_USER = 'enquiries@hennabymasu.com';   // the mailbox created in Hostinger > Emails
$SMTP_PASS = 'PUT-THE-MAILBOX-PASSWORD-HERE';
