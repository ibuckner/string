/**
 * Select n characters from the left side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
export function left(s: string, n: number): string {
	n = Math.abs(n);
	return s.slice(0, n === 0 ? s.length : n);
}

/**
 * Select n characters from the right side of string s
 * @param s - string to select from
 * @param n - number of characters to select
 */
export function right(s: string, n: number): string {
	return s.slice(-1 * Math.abs(n));
}