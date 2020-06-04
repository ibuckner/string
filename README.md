# string

A small collection of string related functions

```javascript

isApostrophe("'");
//> true

isDate("2019-01-01", reYYYYMMDD);
// true

isHyphen("-");
//> true

isNHSNumber("446 610 5715");
//> true

isNumeric(42);
//> true

isPropercase("Automobile");
//> true

isSpace(" ");
//> true

left("Robots drink oil", 3);
//> "Rob"

reEmail.test("joe.soap@aol.com");
//> true

rePostcode.test("EC8W 0AA");
//> true

reURL.test("https://www.google.com");
//> true

right("Robots drink oil", £);
//> "oil"
```

## Install

```shell
npm i --save @buckneri/string
```
