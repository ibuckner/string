/**
 * Returns true if character is an aposthrophe
 * @param text - single character to inspect
 */
export function isApostrophe(text: string): boolean {
  return text.length === 1 && (text === "'" || text === "‘" || text === "’" || text === "`");
}

/**
 * Returns true if a date
 * @param d - date to test
 * @param re - regular expression to apply when d is a string
 */
export function isDate(d: any, re?: RegExp): boolean {
  if (Object.prototype.toString.call(d) === "[object Date]") {
    return true;
  }
  return re ? re.test(d) : false;
}

/**
 * Returns true if character is a hyphen
 * @param text - single character to inspect
 */
export function isHyphen(text: string): boolean {
	return text.length === 1 && (text === "‐" || text === "‑" || text === "-" || text === "⁃");
}

/**
 * Returns true if meets valid NHS number check
 * @param n - number to be tested
 */
export function isNHSNumber(nhs: string): boolean {
  nhs = nhs.replace(/ /g, "");
  if (nhs.length !== 10) { return false; }
  if (nhs === nhs[0].repeat(10)) { return false; }
  let n: number[] = nhs.split("").map(s => parseInt(s));
  let sum: number = 0, m: number = 10;
  for (let i: number = 0; i < 9; i++) {
    sum += n[i] * m--;
  }
  let mod: number = sum % 11;
  let check: number = 11 - mod === 11 ? 0 : 11 - mod;
  if (check === 10 || check !== n[9]) {
    return false;
  }
  return true;
}

/**
 * Returns true if number is checked to be valid
 * @param n - Number to check
 */
export function isNumeric(n: any): boolean {
  return !isNaN(n - parseFloat(n));
}

/**
 * Returns true if character string begins with an uppercase letter
 * @param text - text to test for propercase
 */
export function isPropercase(text: string): boolean {
	let proper: boolean = false, wordStart: boolean = true;
	for (let i = 0; i < text.length; i++) {
		if (isApostrophe(text[i]) || isHyphen(text[i]) || isSpace(text[i])) {
			wordStart = true;
			proper = false;
		} else if (text[i] === text[i].toLocaleLowerCase() && wordStart) {
			proper = false;
			break;
		} else if (text[i] === text[i].toLocaleUpperCase() && wordStart) {
			proper = true;
			wordStart = false;
		} else if (text[i] === text[i].toLocaleUpperCase() && !wordStart) {
			proper = false;
			break;
		}
	}
  return proper;
}

/**
 * Returns true if character string is whitespace
 * @param text - text to test for whitespace
 */
export function isSpace(text: string): boolean {
	return text.length > 0 && text.trim() === "";
}

/**
 * Select n characters from the left side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
export function left(s: string, n: number): string {
	n = Math.abs(n);
	return s.slice(0, n === 0 ? s.length : n);
}

export const reEmail: RegExp = /\b[\w\._]+@[\w]+\.[\w\.]+\b/g;
export const reDecimal: RegExp = /\b[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)([eE][-+]?[0-9]+)?\b/g;
export const rePostcode: RegExp = /^(gir\s{0,3}0aa)|((([a-z][0-9]{1,2})|(([a-z][a-hj-y][0-9]{1,2})|(([a-z][0-9][a-z])|([a-z][a-hj-y][0-9]?[a-z]))))\s{0,3}[0-9][a-z]{2})$/i;
export const reURL: RegExp = /\b(https?|ftp|file):\/\/([\w\d-.]+):?(\d{2,})?\b/g;
export const reYYYYMMDD: RegExp = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

/**
 * Select n characters from the right side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
export function right(s: string, n: number): string {
	return s.slice(-1 * Math.abs(n));
}