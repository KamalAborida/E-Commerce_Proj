import db from './db';

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

  CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Session (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    token TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    expiresAt DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS Admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin', -- Can be admin or superadmin
    FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
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

try {
  // Insert categories
  const headphones = insertCategory.run(
    'Headphones',
    'url-to-headphones-preview'
  );
  const speakers = insertCategory.run('Speakers', 'url-to-speakers-preview');
  const earphones = insertCategory.run('Earphones', 'url-to-earphones-preview');

  // Populate Headphones category
  insertProduct.run(
    'M11X Headphone',
    1, // isNew
    299.99,
    'url-to-headphone-m11x-preview',
    'High-fidelity sound, Noise cancellation',
    'The M11X offers exceptional sound quality...',
    JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'USB cable', quantity: 1 },
      { item: 'User manual', quantity: 1 },
    ]),
    JSON.stringify({
      smallImages: ['url-to-small-image1', 'url-to-small-image2'],
      largeImage: 'url-to-large-image',
    }),
    headphones.lastInsertRowid
  );

  insertProduct.run(
    'X500 Wireless Headphone',
    0, // isNew
    199.99,
    'url-to-headphone-x500-preview',
    'Wireless, 40-hour battery life',
    'X500 offers unmatched wireless sound...',
    JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'Charging cable', quantity: 1 },
    ]),
    JSON.stringify({
      smallImages: ['url-to-small-image1', 'url-to-small-image2'],
      largeImage: 'url-to-large-image',
    }),
    headphones.lastInsertRowid
  );

  // Populate Speakers category
  insertProduct.run(
    'BoomBox Portable Speaker',
    1, // isNew
    149.99,
    'url-to-speaker-boombox-preview',
    'Portable, Water-resistant',
    'BoomBox is the perfect outdoor companion...',
    JSON.stringify([
      { item: 'Speaker', quantity: 1 },
      { item: 'Charging cable', quantity: 1 },
      { item: 'Carrying strap', quantity: 1 },
    ]),
    JSON.stringify({
      smallImages: ['url-to-small-image1', 'url-to-small-image2'],
      largeImage: 'url-to-large-image',
    }),
    speakers.lastInsertRowid
  );

  insertProduct.run(
    'SoundBlast Pro',
    0, // isNew
    249.99,
    'url-to-speaker-soundblast-preview',
    'Powerful bass, 360-degree sound',
    'SoundBlast Pro delivers deep bass and rich sound...',
    JSON.stringify([
      { item: 'Speaker', quantity: 1 },
      { item: 'Charging cable', quantity: 1 },
      { item: 'User manual', quantity: 1 },
    ]),
    JSON.stringify({
      smallImages: ['url-to-small-image1', 'url-to-small-image2'],
      largeImage: 'url-to-large-image',
    }),
    speakers.lastInsertRowid
  );

  // Populate Earphones category
  insertProduct.run(
    'EarFit Pro',
    1, // isNew
    79.99,
    'url-to-earphone-earfit-preview',
    'Noise cancellation, Wireless',
    'EarFit Pro provides comfort and high-quality sound...',
    JSON.stringify([
      { item: 'Earphones', quantity: 1 },
      { item: 'Charging case', quantity: 1 },
      { item: 'User manual', quantity: 1 },
    ]),
    JSON.stringify({
      smallImages: ['url-to-small-image1', 'url-to-small-image2'],
      largeImage: 'url-to-large-image',
    }),
    earphones.lastInsertRowid
  );

  console.log(
    'Database populated with categories and products, with image updates.'
  );
} catch (error) {
  console.error('Error inserting data:', error);
} finally {
  db.close();
}
