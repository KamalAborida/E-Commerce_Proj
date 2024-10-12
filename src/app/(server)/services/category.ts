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

export const addCategory = (name: string, previewImage: string): void => {
  const stmt = db.prepare(
    `INSERT INTO Category (name, previewImage) VALUES (?, ?)`
  );
  stmt.run(name, previewImage);
};

// Delete a category by id
export const deleteCategory = (id: number): void => {
  const stmt = db.prepare(`DELETE FROM Category WHERE id = ?`);
  stmt.run(id);
};

// Update a category by id
export const updateCategory = (
  id: number,
  name: string,
  previewImage: string
): void => {
  const stmt = db.prepare(
    `UPDATE Category SET name = ?, previewImage = ? WHERE id = ?`
  );
  stmt.run(name, previewImage, id);
};
