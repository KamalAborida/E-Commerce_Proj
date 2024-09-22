import db from '../db';

export interface Category {
  id: number;
  name: string;
  previewImage: string;
}

export const getCategories = (): Category[] => {
  const stmt = db.prepare('SELECT * FROM Category');
  return stmt.all() as Category[];
};

export const getCategory = (id: number): Category | undefined => {
  const stmt = db.prepare('SELECT * FROM Category WHERE id = ?');
  return stmt.get(id) as Category | undefined;
};
