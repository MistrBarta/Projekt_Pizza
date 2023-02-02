const express = require('express');
const router = express.Router();

const userController = require("../controllers/skin");

router.get('/', skinController.getAllSkin);
router.get('/:id', skinController.getSkinById);
router.post('/', skinController.postSkin);
router.put('/:id', skinController.putSkin);
router.delete('/:id', skinController.deleteSkin);

module.exports = router;