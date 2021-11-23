import { findBankingNumbers, findCurrency } from "./currency";
import { isDate, findDate } from "./date";
import { isNumeric, findNumeric, findOrdinal } from "./numeric";
import { findEmail } from "./email";
import { findUKPostcode } from "./postcode";
import { isPropercase, properCase } from "./propercase";
import { findUKTelephone } from "./telephone";
import { findTime } from "./time";
import { left, right } from "./trim";
import { findURL } from "./url";
import { selectionTrim } from "./selection";

/**
 * Returns true if character is an aposthrophe
 * @param text - single character to inspect
 */
function isApostrophe(text: string): boolean {
  return text.length === 1 && (text === "'" || text === "‘" || text === "’" || text === "`");
}

/**
 * Returns true if character is a hyphen
 * @param text - single character to inspect
 */
function isHyphen(text: string): boolean {
	return text.length === 1 && (text === "‐" || text === "‑" || text === "-" || text === "⁃");
}

/**
 * Returns true if character string is whitespace
 * @param text - text to test for whitespace
 */
function isSpace(text: string): boolean {
	return text.length > 0 && text.trim() === "";
}

/**
 * Removes repeating whitespace and linebreaks
 * @param text 
 */
function normalize(text: string): string {
  let m: RegExpExecArray | null;
  let r: string = text.replace(/[\r\n]+/gm, "\n").trim();
  r = r.replace(/[ \t]+/gm, " ");
  r = r.replace(/\s?[\-]\s?/gm, "-");

  let gluedWords = new RegExp(/\b([A-Z][a-z]{2,}|\d+)([A-Z][a-z]{1,})\b/, "gm");
  while ((m = gluedWords.exec(r)) !== null) {
    r = r.substring(0, m.index) + m[1] + " " + m[2] + r.substring(m.index + m[0].length, r.length);
  }

  if (r.length > 1) {
    r = r[0].toLocaleUpperCase() + r.substring(1);
  }

  if (/\s/gm.test(text) && text.length > 15) {
    const allCaps = !/[a-z]/gm.test(text);
    const allLow = !/[A-Z]/gm.test(text);
    if (allCaps || allLow) {
      r = properCase(r);
      return r;
    }
  }

  let re = new RegExp(/\b[a-z]+\b/, "gmi");
  while ((m = re.exec(r)) !== null) {
    if (m[0] !== m[0].toLocaleLowerCase() && m[0] !== m[0].toLocaleUpperCase() && !isPropercase(m[0])) {
      r = r.substring(0, m.index) + m[0].toLocaleLowerCase() + r.substring(m.index + m[0].length);
    }
  }
  return r;
}

export {
  findBankingNumbers,
  findCurrency,
  findDate,
  findEmail,
  findNumeric,
  findOrdinal,
  findTime,
  findUKPostcode,
  findUKTelephone,
  findURL,

  isApostrophe,
  isDate,
  isHyphen,
  isNumeric,
  isPropercase,
  isSpace,

  left,
  properCase,
  normalize,
  right,
  selectionTrim
};