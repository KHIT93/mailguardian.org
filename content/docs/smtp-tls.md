---
title: SMTP over TLS
description: Learn how to manually configure SMTP over TLS
category: Advanced
category_order: 3
article_order: 0
---

## SMTP using STARTTLS
Edit `/etc/postfix/main.cf` and add this:

```
smtpd_tls_security_level = may
smtp_tls_security_level = may
smtpd_tls_mandatory_protocols = !SSLv2,!SSLv3,!TLSv1
smtp_tls_mandatory_protocols  = !SSLv2,!SSLv3,!TLSv1
smtpd_tls_protocols           = !SSLv2,!SSLv3,!TLSv1
smtp_tls_protocols            = !SSLv2,!SSLv3,!TLSv1
smtpd_tls_exclude_ciphers     = aNULL, LOW, EXP, MEDIUM, ADH, AECDH, MD5, DSS, ECDSA, CAMELLIA128, 3DES, CAMELLIA256, RSA+AES, eNULL
```

During the usage of our installation script, we configure the script to handle encrypted connections only on `TLSv1.2` and `TLSv1.3`