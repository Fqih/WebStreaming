const { body, validationResult } = require('express-validator');
const db = require('./db/database');

const runQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

const runGetQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

const getBanners = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    const countQuery = 'SELECT COUNT(*) AS totalCount FROM banners';
    const countResult = await runGetQuery(countQuery);
    const totalCount = countResult.totalCount;

    const query = 'SELECT * FROM banners LIMIT ? OFFSET ?';
    const banners = await runQuery(query, [limit, offset]);

    res.json({ banners, totalCount });
  } catch (err) {
    console.error('Error getting banners:', err.message);
    res.status(500).send('Error getting banners');
  }
};

const addBanner = [
  body('imageUrl').isURL().withMessage('Image URL must be a valid URL'),
  body('description').isString().isLength({ min: 1 }).withMessage('Description must be a non-empty string'),
  body('views').isInt({ min: 0 }).withMessage('Views must be a non-negative integer'),
  body('rating').isString().optional().withMessage('Rating must be a string'),
  body('synopsis').isString().optional().withMessage('Synopsis must be a string'),
  body('release').isString().optional().withMessage('Release must be a string'),
  body('studio').isString().optional().withMessage('Studio must be a string'),
  body('genre').isString().optional().withMessage('Genre must be a string'),
  body('status').isString().optional().withMessage('Status must be a string'),
  body('totalEpisodes').isInt({ min: 0 }).optional().withMessage('Total Episodes must be a non-negative integer'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { imageUrl, description, views, rating, synopsis, release, studio, genre, status, totalEpisodes } = req.body;
    const query = 'INSERT INTO banners (imageUrl, description, views, rating, synopsis, release, studio, genre, status, totalEpisodes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    try {
      const result = await new Promise((resolve, reject) => {
        db.run(query, [imageUrl, description, views, rating, synopsis, release, studio, genre, status, totalEpisodes], function(err) {
          if (err) return reject(err);
          resolve(this.lastID);
        });
      });

      const newBanner = { id: result, imageUrl, description, views, rating, synopsis, release, studio, genre, status, totalEpisodes };
      res.status(201).json(newBanner);
    } catch (err) {
      console.error('Error adding banner:', err.message);
      res.status(500).send('Error adding banner');
    }
  }
];

const updateBanner = [
  body('imageUrl').isURL().optional().withMessage('Image URL must be a valid URL'),
  body('description').isString().optional().withMessage('Description must be a string'),
  body('views').isInt({ min: 0 }).optional().withMessage('Views must be a non-negative integer'),
  body('rating').isString().optional().withMessage('Rating must be a string'),
  body('synopsis').isString().optional().withMessage('Synopsis must be a string'),
  body('release').isString().optional().withMessage('Release must be a string'),
  body('studio').isString().optional().withMessage('Studio must be a string'),
  body('genre').isString().optional().withMessage('Genre must be a string'),
  body('status').isString().optional().withMessage('Status must be a string'),
  body('totalEpisodes').isInt({ min: 0 }).optional().withMessage('Total Episodes must be a non-negative integer'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { imageUrl, description, views, rating, synopsis, release, studio, genre, status, totalEpisodes } = req.body;
    const query = 'UPDATE banners SET imageUrl = ?, description = ?, views = ?, rating = ?, synopsis = ?, release = ?, studio = ?, genre = ?, status = ?, totalEpisodes = ? WHERE id = ?';

    try {
      const result = await new Promise((resolve, reject) => {
        db.run(query, [imageUrl, description, views, rating, synopsis, release, studio, genre, status, totalEpisodes, req.params.id], function(err) {
          if (err) return reject(err);
          resolve(this.changes);
        });
      });

      if (result === 0) {
        return res.status(404).send('Banner not found');
      }

      res.status(200).send('Banner updated successfully');
    } catch (err) {
      console.error('Error updating banner:', err.message);
      res.status(500).send('Error updating banner');
    }
  }
];

const deleteBanner = async (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM banners WHERE id = ?';

  try {
    const result = await new Promise((resolve, reject) => {
      db.run(query, id, function(err) {
        if (err) return reject(err);
        resolve(this.changes);
      });
    });

    if (result === 0) {
      return res.status(404).send('Banner not found');
    }

    res.status(204).send();
  } catch (err) {
    console.error('Error deleting banner:', err.message);
    res.status(500).send('Error deleting banner');
  }
};

const getBannerById = async (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM banners WHERE id = ?';

  try {
    const banner = await runGetQuery(query, [id]);

    if (!banner) {
      return res.status(404).send('Banner not found');
    }

    res.json(banner);
  } catch (err) {
    console.error('Error getting banner by ID:', err.message);
    res.status(500).send('Error getting banner by ID');
  }
};


module.exports = {
  getBanners,
  addBanner,
  updateBanner,
  deleteBanner,
  getBannerById,
};