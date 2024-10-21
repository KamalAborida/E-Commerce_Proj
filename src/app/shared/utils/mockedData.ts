import { CategoryType, ProductType } from './types';

export const categoriesData: CategoryType[] = [
  { name: 'Headphones', id: 1, previewImage: '/headphones-preview.svg' },
  { name: 'Speakers', id: 2, previewImage: '/speakers-preview.svg' },
  { name: 'Earphones', id: 3, previewImage: '/earphones-preview.svg' },
];

export const productsData: ProductType[] = [
  {
    name: 'XX99 Mark I Headphones',
    isNew: 1, // isNew
    price: 299.99,
    previewImage: 'XX99_Mark_I_Headphones-preview',
    features: 'High-fidelity sound, Noise cancellation',
    description: 'The M11X offers exceptional sound quality...',
    inTheBox: JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'USB cable', quantity: 1 },
      { item: 'User manual', quantity: 1 },
    ]),
    images: JSON.stringify({
      smallImages: [
        'XX99_Mark_I_Headphones-image1',
        'XX99_Mark_I_Headphones-image2',
      ],
      largeImage: 'XX99_Mark_I_Headphones-image',
    }),
    categoryId: 0,
    id: 0,
  },
  {
    name: 'XX99 Mark II Headphones',
    isNew: 0, // isNew
    price: 299.99,
    previewImage: 'XX99_Mark_I_Headphones-preview',
    features: 'High-fidelity sound, Noise cancellation',
    description: 'The M11X offers exceptional sound quality...',
    inTheBox: JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'USB cable', quantity: 1 },
      { item: 'User manual', quantity: 1 },
    ]),
    images: JSON.stringify({
      smallImages: [
        'XX99_Mark_I_Headphones-image1',
        'XX99_Mark_I_Headphones-image2',
      ],
      largeImage: 'XX99_Mark_I_Headphones-image',
    }),
    categoryId: 0,
    id: 0,
  },
  {
    name: 'XX99 Mark III Headphones',
    isNew: 0, // isNew
    price: 299.99,
    previewImage: 'XX99_Mark_I_Headphones-preview',
    features: 'High-fidelity sound, Noise cancellation',
    description: 'The M11X offers exceptional sound quality...',
    inTheBox: JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'USB cable', quantity: 1 },
      { item: 'User manual', quantity: 1 },
    ]),
    images: JSON.stringify({
      smallImages: [
        'XX99_Mark_I_Headphones-image1',
        'XX99_Mark_I_Headphones-image2',
      ],
      largeImage: 'XX99_Mark_I_Headphones-image',
    }),
    categoryId: 0,
    id: 0,
  },
];
