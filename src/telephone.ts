const reTel: RegExp[] = [
  /(?:\+?\(?44\)?|0044\s?)\s?\(?0?\)?\s?\d\s?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?/gmi,
  /\(?0\)?[\s\-]?\d?[\s\-]?\d[\s\-]?\d\)?[\s\-]?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?[\s\-]?\d[\s\-]?\d\d/gmi
];

/**
 * Returns iterator of telephone numbers located in string
 * @param d - string to test
 */
export function findUKTelephone(d: string): RegExpMatchArray[] {
  let result: RegExpMatchArray[] = [];
  reTel.forEach(m => {
    for (const mt of d.matchAll(m)) {
      if (result.findIndex((item) => item.index === mt.index && item[0] === mt[0]) === -1) {
        result.push(mt);
      }
    }
  });
  result.sort((a: any, b: any) => a.index > b.index ? 1 : -1);
  return result;
}