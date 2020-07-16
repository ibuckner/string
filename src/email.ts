/**
 * Test for email
 */
const reEmail = /\b[\w\._]+@[\w]+\.[\w\.]+\b/g;

/**
 * Returns iterator of emails located in string
 * @param d - string to test
 */
export function findEmail(d: string): RegExpMatchArray[] {
  return [...d.matchAll(reEmail)];
}
