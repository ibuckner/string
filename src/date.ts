const sc = "(?:,\\s?|\\s)";
const sd = "\\-";
const sp = "\\.";
const ss = "[\\/\\\\]";
const dd = "(?:0?(?:1(?:st)?|2(?:nd)?|3(?:rd)?|[4-9](?:th)?)|1[0-9](?:th)?|2[04-9](?:th)?|[23]1(?:st)?|22(?:nd)?|23(?:rd)?|30(?:th)?)";
const mm = "0?[1-9]|1[012]";
const m = "jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|sept?(?:ember)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?";
const yyyy = "\\d{4}";

const reDates: RegExp[] = [
  new RegExp(`\\b${yyyy}${sp}(?:${mm}|${m})(?:${sp}${dd})?\\b`, "gmi"),
  new RegExp(`\\b${yyyy}${sd}(?:${mm}|${m})(?:${sd}${dd})?\\b`, "gmi"),
  new RegExp(`\\b${yyyy}${ss}(?:${mm}|${m})(?:${ss}${dd})?\\b`, "gmi"),
  new RegExp(`\\b${yyyy}${sp}${dd}${sp}(?:${mm}|${m})\\b`, "gmi"),
  new RegExp(`\\b${yyyy}${sd}${dd}${sd}(?:${mm}|${m})\\b`, "gmi"),
  new RegExp(`\\b${yyyy}${ss}${dd}${ss}(?:${mm}|${m})\\b`, "gmi"),

  new RegExp(`\\b(?:${mm}|${m})${sp}${dd}${sp}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${mm}|${m})${sd}${dd}${sd}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${mm}|${m})${ss}${dd}${ss}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${dd}${sp})?(?:${mm}|${m})${sp}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${dd}${sd})?(?:${mm}|${m})${sd}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${dd}${ss})?(?:${mm}|${m})${ss}${yyyy}\\b`, "gmi"),

  new RegExp(`\\b(?:${m})\\s${dd}${sc}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${dd}\\s(?:of\\s)?)?(?:${m})${sc}${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${m})\\s${dd}\\s${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${dd}\\s)?(?:${m})\\s${yyyy}\\b`, "gmi"),
  new RegExp(`\\b(?:${yyyy}\\s)?(?:${m})(?:\\s(?:the\\s)?${dd})?\\b`, "gmi"),
  new RegExp(`\\b${yyyy}\\s${dd}\\s(?:${m})\\b`, "gmi")
];

/**
 * Returns true if a date
 * @param d - date string to test
 */
export function isDate(d: any): boolean {
  if (Object.prototype.toString.call(d) === "[object Date]") {
    return true;
  }
  let found = false;
  for (let i = 0; i < reDates.length; i++) {
    found = reDates[i].test(d);
    if (found) {
      break;
    }
  }
  return found;
}

/**
 * Returns iterator of dates located in string
 * @param d - string to test
 */
export function findDate(d: string): RegExpMatchArray[] {
  let result: RegExpMatchArray[] = [];
  let clean = new Map<number, RegExpMatchArray>();

  // find matches and de-duplicate
  reDates.forEach(m => {
    for (const mt of d.matchAll(m)) {
      // debug
      // (mt as any).source = m.source;

      if (mt.index !== undefined) {
        if (clean.has(mt.index)) {
          const chk = clean.get(mt.index) as RegExpMatchArray;
          if (chk[0].length < mt[0].length) {
            clean.set(mt.index, mt);
          }
        } else {
          clean.set(mt.index, mt);
        }
      }
    }
  });

  result = Array.from(clean.values());
  result.sort((a: any, b: any) => a.index > b.index ? 1 : -1);
  let prev: RegExpMatchArray;
  const drop: number[] = [];
  result.forEach((r: RegExpMatchArray, n: number) => {
    if (prev === undefined) {
      prev = r;
    } else {
      if (prev.index !== undefined && r.index !== undefined) {
        const pl = prev.index + prev[0].length;
        if (r.index >= prev.index && r.index <= pl) { // r overlaps
        drop.push(n);
        } else {
          prev = r;
        }
      }
    }
  });

  while (drop.length > 0) {
    const pos: number = drop.pop() as number;
    result.splice(pos, 1);
  }

  return result;
}