const express = require('express');
const router = express.Router();
const { listarPromocionesPorDia } = require('../controllers/promocionController');

router.get('/promociones', listarPromocionesPorDia);

module.exports = router;