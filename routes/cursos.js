const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursoController');
// Rota para enviar o formulário de edição de curso ao controller

// Rota para enviar o pedido de exclusão ao controller
router.post('/', controller.create);
router.post('/edit/:id', controller.update);
router.post('/delete/:id', controller.delete);

module.exports = router;

