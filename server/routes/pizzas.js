const express = require('express');
const router = express.Router();

const pizzaController = require("../controllers/pizzas");

router.get('/', pizzaController.getAllPizzas);
router.get('/:id', pizzaController.getPizzaById);
router.post('/', pizzaController.postPizza);
router.put('/:id', pizzaController.putPizza);
router.delete('/:id', pizzaController.deletePizza);

module.exports = router;