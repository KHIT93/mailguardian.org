---
title: Missing transport logs
description: Here is some help for how to troubleshoot the missing transport log data in the application
category: Troubleshooting
category_order: 4
---

## Transport log data is not populating on messages
This is related to the permissions set on the mail log. Often these files are owned by root and some administrative group.
The easy fix is simply to make your `mailguardian` application user to a member of the given group. This can however introduce some security risks if the given user account is compromised.

Another option is to create a cronjob for `root`, so that the log synchronization can be executed as `root`. This eliminates the problem in a farily simple way. The cronjob to create would look like this:

```
@hourly /home/mailguardian/mailguardian/bin/python /home/mailguardian/mailguardian/src/manage.py runjob mail process_mta_log > /dev/null 2>&1
```

This job is also what we create in our installation script

The final option, which would be the most secure option, although a bit more complicated to configure, is to change the settings for `log rotation`. This would allow you to set the permissions of the log file when it is being rotated by the operating system and thereby allow you to set just enough permissions for allowing the `mailguardian` application user to read the logfile.