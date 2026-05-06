const sequelize = require('../config/database');
const Tienda = require('./Tienda');
const Promocion = require('./Promocion');
const TiendaPromocion = require('./TiendaPromocion');
const Producto = require('./Producto');
const ProductoStock = require('./ProductoStock');
const ProductoCategoria = require('./ProductoCategoria');
const Categoria = require('./Categoria');
const Pedido = require('./Pedido');
const PedidoProducto = require('./PedidoProducto');

// N:N - Producto con Tienda
Producto.belongsToMany(Tienda, { 
    through: ProductoStock, 
    foreignKey: 'id_producto', 
    otherKey: 'id_tienda'
});
Tienda.belongsToMany(Producto, { 
    through: ProductoStock, 
    foreignKey: 'id_tienda', 
    otherKey: 'id_producto'
});

// N:N - Producto con Categoria
Producto.belongsToMany(Categoria, { 
    through: ProductoCategoria, 
    foreignKey: 'id_producto', 
    otherKey: 'id_categoria'
});
Categoria.belongsToMany(Producto, { 
    through: ProductoCategoria, 
    foreignKey: 'id_categoria', 
    otherKey: 'id_producto'
});

// N:N - Promocion con Tienda
Promocion.belongsToMany(Tienda, { 
    through: TiendaPromocion, 
    foreignKey: 'id_promocion', 
    otherKey: 'id_tienda'
});
Tienda.belongsToMany(Promocion, { 
    through: TiendaPromocion, 
    foreignKey: 'id_tienda', 
    otherKey: 'id_promocion'
});

// 1:N - Pedido con PedidoProducto
Pedido.hasMany(PedidoProducto, { foreignKey: 'id_pedido' });
PedidoProducto.belongsTo(Pedido, { foreignKey: 'id_pedido' });

// 1:N - Producto con PedidoProducto
Producto.hasMany(PedidoProducto, { foreignKey: 'id_producto' });
PedidoProducto.belongsTo(Producto, { foreignKey: 'id_producto' });

// 1:N - Tienda con Pedido
Tienda.hasMany(Pedido, { foreignKey: 'id_tienda' });
Pedido.belongsTo(Tienda, { foreignKey: 'id_tienda' });

module.exports = {
    sequelize,
    Tienda,
    Promocion,
    TiendaPromocion,
    Producto,
    ProductoStock,
    ProductoCategoria,
    Categoria,
    Pedido,
    PedidoProducto
};