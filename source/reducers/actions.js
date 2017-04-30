export const DISPLAY_ITEM = 'DISPLAY_ITEM';
export const DISPLAY_SECTION = 'DISPLAY_SECTION';

export function displayItem(id) {
  return { type: DISPLAY_ITEM, id }
}

export function displaySectionm(id) {
  return { type: DISPLAY_SECTION, id }
}