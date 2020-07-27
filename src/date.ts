import { find } from "./find";

const sep = "(?:,\\s?|\\s|\\-|\\.|\\/|\\\\|\\sof\\s|\\sthe\\s)";
const dd = "(0?(?:1(?:st)?|2(?:nd)?|3(?:rd)?|[4-9](?:th)?)|1[0-9](?:th)?|2[04-9](?:th)?|[23]1(?:st)?|22(?:nd)?|23(?:rd)?|30(?:th)?)";
const mm = "(0?[1-9]|1[012])";
const m = "(jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?)";
const yyyy = "(\\d{4})";

const reDates: RegExp[] = [
  // full short dates
  new RegExp(`\\b${yyyy}${sep}${mm}${sep}${dd}\\b`, "gmi"),
  new RegExp(`\\b${yyyy}${sep}${dd}${sep}${mm}\\b`, "gmi"),
  new RegExp(`\\b${dd}${sep}${mm}${sep}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b${mm}${sep}${dd}${sep}${yyyy}\\b`, "gmi"),

  // full long dates
  new RegExp(`\\b${yyyy}${sep}${m}${sep}${dd}\\b`, "gmi"),
  new RegExp(`\\b${yyyy}${sep}${dd}${sep}${m}\\b`, "gmi"),
  new RegExp(`\\b${dd}${sep}${m}${sep}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b${m}${sep}${dd}${sep}${yyyy}\\b`, "gmi"),

  // partial long dates
  new RegExp(`\\b${yyyy}${sep}${m}\\b`, "gmi"),
  new RegExp(`\\b${dd}${sep}${m}\\b`, "gmi"),
  new RegExp(`\\b${m}${sep}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b${m}${sep}${dd}\\b`, "gmi"),
];

/**
 * Returns true if a date
 * @param d - date string to test
 */
export function isDate(d: string): boolean {
  const mm = Date.parse(d);
  if (isNaN(mm)) {
    return false;
  }
  const dd = new Date(mm);
  return true;
}

/**
 * Returns iterator of dates located in string
 * @param d - string to test
 */
export function findDate(d: string): RegExpMatchArray[] {
  return find(d, reDates);
}