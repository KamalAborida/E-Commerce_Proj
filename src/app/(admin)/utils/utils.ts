export const getImageType = (image: File) => {
  return image.type.split('/')[1];
};
