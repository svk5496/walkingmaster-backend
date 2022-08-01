export const processHashtags = (caption) => {
  const hashtags = caption.match(/[^,]+/g);
  return hashtags.map((hashtag) => ({
    where: { hashtag },
    create: { hashtag },
  }));
};

export const processCateogry1 = (caption) => {
  const categories1 = caption.match(/[^,]+/g);
  return categories1.map((category) => ({
    where: { category },
    create: { category },
  }));
};

export const processCateogry2 = (caption) => {
  const categories2 = caption.match(/[^,]+/g);
  return categories2.map((category) => ({
    where: { category },
    create: { category },
  }));
};

export const processCateogry3 = (caption) => {
  const categories3 = caption.match(/[^,]+/g);
  return categories3.map((category) => ({
    where: { category },
    create: { category },
  }));
};

export const processColor = (caption) => {
  const colors = caption.match(/[^,]+/g);
  return colors.map((color) => ({
    where: { color },
    create: { color },
  }));
};

export const processSize = (caption) => {
  const sizes = caption.match(/[^,]+/g);
  return sizes.map((size) => ({
    where: { size },
    create: { size },
  }));
};

export const processExtra = (caption) => {
  const extraOptions = caption.match(/[^,]+/g);
  return extraOptions.map((extraOption) => ({
    where: { extraOption },
    create: { extraOption },
  }));
};
