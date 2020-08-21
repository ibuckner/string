/**
 * Returns false if range is interrupted by multiple node types
 * @param range - valid document fragment containing nodes and text
 */
export function rangeContiguous(range: Range): boolean {
  return (<any>range.startContainer).data === (<any>range.endContainer).data;
}

/**
 * Returns false if range contains one or more nodes
 * @param range - valid document fragment containing nodes and text
 */
export function rangeEmpty(range: Range): boolean {
  return range.startOffset === range.endOffset;
}

/**
 * Removes leading edge whitespace from selection
 * @param selection - valid selection of text made by user
 */
export function selectionTrimLeft(selection: Selection): void {
  const leadingSpace: RegExp = /^\s/;
  let match: RegExpMatchArray | null = leadingSpace.exec(selection.toString());
  while (match) {
    if (selection.rangeCount === 0) {
      break;
    }
    const rng: Range = selection.getRangeAt(0);
    rng.setStart(rng.startContainer, rng.startOffset + 1);
    match = leadingSpace.exec(selection.toString());
  }
}

/**
 * Removes trailing edge whitespace from selection
 * @param selection - valid selection of text made by user
 */
export function selectionTrimRight(selection: Selection): void {
  const trailingSpace: RegExp = /\s$/;
  let match: RegExpMatchArray | null = trailingSpace.exec(selection.toString());
  while (match) {
    if (selection.rangeCount === 0) {
      break;
    }
    const rng: Range = selection.getRangeAt(0);
    rng.setEnd(rng.endContainer, rng.endOffset - 1);
    match = trailingSpace.exec(selection.toString());
  }
}

/**
 * Removes surrounding whitespace from selection
 * @param selection - valid selection of text made by user
 */
export function selectionTrim(selection: Selection): void {
  selectionTrimLeft(selection);
  selectionTrimRight(selection);
}
