export const processHashtags = (caption) => {
  console.log(caption);
  const hashtags = caption.match(/[^,]+/g);
  return hashtags.map((hashtag) => ({
    where: { hashtag },
    create: { hashtag },
  }));
};
