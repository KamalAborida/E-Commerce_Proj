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
  const headphones = insertCategory.run('Headphones', 'headphones.svg');
  const speakers = insertCategory.run('Speakers', 'speakers.svg');
  const earphones = insertCategory.run('Earphones', 'earphones.svg');

  // Populate Headphones category
  insertProduct.run(
    'XX99 Mark II Headphones',
    1, // isNew
    299.99,
    'XX99_Mark_II_Headphones-preview',
    'High-fidelity sound, Noise cancellation',
    'The M11X offers exceptional sound quality...',
    JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'USB cable', quantity: 1 },
      { item: 'User manual', quantity: 1 },
    ]),
    JSON.stringify({
      smallImages: [
        'XX99_Mark_II_Headphones-image2',
        'XX99_Mark_II_Headphones-image3',
      ],
      largeImage: 'XX99_Mark_II_Headphones-image1',
    }),
    headphones.lastInsertRowid
  );

  insertProduct.run(
    'XX99 Mark I Headphones',
    0, // isNew
    199.99,
    'XX99_Mark_I_Headphones-preview',
    'Wireless, 40-hour battery life',
    'X500 offers unmatched wireless sound...',
    JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'Charging cable', quantity: 1 },
    ]),
    JSON.stringify({
      smallImages: [
        'XX99_Mark_I_Headphones-image2',
        'XX99_Mark_I_Headphones-image3',
      ],
      largeImage: 'XX99_Mark_I_Headphones-image1',
    }),
    headphones.lastInsertRowid
  );

  insertProduct.run(
    'XX59 Headphones',
    0, // isNew
    899.99,
    'XX59_Headphones-preview',
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.X500 offers unmatched wireless sound...',
    JSON.stringify([
      { item: 'Headphone', quantity: 1 },
      { item: 'Charging Cable', quantity: 1 },
      { item: 'User Manual', quantity: 1 },
      { item: 'Replacement Earcups', quantity: 4 },
    ]),
    JSON.stringify({
      smallImages: ['XX59_Headphones-image2', 'XX59_Headphones-image3'],
      largeImage: 'XX59_Headphones-image1',
    }),
    headphones.lastInsertRowid
  );

  const saltRounds = 10;
  const password = 'securepassword123'; // Plain text password
  const hashedPassword = bcrypt.hashSync(password, saltRounds); // Synchronously hash the password

  // Insert admin user
  insertAdmin.run(
    'adminUser', // username
    hashedPassword // password (in real-world applications, you'd hash the password)
  );

  // Populate Speakers category
  // insertProduct.run(
  //   'ZX9 SPEAKER',
  //   1, // isNew
  //   149.99,
  //   'ZX9_SPEAKER-preview',
  //   'Portable, Water-resistant',
  //   'BoomBox is the perfect outdoor companion...',
  //   JSON.stringify([
  //     { item: 'Speaker', quantity: 1 },
  //     { item: 'Charging cable', quantity: 1 },
  //     { item: 'Carrying strap', quantity: 1 },
  //   ]),
  //   JSON.stringify({
  //     smallImages: ['ZX9_SPEAKER-image1', 'ZX9_SPEAKER-image2'],
  //     largeImage: 'ZX9_SPEAKER-image',
  //   }),
  //   speakers.lastInsertRowid
  // );

  // insertProduct.run(
  //   'SoundBlast Pro',
  //   0, // isNew
  //   249.99,
  //   'url-to-speaker-soundblast-preview',
  //   'Powerful bass, 360-degree sound',
  //   'SoundBlast Pro delivers deep bass and rich sound...',
  //   JSON.stringify([
  //     { item: 'Speaker', quantity: 1 },
  //     { item: 'Charging cable', quantity: 1 },
  //     { item: 'User manual', quantity: 1 },
  //   ]),
  //   JSON.stringify({
  //     smallImages: ['url-to-small-image1', 'url-to-small-image2'],
  //     largeImage: 'url-to-large-image',
  //   }),
  //   speakers.lastInsertRowid
  // );

  // Populate Earphones category
  // insertProduct.run(
  //   'YX1 WIRELESS EARPHONES',
  //   1, // isNew
  //   79.99,
  //   'YX1_WIRELESS_EARPHONES-preview',
  //   'Noise cancellation, Wireless',
  //   'EarFit Pro provides comfort and high-quality sound...',
  //   JSON.stringify([
  //     { item: 'Earphones', quantity: 1 },
  //     { item: 'Charging case', quantity: 1 },
  //     { item: 'User manual', quantity: 1 },
  //   ]),
  //   JSON.stringify({
  //     smallImages: [
  //       'YX1_WIRELESS_EARPHONES-image1',
  //       'YX1_WIRELESS_EARPHONES-image2',
  //     ],
  //     largeImage: 'YX1_WIRELESS_EARPHONES-image',
  //   }),
  //   earphones.lastInsertRowid
  // );

  console.log(
    'Database populated with categories and products, with image updates.'
  );
} catch (error) {
  console.error('Error inserting data:', error);
} finally {
  db.close();
}
