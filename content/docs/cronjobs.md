---
title: Cron jobs
description: Find out which cron jobs MailGuardian runs and how to customize their timings
category: Advanced
category_order: 3
---

## Custom cronjob timing
If you for some reason, wish to customize when your cronjobs run, you just need to replace the magic `@interval` with the normal cron syntax.

This is the crontab you have if you have followed the installation guide:

```
@hourly /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs hourly
@daily /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs daily
@weekly /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs weekly
@monthly /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs monthly
```

Let us now change the hourly cronjob to run at 5th minute of every hour, which means that it would run at 01:05AM, 02:05AM, 03:05AM etc. instead of running 01:00AM, 02:00AM, 03:00AM etc.
Change this:

```
@hourly /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs hourly
```

To this:

```
5 * * * * /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs hourly
```

Next let us change the daily cron job to run at 03:00 AM instead of the default 00:00AM.
Change this:

```
@daily /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs daily
```

To this:

```
0 3 * * * /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs daily
```

While we are at it, let us also change the weekly cronjob to run at 04:00AM every week on sundays.
Change this:

```
@weekly /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs weekly
```

To this:

```
0 4 * * 0 /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs weekly
```

Finally, let us reschedule the monthly cron job for running at 01:00AM the first day in every month:

Change this:

```
@monthly /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs monthly
```

To this:

```
0 4 * */1 * /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjobs monthly
```
