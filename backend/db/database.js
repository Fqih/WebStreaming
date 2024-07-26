const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'banners.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS banners (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      imageUrl TEXT NOT NULL,
      description TEXT NOT NULL,
      views INTEGER DEFAULT 0,
      rating TEXT,
      synopsis TEXT,
      release TEXT,
      studio TEXT,
      genre TEXT,
      status TEXT,
      totalEpisodes INTEGER
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Table "banners" created or already exists.');
    }
  });
});

module.exports = db;