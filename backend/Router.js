const express = require('express');
const router = express.Router();
const {
  getBanners,
  addBanner,
  updateBanner,
  deleteBanner,
  getBannerById,

} = require('./Controller');

router.get('/', getBanners);
router.get('/:id', getBannerById);
router.post('/', addBanner);
router.put('/:id', updateBanner);
router.delete('/:id', deleteBanner);

module.exports = router;