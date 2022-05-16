const express = require('express');
const router = express.Router();
const controlsFaturamento = require('../controls/controlsFaturamentoDoDia');
const login = require('../middlware/login')

router.get('/', login, controlsFaturamento.getFaturamentos);
router.get('/:id_caixa', login, controlsFaturamento.getFaturamentoEspesificio);
router.post('/', login, controlsFaturamento.postFaturamento);
router.patch('/', login, controlsFaturamento.patchFaturamento);
router.delete('/', login, controlsFaturamento.deleteFaturamento)

module.exports = router;