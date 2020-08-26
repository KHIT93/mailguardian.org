---
title: System requirements
description: Learn what is needed to run MailGuardian on your system
category: Prerequisites
category_order: 2
---
## Hardware

We recommend the following requirements for your hardware, regardless of whether you are running with a physical machine or a virtual machine

- 2 CPU cores
- 4GB of RAM (This will vary greatly based on your database size and how much email that you are processing)
- 20GB of SAS storage or SSD storage

Please note that these requirements are for the full single-node deployment and does therefore also include the resources necessary for `MailScanner`and `SpamAssassin`etc.

## Software

- Debian 10 `Buster`, Ubuntu 18.04, Ubuntu 20.04, CentOS 7 or CentOS 8
- Python 3.6 or newer
- Python `virtualenv`
- PostgreSQL 12.x
- Postfix 3.3+ with `pgsql` driver
- Nginx 1.10+ or Apache 2.4+ with `HTTP/2` support
- `sudo` installed and configured on your system
- EPEL repository for CentOS
- Backports for Debian

Most requirements are handled by our installation script, but are listed in case that you want to install on an unsupported version or distribution, since this is technically possible as long as `MailScanner`, `SpamAssassin` and their dependencies will run.

## Optional requirements

- DataDumper library for `perl` for debugging (libdata-dumper-simple-perl)