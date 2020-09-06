---
title: GeoLite2
description: Configure MaxMind GeoLite2
category: Installation
category_order: 3
article_order: 6
---
# MaxMind GeoLite2

Since `2.0.0`, we support usage of [MaxMind GeoLite2](https://www.maxmind.com) databases to show which country the senders IP address belongs to.

Usage of the MaxMind GeoLite2 databases requires you to register on their website here:

```
https://www.maxmind.com/en/geolite2/signup
```

Once registered, go to your account on [maxmind.com](https://www.maxmind.com) and access the `My License Keys` option under `Services`

Here you can generate a new license key and copy it to your `MailGuardian` configuration under `src/mailguardian/settings/local.py`

Here add your license key to the file:

```
MAXMIND_ACCOUNT_API_KEY = 'PASTE_YOUR_LCENSE_KEY_HERE'
```

Finally restart the `MailGuardian` service like this:

```
sudo systemctl restart mailguardian.service
```