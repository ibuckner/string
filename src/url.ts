/**
 * Tests for URLs prefixed with one of [file, ftp, http, https]
 */
const reURL = /\b(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?:\w+-?)*\w+)(?:\.(?:\w+-?)*\w+)*(?:\.(?:\w{2,}))(?::\d{2,5})?(?:\/[^\s]*)?/gmi;

/**
 * Returns iterator of urls located in string
 * @param d - string to test
 */
export function findURL(d: string): RegExpMatchArray[] {
  return [...d.matchAll(reURL)];
}