/**
 * Tests for UK postcode
 */
const rePostcode = /\b(gir\s{0,3}0aa)|((([a-z][0-9]{1,2})|(([a-z][a-hj-y][0-9]{1,2})|(([a-z][0-9][a-z])|([a-z][a-hj-y][0-9]?[a-z]))))\s{0,3}[0-9][a-z]{2})\b/gi;

/**
 * Returns iterator of UK postcodes located in string
 * @param d - string to test
 */
export function findUKPostcode(d: string): RegExpMatchArray[] {
  return [...d.matchAll(rePostcode)];
}