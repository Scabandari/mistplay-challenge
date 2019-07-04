const express = require('express');
const router = express.Router();
const game_controller = require('../controllers/gameController');

router.post('/create', game_controller.game_create);
router.get('/list', game_controller.game_list);
router.get('/detail', game_controller.game_detail);

module.exports = router;