import { find } from "./find";

const reTel: RegExp[] = [
  /(?:\+?\(?44\)?|0044\s?)\s?\(?0?\)?\s?\d\s?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?/gmi,
  /\(?0\)?[\s\-]?\d?[\s\-]?\d[\s\-]?\d\)?[\s\-]?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?[\s\-]?\d[\s\-]?\d\d/gmi
];

/**
 * Returns iterator of telephone numbers located in string
 * @param d - string to test
 */
export function findUKTelephone(d: string): RegExpMatchArray[] {
  return find(d, reTel);
}