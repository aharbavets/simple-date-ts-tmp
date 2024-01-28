# simple-date-ts #
A library that makes it easy to work with dates without the time part.

## Introduction
Frequently timezones can change your date from one day to another just because the date has been converted from one time zone to another. 
For instance `2000-01-01T00:00:00` can turn into  `1999-12-31T23:00:00` in a different time-zone. But in some cases we absolutely don't care about the time part. It's important for us that it was January 1, 2000 and not the other day. 
In this case we can represent the date as a string `2000-01-01`. But then we are getting another problem  — how to manipulate dates represented this way? And now simple-date-ts comes to the rescue. 
It can add or subtract any number of days, months or years from the date, generate arrays containing date inside specified date ranges and do some other date arithmetic.
