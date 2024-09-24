import db from '../db';

export interface Product {
  id: number;
  name: string;
  isNew: number;
  price: number;
  previewImage: string;
  features: string;
  description: string;
  inTheBox: string;
  images: string;
  categoryId: number;
}

export const getProductsByCategoryId = (categoryId: number): Product[] => {
  const stmt = db.prepare('SELECT * FROM Product WHERE categoryId = ?');
  return stmt.all(categoryId) as Product[];
};

export const getProducts = (): Product[] => {
  const stmt = db.prepare('SELECT * FROM Product');
  return stmt.all() as Product[];
};

export const getProduct = (id: number): Product | undefined => {
  const stmt = db.prepare('SELECT * FROM Product WHERE id = ?');
  return stmt.get(id) as Product | undefined;
};
