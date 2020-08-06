/**
 * Returns iterator of regexp matches located in string
 * @param d - string to test
 * @param re - array of regular expressions to search over
 */
export function find(d: string, re: RegExp[]): RegExpMatchArray[] {
  let result: RegExpMatchArray[] = [];
  let clean = new Map<number, RegExpMatchArray>();
  let mt: RegExpExecArray | null;

  // find matches and de-duplicate
  re.forEach(rema => {    
    while ((mt = rema.exec(d)) !== null) {
      (mt as any).source = rema.source;
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

/**
 * Returns iterator of banking numbers located in string
 * @param d - string to test
 * @param localSet - map of locale specific regular expressions
 * @param locale - defaults to en-GB
 */
export function findByLocale(d: string, localeSet: Map<string, RegExp[]>, locale: string[]): RegExpMatchArray[] {
  let result: RegExpMatchArray[] = [];
  let mt: RegExpExecArray | null;

  locale.forEach(loc => {
    let re = localeSet.get(loc);
    if (re) {
      re.forEach(rema => {
        while ((mt = rema.exec(d)) !== null) {
          if (result.findIndex((item) => mt && item.index === mt.index && item[0] === mt[0]) === -1) {
            result.push(mt);
          }
        }
      });
    }
  });
  result.sort((a: any, b: any) => a.index > b.index ? 1 : -1);
  return result;
}