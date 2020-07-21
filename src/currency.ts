const currencies = new Map<string, RegExp[]>([
  [
    "en-GB",
    [
      /£\s*\d[\d,]*(?:\.\d{1,2})?(?:\s?(?:b|m|tr)illion|bn|k|m)?\b/gmi,
      /\d[\d,\.]*(?:\s(?:b|m|tr)illion|bn|k|m)?(?:(?:\s(?:pounds?|pence))|p)\b/gmi
    ]
  ],
  [
    "en-US",
    [
      /\$\s*\d[\d,]*(?:\.\d{1,2})?(?:\s?(?:b|m|tr)illion|bn|k|m)?\b/gmi,
      /\d[\d,\.]*(?:\s(?:b|m|tr)illion|bn|k|m)?(?:(?:\s(?:dollar|cent)s?)|c)\b/gmi
    ]
  ]
]);

/**
 * Returns iterator of currencies located in string
 * @param d - string to test
 * @param locale - defaults to en-GB
 */
export function findCurrency(d: string, locale: string[] = ["en-GB"]): RegExpMatchArray[] {
  let result: RegExpMatchArray[] = [];
  locale.forEach(loc => {
    let reMoney = currencies.get(loc);
    if (reMoney) {
      reMoney.forEach(m => {
        for (const mt of d.matchAll(m)) {
          if (result.findIndex((item) => item.index === mt.index && item[0] === mt[0]) === -1) {
            result.push(mt);
          }
        }
      });
    }
  });
  result.sort((a: any, b: any) => a.index > b.index ? 1 : -1);
  return result;
}