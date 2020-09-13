---
title: Migrate from 1.5.x to 2.0.0
description: Learn how to migrate from MailGuardian 1.5.x to 2.0.0
category: Upgrading
category_order: 11
article_order: 0
---

# Migrate 1.5.x to 2.0.0

After the final release of MailGuardian `2.0.0`, it is now time for you to upgrade your old installation to `2.0.0`.

## New upgrade procedure

To help you upgrade, we have completely rebuilt our upgrade scripts to make this process easy for you.

## Let's get started

Start by making a backup of your `MailGuardian` configuration and store it for use later. Depending on your version,
it can be either `mailguardian-env.json` and located in the root of your `MailGuardian` installation or it can be
`local.py` in `src/mailguardian/settings`.

Next get the latest sourcecode onto your server.

If you have previously downloaded and extracted a `zip` or `tar.gz`archive from our <nuxt-link class="font-semibold" to="/releases">Releases</nuxt-link>
page, then you would need to delete all files and extract the new ones and copy your configuration file back.
Please make sure to only remove the application files. The easiest is to therefore only delete the `src` folder.

If you manage your version through git, which btw. is the recommended method from `2.0.0` and onwards, then you need
to do the following:

```
git fetch origin
git checkout 2.0.0
```

Once you have the latest code, we first need to make sure that all required libraries are updated. This is done by
running
```
bin/pip install -r requirements.txt
```
and then let the system work.

Next, it is time to upgrade the database and recompile any frontend assets by running
```
bin/python upgrade.py
```

The upgrade script works as an entry point for multiple standalone scripts, which incrementally upgrades your installation
through any intermediate versions between what you are currently running and `2.0.0`

Through the upgrade procedure, each version upgrade script will have the option to inform of any manual changes needed.

The primary changes is that the defaults for new installs are now using the `MailScanner Milter` on top of `postfix`
instead of running through `postfix queues` and have `MailScanner` pull the messages from there.

Also the `Bayesian` data from `SpamAssassin` is now stored in the `MailGuardian` database to better support shared
intelligence across a multi-node deployment.

Both changes require manual intervention to migrate the configurations

### Migrate to the Milter

To migrate to the milter, we have prepared a script to make this migration for you. All you have to do is run it as root
```
bin/python installer/tools/milter-migration.py
```
This will reconfigure the `MailScanner.conf` to use the `Milter` and als reconfigure `master.cf`, `main.cf` and `header_checks`
of `postfix`. The old files will be kept for reference if a modification was accidently deleted by the script

### Migrate the `Bayesian` database

This is a more manual procedure, but fairly easy to perform. If you want to see how it is configured for new installs, you can
have a look here:
```
installer/spamassassin.py
```
First make sure that you make a backup of the following files
```
/etc/MailScanner/spamassassin.conf
```
Next you need to run the following command as `root`
```
su postgres -c "createlang plpgsql mailguardian"
```
If your database is not called `mailguardian´, you need to replace it in the above command.

Next we need to create the necessary database tables
```
psql -U mailguardian -f installer/tools/bayes.sql mailguardian
```

If you are using something different than above, replace the `-U` parameter with a different username and the last parameter
with the name of your database.

Now that the database is configured, it is time to configure `SpamAssassin` to know about your database.

Next we need to back up any existing data as `root`
```
sa-learn --backup > backup.txt
```

Open `/etc/MailScanner/spamassassin.conf` and find the line starting with `#bayes_auto_expire 0`

Then insert the following lines
```
bayes_store_module Mail::SpamAssassin::BayesStore::PgSQL
bayes_sql_dsn      DBI:Pg:{db}:{host}:{port}
bayes_sql_username {user}
bayes_sql_password {password}
```

- Replace `{db}` with the name of your database from your `MailGuardian` configuration
- Replace `{host}` with the database host from your `MailGuardian` configuration
- Replace `{user}` with the database username from your `MailGuardian` configuration
- Replace `{password}` with the database password from your `MailGuardian` configuration

Save the file

Now restore the previously backed up data as `root`
```
sa-learn --restore backup.txt
```

## And we're done
After this, the upgrade is done and you are ready to use `2.0.0` of `MailGuardian`