/**
 * Select n characters from the left side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
function left(s, n) {
    n = Math.abs(n);
    return s.slice(0, n === 0 ? s.length : n);
}
/**
 * Select n characters from the right side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
function right(s, n) {
    return s.slice(-1 * Math.abs(n));
}

export { left, right };
