const sequelize = require('../config/database');
const { Producto } = require('../models');

const listarProductosConStock = async (req, res) => {
    try {
        const [results] = await sequelize.query(`
            SELECT 
                p.id as idProducto,
                p.nombre,
                p.presentacion,
                t.id as idTienda,
                t.nombre as nombreTienda,
                ps.cantidad as stock
            FROM productos p
            JOIN productos_stocks ps ON p.id = ps.id_producto
            JOIN tiendas t ON ps.id_tienda = t.id
            ORDER BY p.id, t.id
        `);

        const productosMap = new Map();

        results.forEach(row => {
            if (!productosMap.has(row.idProducto)) {
                productosMap.set(row.idProducto, {
                    idProducto: row.idProducto,
                    nombre: row.nombre,
                    presentacion: row.presentacion,
                    tiendas: []
                });
            }
            productosMap.get(row.idProducto).tiendas.push({
                idTienda: row.idTienda,
                nombre: row.nombreTienda,
                stock: parseFloat(row.stock)
            });
        });

        const data = Array.from(productosMap.values());

        res.json({ message: "consultado correctamente", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const top10ProductosMasVendidos = async (req, res) => {
    try {
        const [results] = await sequelize.query(`
            SELECT 
                pp.id_producto as idProducto,
                p.nombre,
                p.presentacion,
                SUM(pp.cantidad) as unidadesVendidas
            FROM pedidos_productos pp
            JOIN productos p ON pp.id_producto = p.id
            GROUP BY pp.id_producto, p.nombre, p.presentacion
            ORDER BY unidadesVendidas DESC
            LIMIT 10
        `);

        const data = results.map(row => ({
            idProducto: row.idProducto,
            nombre: row.nombre,
            presentacion: row.presentacion,
            unidadesVendidas: parseFloat(row.unidadesVendidas)
        }));

        res.json({ message: "consultado correctamente", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listarCategoriasConProductos = async (req, res) => {
    try {
        const [results] = await sequelize.query(`
            SELECT 
                c.id as idCategoria,
                c.nombre,
                COUNT(pc.id_producto) as cantProductos
            FROM categorias c
            JOIN productos_categorias pc ON c.id = pc.id_categoria
            GROUP BY c.id, c.nombre
            HAVING cantProductos > 0
            ORDER BY cantProductos DESC
        `);

        res.json({ message: "consultado correctamente", data: results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listarProductosConStock, top10ProductosMasVendidos, listarCategoriasConProductos };