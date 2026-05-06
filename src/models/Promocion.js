const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Promocion = sequelize.define('Promocion', {
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    estado: DataTypes.TINYINT.UNSIGNED,
    nombre: DataTypes.STRING(40),
    imagen: DataTypes.STRING(120),
    porcentaje: DataTypes.TINYINT.UNSIGNED,
    dias_semana: DataTypes.STRING(21)
}, {
    tableName: 'promociones',
    timestamps: false
});

module.exports = Promocion;