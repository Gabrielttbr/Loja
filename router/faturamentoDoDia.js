const express = require('express');
const router = express.Router();
const controlsFaturamento = require('../controls/controlsFaturamentoDoDia');
const login = require('../middlware/login');

router.get('/',  controlsFaturamento.getFaturamentos);
router.get('/:id_caixa', login, controlsFaturamento.getFaturamentoEspesificio);
router.post('/', controlsFaturamento.postFaturamento);
router.patch('/',  controlsFaturamento.patchFaturamento);
router.delete('/',  controlsFaturamento.deleteFaturamento);

module.exports = router;