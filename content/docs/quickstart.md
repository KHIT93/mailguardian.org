---
title: Quick Start
description: See how to quickly get started with MailGuardian
category: Getting started
category_order: 1
article_order: 0
---
# Getting started

Welcome to the MailGuardian documentation. We are glad that you have chosen our applicatin to manage your MailScanner deployment. We have made it unbelievably easy to deploy and manage your own professional spam filtering appliance.
For this to be as easy as possible, we have made the below instructions for the more technical parts of the deployment, to ensure that most people can follow along and get started.

To help you get started quickyl, we have a simple installation script, which will take care of everything for you. Simply run the lines below as root on your system

```
wget https://raw.githubusercontent.com/KHIT93/mailguardian/master/installer.sh
bash installer.sh
```

We will ask you some questions during the installation and the rest will be automated

## Initial setup in the browser

Once the installation script, `install.py`, has completed, it is time to perform the final steps of the setup and create our application administrator account. To perform the final steps and start using the application, please visit the URL given at the end of the installation script.
Once you visit the given URL, you will automatically be redirected to the setup screen.

Complete the setup wizard and then log in to the application.

As you will not be able to process any mail without valid domains, you need to go to the `Domains` menu item and create your first domain.

That's it. Once you have completed the remaining steps in this setup guide, you will be able to receive/process e-mail for the created domain(s).

## Congratulations!

We would like to congratulate you on completing the setup and configuration of our application and wish you the best of luck with the usage.
If you find any issues with the application, have requests for feature or find a security problem, please do not hesitate to create an issue here on GitHub and we will get back to you