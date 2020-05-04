/**
 * Select n characters from the left side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
export function left(s, n) {
    n = Math.abs(n);
    return s.slice(0, n === 0 ? s.length : n);
}
/**
 * Returns true if character is an aposthrophe
 * @param text - single character to inspect
 */
export function isApostrophe(text) {
    return text.length === 1 && (text === "'" || text === "‘" || text === "’" || text === "`");
}
/**
 * Returns true if character is a hyphen
 * @param text - single character to inspect
 */
export function isHyphen(text) {
    return text.length === 1 && (text === "‐" || text === "‑" || text === "-" || text === "⁃");
}
/**
 * Returns true if character string begins with an uppercase letter
 * @param text - text to test for propercase
 */
export function isPropercase(text) {
    let proper = false, wordStart = true;
    for (let i = 0; i < text.length; i++) {
        if (isApostrophe(text[i]) || isHyphen(text[i]) || isSpace(text[i])) {
            wordStart = true;
            proper = false;
        }
        else if (text[i] === text[i].toLocaleLowerCase() && wordStart) {
            proper = false;
            break;
        }
        else if (text[i] === text[i].toLocaleUpperCase() && wordStart) {
            proper = true;
            wordStart = false;
        }
        else if (text[i] === text[i].toLocaleUpperCase() && !wordStart) {
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
export function isSpace(text) {
    return text.length > 0 && text.trim() === "";
}
/**
 * Select n characters from the right side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
export function right(s, n) {
    return s.slice(-1 * Math.abs(n));
}
