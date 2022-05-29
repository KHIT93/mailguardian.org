---
title: System requirements
description: Learn what is needed to run MailGuardian on your system
category: Prerequisites
category_order: 2
article_order: 0
---
## Hardware

We recommend the following requirements for your hardware, regardless of whether you are running with a physical machine or a virtual machine

- 2 CPU cores
- 4GB of RAM (This will vary greatly based on your database size and how many emails that you are processing)
- 20GB of SAS storage or SSD storage

Please note that these requirements are for the full single-node deployment and does therefore also include the resources necessary for `MailScanner`and `SpamAssassin` etc.

## Software

### Operating systems
The following is a list of operating systems that we have tested ourselves, so while it might be possible to have other derrived versions of the below systems to run `MailGuardian`, we have not tested it:

- Ubuntu 18.04 LTS
- Ubuntu 20.04 LTS
- CentOS 7
- CentOS 8
- RedHat Enterprise Linux 7
- Redhat Enterprise Linux 8
- Debian 10 (`Buster`)
- Debian 11 (`Bullseye`)
- AlmaLinux 8
- Rocky Linux 8

### Other requirements
- Python 3.6 or newer
- Python `virtualenv`
- PostgreSQL 12.x
- Postfix 3.3+ with `pgsql` driver
- Nginx 1.10+ or Apache 2.4+ with `HTTP/2` support
- `sudo` installed and configured on your system

For Debian, the `backports` repository is required

For RedHat-based systems, the `EPEL` repository is required in most casess

Most requirements are handled by our installation script, but are listed in case that you want to install on an unsupported version or distribution, since this is technically possible as long as `MailScanner`, `SpamAssassin` and their dependencies will run.

## Optional requirements

- DataDumper library for `perl` for debugging