const express = require('express');
const router = express.Router();
const model_one_controller = require('../controllers/modelOneController');

router.post('/create', model_one_controller.model_one_create);
router.get('/list', model_one_controller.model_one_list);

module.exports = router;