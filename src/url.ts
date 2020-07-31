import { find } from "./find";

const reURL: RegExp[] = [
  /\b(?:(?:https?|file|ftps?):\/\/)(?:\S+(?::\S*)?@)?(?:(?:\w+-?)*\w+)(?:\.(?:\w+-?)*\w+)*(?:\.(?:\w{2,}))(?::\d{2,5})?(?:\/[^\s]*)?/gmi,
  /\b[a-z\.]+\/\w+\b/gmi
];

/**
 * Returns iterator of urls located in string
 * @param d - string to test
 */
export function findURL(d: string): RegExpMatchArray[] {
  return find(d, reURL);
}