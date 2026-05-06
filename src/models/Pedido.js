const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    instrucciones: DataTypes.STRING(500),
    entrega_fecha: DataTypes.DATE,
    valor_productos: DataTypes.DECIMAL(12,3),
    valor_envio: DataTypes.DECIMAL(10,3),
    valor_descuento: DataTypes.DECIMAL(12,3),
    valor_cupon: DataTypes.DECIMAL(11,3),
    impuestos: DataTypes.TINYINT.UNSIGNED,
    valor_impuestos: DataTypes.DECIMAL(11,3),
    valor_final: DataTypes.DECIMAL(12,3),
    calificacion: DataTypes.DECIMAL(3,2),
    id_tienda: DataTypes.SMALLINT.UNSIGNED,
    direccion: DataTypes.STRING(160),
    valor_comision: DataTypes.DECIMAL(11,3),
    id_user: DataTypes.MEDIUMINT.UNSIGNED,
    created_at: DataTypes.DATE
}, {
    tableName: 'pedidos',
    timestamps: false
});

module.exports = Pedido;