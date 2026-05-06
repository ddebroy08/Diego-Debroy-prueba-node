const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tienda = sequelize.define('Tienda', {
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    estado: DataTypes.TINYINT.UNSIGNED,
    nombre: DataTypes.STRING(30),
    descripcion: DataTypes.STRING(500),
    telefono: DataTypes.STRING(20),
    direccion: DataTypes.STRING(120),
    direccion_anexo: DataTypes.STRING(40),
    direccion_barrio: DataTypes.STRING(25),
    calificacion: DataTypes.DECIMAL(3,2),
    calificacion_cantidad: DataTypes.MEDIUMINT.UNSIGNED,
    impuestos: DataTypes.TINYINT.UNSIGNED,
    dias_trabajados: DataTypes.STRING(21)
}, {
    tableName: 'tiendas',
    timestamps: false
});

module.exports = Tienda;