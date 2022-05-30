function getTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const { width } = context.measureText(text);
  return width;
}

// Handling the dynamic overflow in the text labels
export function ellipsify(text, currentChild) {
  var titles = document.querySelectorAll(".titleImage");
  let box = titles[currentChild];
  const box_width = Math.floor(box.clientWidth);
  const font = window.getComputedStyle(box).font;
  let width = getTextWidth(text, font);
  if (width <= box_width) {
    return text;
  }
  let r = text.length - 1;
  let l = 0;
  let mid = 0;
  while (l <= r) {
    mid = (l + r) / 2;
    const temp = text.slice(0, mid) + "......" + text.slice(-mid);
    width = getTextWidth(temp, font);
    if (width > box_width) {
      r = mid - 1;
    } else l = mid + 1;
  }
  text = text.slice(0, r) + "..." + text.slice(1 - r);
  return text;
}
