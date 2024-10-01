import db from '../db';
import { ProductType } from '@/app/(shared)/utils/types';

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
