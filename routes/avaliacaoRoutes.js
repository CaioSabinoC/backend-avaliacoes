const express = require('express');
const router = express.Router();
const avaliacoesController = require('../controllers/avaliacoesController');

router.get('/', avaliacoesController.listarAvaliacoes);
router.get('/:id', avaliacoesController.listarUmaAvaliacao);
router.post('/', avaliacoesController.criarAvaliacao);
router.put('/:id', avaliacoesController.editarAvaliacao);
router.delete('/:id', avaliacoesController.deletarAvaliacao);

module.exports = router;