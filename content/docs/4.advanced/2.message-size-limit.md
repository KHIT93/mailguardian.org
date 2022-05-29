---
title: Increase Message size limit
description: Find out how to increase the limit on how large messages should be before MailGuardian will not scan them
category: Advanced
category_order: 5
article_order: 0
---

## Increasing the size limit for when message scan is skipped
Change the `Max SpamAssassin Size` and `Max Spam Check Size` of `/etc/MailScanner/MailScanner.conf` and restart `MailScanner`. Be careful not to set this to high, as bigger messages will increase the processing time for `SpamAssassin` when evaluating a large message.