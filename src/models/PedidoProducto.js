const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PedidoProducto = sequelize.define('PedidoProducto', {
    id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: DataTypes.DECIMAL(9,3),
    valor_unitario: DataTypes.DECIMAL(11,3),
    valor_unitario_promocion: DataTypes.DECIMAL(11,3),
    total_teorico: DataTypes.DECIMAL(12,3),
    total_final: DataTypes.DECIMAL(12,3),
    id_promocion: DataTypes.MEDIUMINT.UNSIGNED,
    id_producto: DataTypes.INTEGER.UNSIGNED,
    id_pedido: DataTypes.MEDIUMINT.UNSIGNED
}, {
    tableName: 'pedidos_productos',
    timestamps: false
});

module.exports = PedidoProducto;