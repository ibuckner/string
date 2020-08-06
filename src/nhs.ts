const reNHS = /[34679]\d\d\s?\d\s?\d\s?\d\s?\d\s?\d\s?\d\s?\d/g;

/**
 * Returns true if meets valid NHS number check
 * @param n - number to be tested
 */
export function isNHSNumber(nhs: string): boolean {
  nhs = nhs.replace(/ /g, "");
  if (nhs.length !== 10) { return false; }
  if (nhs === nhs[0].repeat(10)) { return false; }
  let n: number[] = nhs.split("").map(s => parseInt(s));
  let sum: number = 0, m: number = 10;
  for (let i: number = 0; i < 9; i++) {
    sum += n[i] * m--;
  }
  let mod: number = sum % 11;
  let check: number = 11 - mod === 11 ? 0 : 11 - mod;
  if (check === 10 || check !== n[9]) {
    return false;
  }
  return true;
}

/**
 * Returns iterator of NHS numbers located in string
 * @param d - string to test
 */
export function findNHSNumber(d: string): RegExpMatchArray[] {
  let r: RegExpMatchArray[] = [], m: RegExpExecArray | null;
  while ((m = reNHS.exec(d)) !== null) {
    r.push(m);
  }
  return r;
}