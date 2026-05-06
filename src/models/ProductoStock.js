const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductoStock = sequelize.define('ProductoStock', {
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: DataTypes.DECIMAL(8,3),
    id_tienda: DataTypes.SMALLINT.UNSIGNED,
    id_producto: DataTypes.INTEGER.UNSIGNED,
    fecha_ingreso: DataTypes.DATE
}, {
    tableName: 'productos_stocks',
    timestamps: false
});

module.exports = ProductoStock;