# string

A collection of functions for searching and verifying strings

```javascript

  findCurrency(searchText, locale=["en-GB"]);
  // Returns array of RegExpMatchArray of currency values found

  findDate(searchText);
  // Returns array of RegExpMatchArray of dates found

  findEmail(searchText);
  // Returns array of RegExpMatchArray of emails found

  findNHSNumber(searchText);
  // Returns array of RegExpMatchArray of NHS numbers found

  findNumeric(searchText);
  // Returns array of RegExpMatchArray of numeric values found

  findUKPostcode(searchText);
  // Returns array of RegExpMatchArray of UK postcodes found

  findURL(searchText);
  // Returns array of RegExpMatchArray of urls found

  isApostrophe(character);
  // Returns true if single quote

  isDate(string);
  // Returns true if date format recognised

  isHyphen(character);
  // Returns true if dash

  isNHSNumber(string);
  // Returns true if NHS number

  isNumeric(string);
  // Returns true if number

  isPropercase(string);
  // Returns true if matches Titlecase

  isSpace(character);
  // Returns true if space

  left(string, n);
  // Returns substring starting from left hand side for n length

  properCase(string);
  // Returns string formatted as Titlecase

  normalize(string);
  // Returns string without excess space and unusual capitalisation

  right(string, n);
  // Returns substring starting from right hand side for n length
```

## Install

```shell
npm i --save @buckneri/string
```
