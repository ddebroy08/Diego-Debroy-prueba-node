const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    estado: DataTypes.TINYINT.UNSIGNED,
    kit: DataTypes.TINYINT.UNSIGNED,
    barcode: DataTypes.STRING(30),
    nombre: DataTypes.STRING(60),
    presentacion: DataTypes.STRING(25),
    descripcion: DataTypes.STRING(500),
    foto: DataTypes.STRING(120),
    peso: DataTypes.DECIMAL(6,2)
}, {
    tableName: 'productos',
    timestamps: false
});

module.exports = Producto;