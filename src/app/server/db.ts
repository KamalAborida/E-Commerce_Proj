import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'audio_store.db');

const db = new Database(dbPath);

console.log(dbPath);

export default db;
