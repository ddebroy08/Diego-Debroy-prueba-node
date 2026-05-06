const sequelize = require('./src/config/database');
const { Tienda, Promocion, TiendaPromocion, Producto, ProductoStock, ProductoCategoria, Categoria, Pedido, PedidoProducto } = require('./src/models');

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion exitosa');
        
        await sequelize.sync({ force: true });
        console.log('Tablas creadas correctamente');
        
        process.exit();
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

syncDatabase();