# string

A collection of functions for searching and verifying strings

```javascript

  findBankingNumbers(searchText, locale=["en-GB"]);
  // Returns array of RegExpArray of banking related numbers

  findCurrency(searchText, locale=["en-GB"]);
  // Returns array of RegExpMatchArray of currency values

  findDate(searchText);
  // Returns array of RegExpMatchArray of dates

  findEmail(searchText);
  // Returns array of RegExpMatchArray of emails

  findNHSNumber(searchText);
  // Returns array of RegExpMatchArray of NHS numbers

  findNumeric(searchText);
  // Returns array of RegExpMatchArray of numeric values

  findOrdinal(searchText);
  // Returns array of RegExpMatchArray of ordinal values e.g. 1st, third

  findTime(searchText);
  // Returns array of RegExpMatchArray of times

  findUKPostcode(searchText);
  // Returns array of RegExpMatchArray of UK postcodes

  findURL(searchText);
  // Returns array of RegExpMatchArray of urls

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

  selectionTrim(selection);
  // trims the whitespace around the text selection
```

## Install

```shell
npm i --save @buckneri/string
```
