// db.ts
import Database from 'better-sqlite3';
import path from 'path';

// Define the path for the database file
const dbPath = path.join(process.cwd(), 'data\\audio_store.db');

console.log(dbPath);

const db = new Database(dbPath);
// const db = new Database(
//   'D:\\Web projects\\E-Commerce_Proj\\app\\data\\audio_store.db'
// );

export default db;
