const reMoney = [
  /[$£€]\s*\d[\d,]*(?:\.\d{1,2})?(?:\s?(?:b|m|tr)illion|bn|k|m)?\b/gmi,
  /\d[\d,\.]*(?:\s(?:b|m|tr)illion|bn|k|m|p)?\s?(?:pounds?|p(?:ence)?|euros?|dollars?|c(?:ents?)?)\b/gmi
];

/**
 * Returns iterator of currencies located in string
 * @param d - string to test
 */
export function findCurrency(d: string): RegExpMatchArray[] {
  let result: RegExpMatchArray[] = [];
  reMoney.forEach(m => {
    for (const mt of d.matchAll(m)) {
      if (result.findIndex((item) => item.index === mt.index && item[0] === mt[0]) === -1) {
        result.push(mt);
      }
    }
  });
  result.sort((a: any, b: any) => a.index > b.index ? 1 : -1);
  return result;
}