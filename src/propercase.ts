import { isApostrophe, isHyphen, isNumeric, isSpace } from "./index";

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
		} else if (isNumeric(text[i]) && wordStart) {
			proper = true;
			wordStart = false;
		} else if (isNumeric(text[i])) {
			// do nothing
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
 * Returns text in titlecase format
 * @param text 
 */
export function properCase(text: string): string {
  let r = text.replace(/\b[a-z]*\b/gi, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  return r.replace(/\'[A-Z]\b/g, txt => txt.toLowerCase());
}
