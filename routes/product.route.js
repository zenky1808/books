const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.get("/", controller.index);

module.exports = router;