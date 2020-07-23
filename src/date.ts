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
  let result: RegExpMatchArray[] = [];
  let clean = new Map<number, RegExpMatchArray>();

  // find matches and de-duplicate
  reDates.forEach(m => {
    for (const mt of d.matchAll(m)) {
      // debug
      (mt as any).source = m.source;

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