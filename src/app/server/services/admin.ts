import db from '../db';
import { AdminType } from '@/app/shared/utils/types';

// Fetch all admins
export const getAdmins = (): AdminType[] => {
  const stmt = db.prepare('SELECT id, username FROM Admin');
  return stmt.all() as AdminType[];
};

// Fetch an admin by username
export const getAdminByUsername = (username: string): AdminType | undefined => {
  const stmt = db.prepare(
    'SELECT id, username, password FROM Admin WHERE username = ?'
  );
  return stmt.get(username) as AdminType | undefined;
};
