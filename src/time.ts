import { find } from "./find";

const hh = "(?:0?[0-9]|1[0-9]|2[0-3])";
const mm = "(?:[0-5][0-9])";
const ms = "(?:[0-9][0-9][0-9])";
const sep = "[\\.\\:]";
const ss = "(?:[0-5][0-9])";
const tz = "(?:\\sBST)?";

const reTimes: RegExp[] = [
  new RegExp(`\\b${hh}\\:${mm}(?:\\:${ss})?(?:${sep}${ms})?${tz}\\b`, "gmi"),   // 24 hr
  new RegExp(`\\b${hh}(?:${sep}?${mm})?\\s?a\\.?m\\.?${tz}\\b`, "gmi"),         // am
  new RegExp(`\\b${hh}(?:${sep}?${mm})?\\s?hrs\\b`, "gmi"),                     // hrs
  new RegExp(`\\b${hh}(?:${sep}?${mm})?\\s?p\\.?m\\.?${tz}\\b`, "gmi"),         // pm
  new RegExp(`\\b${hh}(?:${sep}?${mm})?\\so[''\\s]{1,2}clock\\b`, "gmi"),       // o clock
  new RegExp(`[\\@]${hh}${sep}?${mm}\\b`, "gmi")                                // @1700
];

/**
 * Returns iterator of times located in string
 * @param d - string to test
 */
export function findTime(d: string): RegExpMatchArray[] {
  return find(d, reTimes);
}
