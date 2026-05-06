const express = require('express');
const router = express.Router();
const { listarProductosConStock, top10ProductosMasVendidos, listarCategoriasConProductos } = require('../controllers/productoController');

router.get('/productos', listarProductosConStock);
router.get('/productos/mas-vendidos', top10ProductosMasVendidos);
router.get('/categorias', listarCategoriasConProductos);

module.exports = router;