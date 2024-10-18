export const dataInitialStateFunc = () => ({
  productName: '',
  price: '0',
  isNew: '0',
  categoryId: '0',
  previewImg: '',
  collagueLargeImg: '',
  collagueSmall1Img: '',
  collagueSmall2Img: '',
  description: '',
  features: '',
  inTheBox: '',
});

export const touchedInitialStateFunc = () => ({
  productName: false,
  price: false,
  isNew: false,
  categoryId: false,
  description: false,
  features: false,
  inTheBox: false,
});

export const errorsInitialStateFunc = () => ({
  productName: '',
  price: '',
  isNew: '',
  categoryId: '',
  description: '',
  features: '',
  inTheBox: '',
});
