import db from '../db';
import { ProductType } from '@/app/shared/utils/types';

export const getProductsByCategoryId = (categoryId: number): ProductType[] => {
  const stmt = db.prepare('SELECT * FROM Product WHERE categoryId = ?');
  return stmt.all(categoryId) as ProductType[];
};

export const getProducts = (): ProductType[] => {
  const stmt = db.prepare('SELECT * FROM Product');
  return stmt.all() as ProductType[];
};

export const getProduct = (id: number): ProductType | undefined => {
  const stmt = db.prepare('SELECT * FROM Product WHERE id = ?');
  return stmt.get(id) as ProductType | undefined;
};

// Add a new product
export const addProduct = (productData: ProductType): void => {
  console.log(productData);

  const {
    name,
    isNew,
    price,
    previewImage,
    features,
    description,
    inTheBox,
    categoryId,
  } = productData;

  const images = JSON.stringify(productData.images);

  const stmt = db.prepare(`
    INSERT INTO Product (name, isNew, price, previewImage, features, description, inTheBox, images, categoryId)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    name,
    isNew,
    price,
    previewImage,
    features,
    description,
    inTheBox,
    images,
    categoryId
  );
};

// Delete a product by id
export const deleteProduct = (id: number): void => {
  const stmt = db.prepare(`DELETE FROM Product WHERE id = ?`);
  stmt.run(id);
};

// Update a product by id
export const updateProduct = (
  id: number,
  name: string,
  isNew: number,
  price: number,
  previewImage: string,
  features: string,
  description: string,
  inTheBox: string,
  images: string,
  categoryId: number
): void => {
  const stmt = db.prepare(`
    UPDATE Product 
    SET name = ?, isNew = ?, price = ?, previewImage = ?, features = ?, description = ?, inTheBox = ?, images = ?, categoryId = ?
    WHERE id = ?
  `);
  stmt.run(
    name,
    isNew,
    price,
    previewImage,
    features,
    description,
    inTheBox,
    images,
    categoryId,
    id
  );
};
