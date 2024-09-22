import db from '../db';

interface Product {
  id: number;
  name: string;
  isNew: boolean;
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

export const getProduct = (id: number): Product | undefined => {
  const stmt = db.prepare('SELECT * FROM Product WHERE id = ?');
  return stmt.get(id) as Product | undefined;
};
