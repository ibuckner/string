/**
 * Tests for number
 */
const reNumber = /[\-\+]?(?:\d+(?:\.\d+)?(?:e[\-\+]\d+)?|(?:\.\d+))/gi;

/**
 * Returns true if number is checked to be valid
 * @param n - Number to check
 */
export function isNumeric(n: any): boolean {
  return !isNaN(n - parseFloat(n));
}

/**
 * Returns iterator of decimals located in string
 * @param d - string to test
 */
export function findNumeric(d: string): RegExpMatchArray[] {
  return [...d.matchAll(reNumber)];
}