const express = require('express');
const router = express.Router()
const controlsFiado = require('../controls/controlsFiado')

router.get('/', controlsFiado.getFiado);
router.get('/:id_fiado', controlsFiado.getFiadoEspesfico)
router.post('/', controlsFiado.postFiado)
router.patch('/', controlsFiado.patchFiado)
router.delete('/', controlsFiado.deleteFiado)

module.exports = router;