/**
 * Tests for UK postcode
 */
const AA9A: string = `[A-Z][A-Z]\\d[ABEHMNPRVWXY]`;
const A9A: string = `[A-Z]\\d[ABCDEFGHJKNPSTUW]`;
const A9: string = `[A-Z]\\d`;
const A99: string = `[A-Z]\\d\\d`;
const AA9: string = `[A-Z][A-Z]\\d`;
const AA99: string = `[A-Z][A-Z]\\d\\d`;
const ERR: string = `0[LX]\\d{1,2}`;  // handles problems where user has entered zero instead of 'O'
const SP1: string = `BFPO\\s?\\d{1,4}|(KY\\d|MSR|VG|AI)[\\s-]?\\d{4}|GE\\s?CX|GIR\\s?0AA|SAN\\s?TA1`;
const SP2: string = `ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA`;
const re: string = `(?:(?:${AA9A}|${A9A}|${A9}|${A99}|${AA9}|${AA99}|${ERR}|${SP2})\\s?\\d[A-Z][A-Z]|${SP1})`;
const rePostcode = new RegExp(`\\b${re}\\b`, "gi");

/**
 * Returns iterator of UK postcodes located in string
 * @param d - string to test
 */
export function findUKPostcode(d: string): RegExpMatchArray[] {
  let r: RegExpMatchArray[] = [], m: RegExpExecArray | null;
  while ((m = rePostcode.exec(d)) !== null) {
    r.push(m);
  }
  return r;
}