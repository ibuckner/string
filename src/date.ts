/**
 * Tests for format 1999-01-01
 */
const reYYYYMMDD = /\b\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])\b/g;

/**
 * Returns true if a date
 * @param d - date string to test
 */
export function isDate(d: any): boolean {
  if (Object.prototype.toString.call(d) === "[object Date]") {
    return true;
  }
  return reYYYYMMDD.test(d);
}

/**
 * Returns iterator of dates located in string
 * @param d - string to test
 */
export function findDate(d: string): RegExpMatchArray[] {
  return [...d.matchAll(reYYYYMMDD)];
}