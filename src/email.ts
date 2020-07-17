/**
 * Test for email
 */
const reEmail = /\b(?:[''\w+\-\_\.]+)@(?!\.)(?:[\w+\-\_\.]+)\.(?:[\w+\-\_\.]+)\b/gmi;

/**
 * Returns iterator of emails located in string
 * @param d - string to test
 */
export function findEmail(d: string): RegExpMatchArray[] {
  return [...d.matchAll(reEmail)];
}
