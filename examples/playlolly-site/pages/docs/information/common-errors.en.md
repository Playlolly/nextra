---
title: Common errors - Information - Docs
---

import { FAQPageJsonLd } from 'next-seo';

<FAQPageJsonLd
mainEntity={[
{
questionName: 'Error parsing script / Failed to load script',
acceptedAnswerText: 'Your server artifacts are likely outdated. Update your server to version 5181 or above.',
},
{
questionName: 'You lack the required entitlement to use <resource>',
acceptedAnswerText: 'Try restarting your server and make sure your server license key is correct. If you bought the resource on the wrong account, you can transfer it to another account on keymaster.',
},
{
questionName: 'Failed to verify protected resource',
acceptedAnswerText: 'Files were possibly corrupted during transfer. Ensure hidden files are copied; the .fxap file in a protected resource must be included. Some FTP programs skip these files.',
},
]}
/>

# Common errors

## Error parsing script / Failed to load script

Your server artifacts are likely outdated. Update your server to version 5181 or above.

## You lack the required entitlement to use `<resource>`

Try restarting your server and make sure your server license key is correct. If you bought the resource on the wrong account, you can transfer it to another account on keymaster.

## Failed to verify protected resource

Files were possibly corrupted during transfer. Ensure hidden files are copied; the `.fxap` file in a protected resource must be included. Some FTP programs skip these files.
