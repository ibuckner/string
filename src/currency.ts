import { findByLocale } from "./find";

const currencies = new Map<string, RegExp[]>([
  [
    "en-GB",
    [
      /£\s*\d[\d,]*(?:\.\d{1,2})?(?:\s?(?:b|m|tr)illion|bn|k|m)?\b/gmi,
      /\b\d[\d,\.]*(?:\s(?:b|m|tr)illion|bn|k|m)?(?:(?:\s(?:pounds?|pence))|p)\b/gmi
    ]
  ],
  [
    "en-US",
    [
      /\$\s*\d[\d,]*(?:\.\d{1,2})?(?:\s?(?:b|m|tr)illion|bn|k|m)?\b/gmi,
      /\b\d[\d,\.]*(?:\s(?:b|m|tr)illion|bn|k|m)?(?:(?:\s(?:dollar|cent)s?)|c)\b/gmi
    ]
  ]
]);

const numbers = new Map<string, RegExp[]>([
  [
    "en-GB",
    [
      /\b2(22[1-9]\d{12}|2[3-9]\d{13}|[3-6]\d{14}|7[0-1]\d{13}|720\d{12})\b/gm,
      /\b4\d\d\d\s?\d\d\d\d\s?\d\d\d\d\s?\d\d\d\d\b/gm,
      /\b5[1-5]\d\d\s?\d\d\d\d\s?\d\d\d\d\s?\d\d\d\d\b/gm,
      /\b\d{7,8}\b/gm,
      /\b\d\d\-\d\d\-\d\d\b/gm
    ]
  ]
]);

/**
 * Returns iterator of banking numbers located in string
 * @param d - string to test
 * @param locale - defaults to en-GB
 */
export function findBankingNumbers(d: string, locale: string[] = ["en-GB"]): RegExpMatchArray[] {
  return findByLocale(d, numbers, locale);
}

/**
 * Returns iterator of currencies located in string
 * @param d - string to test
 * @param locale - defaults to en-GB
 */
export function findCurrency(d: string, locale: string[] = ["en-GB"]): RegExpMatchArray[] {
  return findByLocale(d, currencies, locale);
}