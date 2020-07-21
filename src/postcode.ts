/**
 * Tests for UK postcode
 */
const rePostcode = /\b(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA)\s?[0-9][A-Z]{2}|BFPO\s?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[\s-]?[0-9]{4}|GE\s?CX|GIR\s?0A{2}|SAN\s?TA1)\b/gi;

/**
 * Returns iterator of UK postcodes located in string
 * @param d - string to test
 */
export function findUKPostcode(d: string): RegExpMatchArray[] {
  return [...d.matchAll(rePostcode)];
}