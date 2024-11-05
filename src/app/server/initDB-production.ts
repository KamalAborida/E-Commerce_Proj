import db from './db';
import bcrypt from 'bcrypt';

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS Category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    previewImage TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    isNew INTEGER DEFAULT 0,
    price REAL NOT NULL,
    previewImage TEXT NOT NULL,
    features TEXT NOT NULL,
    description TEXT NOT NULL,
    inTheBox TEXT NOT NULL, -- Storing as JSON string
    images TEXT NOT NULL, -- Storing smallImages and largeImage as JSON
    categoryId INTEGER,
    FOREIGN KEY (categoryId) REFERENCES Category(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS Admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );
`);

// Insert sample data
const insertCategory = db.prepare(`
  INSERT INTO Category (name, previewImage) VALUES (?, ?)
`);

const insertProduct = db.prepare(`
  INSERT INTO Product (name, isNew, price, previewImage, features, description, inTheBox, images, categoryId)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertAdmin = db.prepare(`
  INSERT INTO Admin (username, password) VALUES (?, ?)
`);

try {
  // Insert categories
  const headphones = insertCategory.run(
    'Headphones',
    'url-to-headphones-preview'
  );
  const speakers = insertCategory.run('Speakers', 'url-to-speakers-preview');
  const earphones = insertCategory.run('Earphones', 'url-to-earphones-preview');

  const saltRounds = 10;
  const password = 'securepassword123'; // Plain text password
  const hashedPassword = bcrypt.hashSync(password, saltRounds); // Synchronously hash the password

  insertAdmin.run('adminUser', hashedPassword);
} catch (error) {
  console.error('Error inserting data:', error);
} finally {
  db.close();
}
