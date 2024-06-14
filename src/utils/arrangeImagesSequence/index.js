export function arrangeImagesSequence(imageArray, sheet) {
  let imageMap = {};

  imageArray.forEach((image) => {
    const match = image?.match(/-(\d+)_/);
    if (match) {
      imageMap[match[1]] = {
        range: `${sheet}!H${parseInt(match[1]) + 1}`,
        values: [[image]],
      };
    }
  });
  return Object.values(imageMap);
}
