import { find } from "./find";

const reN = /[\-\+]?(?:\d+(?:\.\d+)?(?:e[\-\+]\d+)?|(?:\.\d+))/gi;

const reOrdinal: RegExp[] = [
  /\b(?!and[\s\-])(?:(?:one|two|twenty|thir(?:teen|ty)|three|forty|four(?:teen)?|fif(?:teen|ty)|five|six(?:teen|ty)|seven(?:teen|ty)?|eight(?:een|y)?|nine(?:teen|ty)?|ten|eleven|twelve|hundred|thousand|[mb]illion|and)[\s\-])*(?:\d+(?:st|nd|rd|th)|first|second|third|(?:four|fif|six|seven|eigh|nine|ten|eleven|twelf|(?:(?:thir|four|fif|six|seven|eigh|nine)teen))+th|(?:twen|thir|for|fif|six|seven|eigh|nine)tieth|(?:(hundred|thousand|[mb]illion)th))\b/gmi
];

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
  let r: RegExpMatchArray[] = [], m: RegExpExecArray | null;
  while ((m = reN.exec(d)) !== null) {
    r.push(m);
  }
  return r;
}

/**
 * Returns iterator of ordinal numbers located in string
 * @param d - string to test
 */
export function findOrdinal(d: string): RegExpMatchArray[] {
  return find(d, reOrdinal);
}