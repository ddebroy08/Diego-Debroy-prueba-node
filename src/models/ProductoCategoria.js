const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductoCategoria = sequelize.define('ProductoCategoria', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    id_categoria: DataTypes.SMALLINT.UNSIGNED,
    id_producto: DataTypes.INTEGER.UNSIGNED
}, {
    tableName: 'productos_categorias',
    timestamps: false
});

module.exports = ProductoCategoria;