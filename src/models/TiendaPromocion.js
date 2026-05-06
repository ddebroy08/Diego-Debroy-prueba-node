const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TiendaPromocion = sequelize.define('TiendaPromocion', {
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    estado: DataTypes.TINYINT.UNSIGNED,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE,
    id_tienda: DataTypes.SMALLINT.UNSIGNED,
    id_promocion: DataTypes.MEDIUMINT.UNSIGNED
}, {
    tableName: 'tiendas_promociones',
    timestamps: false
});

module.exports = TiendaPromocion;