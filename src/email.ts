/**
 * Test for email
 */
const reEmail = /\b(?:[''\w+\-\_\.]+)@(?!\.)(?:[\w+\-\_\.]+)\.(?:[\w+\-\_\.]+)\b/gmi;

/**
 * Returns iterator of emails located in string
 * @param d - string to test
 */
export function findEmail(d: string): RegExpMatchArray[] {
  let r: RegExpMatchArray[] = [], m: RegExpExecArray | null;
  while ((m = reEmail.exec(d)) !== null) {
    r.push(m);
  }
  return r;
}
