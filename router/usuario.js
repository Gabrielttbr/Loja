const express = require('express');
const router = express.Router()
const controlsUsuarios = require('../controls/controlsUsuarios')

router.post('/cadastro', controlsUsuarios.postCadsatro)
router.post('/login', controlsUsuarios.postLogin)

module.exports = router;