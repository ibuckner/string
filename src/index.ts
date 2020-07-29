import { findBankingNumbers, findCurrency } from "./currency";
import { isDate, findDate } from "./date";
import { isNumeric, findNumeric } from "./numeric";
import { findEmail } from "./email";
import { isNHSNumber, findNHSNumber } from "./nhs";
import { findUKPostcode } from "./postcode";
import { isPropercase, properCase } from "./propercase";
import { findUKTelephone } from "./telephone";
import { findTime } from "./time";
import { left, right } from "./trim";
import { findURL } from "./url";

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
  let r: string = text.replace(/[\r\n]+/gm, "\n");
  r = r.replace(/[ \t]+/gm, " ");
  r = r.replace(/\s?[\-]\s?/gm, "-");
  if (/\s/gm.test(text) && text.length > 15) {
    const allCaps = !/[a-z]/gm.test(text);
    const allLow = !/[A-Z]/gm.test(text);
    if (allCaps || allLow) {
      r = properCase(r);
      return r;
    }
  }
  const re: RegExp = new RegExp(/\b[a-z]+\b/, "gmi");
  let m: RegExpExecArray | null;
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
  findNHSNumber,
  findNumeric,
  findTime,
  findUKPostcode,
  findUKTelephone,
  findURL,

  isApostrophe,
  isDate,
  isHyphen,
  isNHSNumber,
  isNumeric,
  isPropercase,
  isSpace,

  left,
  properCase,
  normalize,
  right
};