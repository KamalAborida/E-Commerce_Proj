// db.ts
import Database from 'better-sqlite3';
import path from 'path';

// Define the path for the database file
const dbPath = path.join(__dirname, 'audio_store.db');

// const db = new Database(dbPath);
const db = new Database(
  'D:\\Web projects\\E-Commerce_Proj\\app\\data\\audio_store.db'
);

export default db;
