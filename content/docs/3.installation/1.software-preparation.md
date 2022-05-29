---
title: Required software
description: Install software and applications necessary to run MaiLGuardian
category: Installation
category_order: 3
article_order: 0
---
# Required software
If you have not chosen to configure your installation using our quick-start script, you need to install various software packages first.

Below, we have listed the required software packages for the various tested distributions and versions

## Ubuntu
For supported Ubuntu versions `18.04` and `20.04`, we required the following software packages installed:
- sudo
- wget
- postfix-pgsql
- python3
- python3-dev
- python3-setuptools
- python3-pip
- libpq-dev
- nginx
- ca-certificates
- openssl
- libpng-dev
- lsb-release
- build-essential
- postgresql-common

You can replace `nginx` with whatever webserver that you want. The important thing is that it supports `WSGI` and preferably `ASGI` or both.

Next we need to install the PostgreSQL database server. The purpose of the `postgresql-common` package is to provide us with a script that configures the PostgreSQL repository for us.

Run the script like this:

```
sudo sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
```
If running as `root`, you can ommit `sudo` from the above command

Once configured, install the following packages:
- postgresql-server-dev-12
- postgresql-client-12
- postgresql-12

If the target server is not supposed to run the database server, ommit the `postgresql-12` package

To compile frontend of the application, you also need to install NodeJS

You can install it from the official Ubuntu repository and risk getting a version that is not fully compatible with `MailGuardian`. To make it easy, we recommend installing the LTS version tested with `MailGuardian`, using this command:

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

Finally install the package `nodejs` and that is it.

## Debian
For supported Ubuntu versions `10` and `11`, we required the following software packages installed:
- sudo
- wget
- postfix-pgsql
- python3
- python3-dev
- python3-setuptools
- python3-pip
- libpq-dev
- nginx
- ca-certificates
- openssl
- libpng-dev
- lsb-release
- build-essential
- postgresql-common

You can replace `nginx` with whatever webserver that you want. The important thing is that it supports `WSGI` and preferably `ASGI` or both.

On Debian, some required packages are only available through the `backports` repostory, so we need to install it like this

```
echo "deb http://deb.debian.org/debian $(lsb_release -cs)-backports main" > /etc/apt/sources.list.d/debian-backports.list
```

The above command has to be run as `root`

Next we need to install the PostgreSQL database server. The purpose of the `postgresql-common` package is to provide us with a script that configures the PostgreSQL repository for us.

Run the script like this:

```
sudo sh /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
```
If running as `root`, you can ommit `sudo` from the above command

Once configured, install the following packages:
- postgresql-server-dev-12
- postgresql-client-12
- postgresql-12

If the target server is not supposed to run the database server, ommit the `postgresql-12` package

To compile frontend of the application, you also need to install NodeJS

You can install it from the official Ubuntu repository and risk getting a version that is not fully compatible with `MailGuardian`. To make it easy, we recommend installing the LTS version tested with `MailGuardian`, using this command:

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

Finally install the package `nodejs` and that is it.

## CentOS, AlmaLinux, Rocky Linux
We support various RHEL-based distributions in both version `7` and version `8`.
We do also support RedHat Enterprise Linux (RHEL), but some components are installed differently, so it will have its own section.

The instructions are quite similar, but there are a few differences, as version `7` does not have a version of Postfix 3, that supports PostgreSQL.

The vert first thing to do is to install the EPEL repository like this:

```
sudo yum install epel-release -y
```

### Requirements for 7.x
First we need to get a version of postfix version 3, which supports PostgreSQL. There are a few ways to get it done and if you really want to, you can compile it from the sources.

The easiest is however to install from a repository, where someone has created a prebuilt package for it. There are many repositories that might have this, but in our quick start script, we have opted to use `GhettoForge`.

You can install it like this:

```
sudo yum --nogpg install https://mirror.ghettoforge.org/distributions/gf/gf-release-latest.gf.el7.noarch.rpm -y
sudo yum clean all
sudo yum makecache fast
```

Next remove any existing installation of postfix from the system:

```
sudo yum remove postfix -y
```

Next, we install PostgreSQL as our database server repository:

```
sudo yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm -y
```


Next install postfix 3:

```
sudo yum install --enablerepo=gf-plus postfix3 postfix3-pgsql -y
```

Next we need to install various packages for compiling required libraries from sourcecode. Again there are multiple ways of doing it, but the easiest is to install the `Development Tools` package group like this:

```
sudo yum groupinstall "Development Tools" -y
```

### Requirements for version 8.x
First is to add the PostgreSQL database server repository:

```
sudo dnf install https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm -y
```

Next we need to disable the builtin PostgreSQL packages, so that we do not create a conflict

```
sudo dnf -qy module disable postgresql
```

Next we need to ensure that we have postfix with support for PostgreSQL, by installing the following packages:
- postfix
- postfix-pgsql

### Common for all
Once we have taken care of required software that has to install differently for the two versions, we can now continue with the common stuff.

Install the following packages:
- python3
- python3-devel
- python3-pip
- python3-setuptools
- nginx
- openssl
- ca-certificates
- libpng-devel
- redhat-lsb-core
- sudo

Next step is to install the database server
Install the following packages:
- postgresql12-devel
- postgresql12
- postgresql12-server
- libpq5
- libpq5-devel

Ommit `postgresql12-server` if the target is not supposed to run the database server.

RHEL-based distributions do not preconfigure PostgreSQL for us, so we have to that now

```
sudo /usr/pgsql-12/bin/postgresql-12-setup initdb
```

To compile frontend of the application, you also need to install NodeJS

You can install it from the official Ubuntu repository and risk getting a version that is not fully compatible with `MailGuardian`. To make it easy, we recommend installing the LTS version tested with `MailGuardian`, using this command:

```
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
```

Finally install the package `nodejs` and that is it.