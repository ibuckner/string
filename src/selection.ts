/**
 * Creates a selection range
 * @param node Node to apply selection range to
 * @param start 
 * @param length 
 * @returns Selection
 */
export function createSelection(node: Node, start: number, length: number): Selection {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, start + length);
  const sel = window.getSelection() as Selection;
  sel.removeAllRanges();
  sel.addRange(range);
  return sel;
}

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

/*
 * Saves the cursor's position and returns a function
 * that when run, sets the cursor to the saved position
 */
export function restoreCursor(): Function {
  let sel = window.getSelection() as Selection;
  const node = sel.focusNode;
  const offset = sel.focusOffset;
  return function restore() {
    sel.collapse(node, offset);
  };
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
