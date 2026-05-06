const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(30),
    adultos: DataTypes.TINYINT.UNSIGNED
}, {
    tableName: 'categorias',
    timestamps: false
});

module.exports = Categoria;