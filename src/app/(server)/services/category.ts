import { CategoryType } from '@/app/(shared)/utils/types';
import db from '../db';

export const getCategories = (): CategoryType[] => {
  const stmt = db.prepare('SELECT * FROM Category');
  return stmt.all() as CategoryType[];
};

export const getCategory = (id: number): CategoryType | undefined => {
  const stmt = db.prepare('SELECT * FROM Category WHERE id = ?');
  return stmt.get(id) as CategoryType | undefined;
};
