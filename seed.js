const sequelize = require('./src/config/database');
const { Tienda, Promocion, TiendaPromocion, Producto, ProductoStock, ProductoCategoria, Categoria, Pedido, PedidoProducto } = require('./src/models');

const insertData = async () => {
    try {
        await sequelize.authenticate();

        const tiendas = await Tienda.bulkCreate([
            { id: 1, estado: 1, nombre: 'Mas x menos', telefono: '3001234567', direccion: 'Calle 1 #2-3' },
            { id: 2, estado: 1, nombre: 'Exito', telefono: '3007654321', direccion: 'Carrera 4 #5-6' },
            { id: 3, estado: 1, nombre: 'D1', telefono: '3009876543', direccion: 'Av 7 #8-9' }
        ]);

        const promociones = await Promocion.bulkCreate([
            { id: 1, estado: 1, nombre: 'Lunes feliz', porcentaje: 10, dias_semana: '1000000' },
            { id: 2, estado: 1, nombre: 'Miercoles de descuento', porcentaje: 15, dias_semana: '0010000' },
            { id: 3, estado: 1, nombre: 'Finde promocional', porcentaje: 20, dias_semana: '0000011' }
        ]);

        await TiendaPromocion.bulkCreate([
            { id: 1, estado: 1, inicio: '2024-01-01', fin: '2026-12-31', id_tienda: 1, id_promocion: 1 },
            { id: 2, estado: 1, inicio: '2024-01-01', fin: '2026-12-31', id_tienda: 2, id_promocion: 1 },
            { id: 3, estado: 1, inicio: '2024-01-01', fin: '2026-12-31', id_tienda: 1, id_promocion: 2 },
            { id: 4, estado: 1, inicio: '2024-01-01', fin: '2026-12-31', id_tienda: 3, id_promocion: 2 },
            { id: 5, estado: 1, inicio: '2024-06-01', fin: '2026-12-31', id_tienda: 1, id_promocion: 3 },
            { id: 6, estado: 1, inicio: '2024-06-01', fin: '2026-12-31', id_tienda: 2, id_promocion: 3 },
            { id: 7, estado: 1, inicio: '2024-06-01', fin: '2026-12-31', id_tienda: 3, id_promocion: 3 }
        ]);

        const categorias = await Categoria.bulkCreate([
            { id: 1, nombre: 'Frutas y verduras', adultos: 0 },
            { id: 2, nombre: 'Bebidas', adultos: 0 },
            { id: 3, nombre: 'Lacteos', adultos: 0 },
            { id: 4, nombre: 'Panaderia', adultos: 0 }
        ]);

        const productos = await Producto.bulkCreate([
            { id: 1, estado: 1, kit: 0, nombre: 'Manzana', presentacion: '1 kg', peso: 1.00 },
            { id: 2, estado: 1, kit: 0, nombre: 'Lechuga', presentacion: 'unidad', peso: 0.30 },
            { id: 3, estado: 1, kit: 0, nombre: 'Gaseosa postobon', presentacion: '355ml', peso: 0.35 },
            { id: 4, estado: 1, kit: 0, nombre: 'Cerveza aguila', presentacion: '1 litro', peso: 1.00 },
            { id: 5, estado: 1, kit: 0, nombre: 'Leche entera', presentacion: '1 litro', peso: 1.00 },
            { id: 6, estado: 1, kit: 0, nombre: 'Queso campesino', presentacion: '500g', peso: 0.50 },
            { id: 7, estado: 1, kit: 0, nombre: 'Pan frances', presentacion: 'unidad', peso: 0.10 },
            { id: 8, estado: 1, kit: 0, nombre: 'Pastel de chocolate', presentacion: 'porcion', peso: 0.15 }
        ]);

        await ProductoCategoria.bulkCreate([
            { id: 1, id_categoria: 1, id_producto: 1 },
            { id: 2, id_categoria: 1, id_producto: 2 },
            { id: 3, id_categoria: 2, id_producto: 3 },
            { id: 4, id_categoria: 2, id_producto: 4 },
            { id: 5, id_categoria: 3, id_producto: 5 },
            { id: 6, id_categoria: 3, id_producto: 6 },
            { id: 7, id_categoria: 4, id_producto: 7 },
            { id: 8, id_categoria: 4, id_producto: 8 }
        ]);

        await ProductoStock.bulkCreate([
            { id: 1, cantidad: 45, id_tienda: 1, id_producto: 1, fecha_ingreso: '2024-01-01' },
            { id: 2, cantidad: 120, id_tienda: 2, id_producto: 1, fecha_ingreso: '2024-01-01' },
            { id: 3, cantidad: 30, id_tienda: 3, id_producto: 1, fecha_ingreso: '2024-01-01' },
            { id: 4, cantidad: 15, id_tienda: 1, id_producto: 2, fecha_ingreso: '2024-01-01' },
            { id: 5, cantidad: 42, id_tienda: 2, id_producto: 2, fecha_ingreso: '2024-01-01' },
            { id: 6, cantidad: 8, id_tienda: 3, id_producto: 2, fecha_ingreso: '2024-01-01' },
            { id: 7, cantidad: 200, id_tienda: 1, id_producto: 3, fecha_ingreso: '2024-01-01' },
            { id: 8, cantidad: 350, id_tienda: 2, id_producto: 3, fecha_ingreso: '2024-01-01' },
            { id: 9, cantidad: 95, id_tienda: 3, id_producto: 3, fecha_ingreso: '2024-01-01' },
            { id: 10, cantidad: 120, id_tienda: 1, id_producto: 4, fecha_ingreso: '2024-01-01' },
            { id: 11, cantidad: 180, id_tienda: 2, id_producto: 4, fecha_ingreso: '2024-01-01' },
            { id: 12, cantidad: 55, id_tienda: 3, id_producto: 4, fecha_ingreso: '2024-01-01' },
            { id: 13, cantidad: 60, id_tienda: 1, id_producto: 5, fecha_ingreso: '2024-01-01' },
            { id: 14, cantidad: 90, id_tienda: 2, id_producto: 5, fecha_ingreso: '2024-01-01' },
            { id: 15, cantidad: 25, id_tienda: 3, id_producto: 5, fecha_ingreso: '2024-01-01' },
            { id: 16, cantidad: 35, id_tienda: 1, id_producto: 6, fecha_ingreso: '2024-01-01' },
            { id: 17, cantidad: 70, id_tienda: 2, id_producto: 6, fecha_ingreso: '2024-01-01' },
            { id: 18, cantidad: 12, id_tienda: 3, id_producto: 6, fecha_ingreso: '2024-01-01' },
            { id: 19, cantidad: 100, id_tienda: 1, id_producto: 7, fecha_ingreso: '2024-01-01' },
            { id: 20, cantidad: 150, id_tienda: 2, id_producto: 7, fecha_ingreso: '2024-01-01' },
            { id: 21, cantidad: 40, id_tienda: 3, id_producto: 7, fecha_ingreso: '2024-01-01' },
            { id: 22, cantidad: 20, id_tienda: 1, id_producto: 8, fecha_ingreso: '2024-01-01' },
            { id: 23, cantidad: 45, id_tienda: 2, id_producto: 8, fecha_ingreso: '2024-01-01' },
            { id: 24, cantidad: 10, id_tienda: 3, id_producto: 8, fecha_ingreso: '2024-01-01' }
        ]);

        const pedidos = await Pedido.bulkCreate([
            { id: 1, instrucciones: 'Entregar en la manana', entrega_fecha: '2024-01-15', valor_productos: 100000, valor_envio: 5000, valor_final: 105000, id_tienda: 1 },
            { id: 2, instrucciones: 'Sin hielo', entrega_fecha: '2024-01-16', valor_productos: 75000, valor_envio: 5000, valor_final: 80000, id_tienda: 2 },
            { id: 3, instrucciones: 'Enviar factura', entrega_fecha: '2024-01-17', valor_productos: 120000, valor_envio: 0, valor_final: 120000, id_tienda: 1 },
            { id: 4, instrucciones: 'Regalo', entrega_fecha: '2024-01-18', valor_productos: 45000, valor_envio: 8000, valor_final: 53000, id_tienda: 3 },
            { id: 5, instrucciones: 'Urgente', entrega_fecha: '2024-01-19', valor_productos: 200000, valor_envio: 15000, valor_final: 215000, id_tienda: 2 }
        ]);

        await PedidoProducto.bulkCreate([
            { id: 1, cantidad: 56, valor_unitario: 2500, total_teorico: 140000, total_final: 140000, id_producto: 3, id_pedido: 1 },
            { id: 2, cantidad: 22, valor_unitario: 3000, total_teorico: 66000, total_final: 66000, id_producto: 4, id_pedido: 1 },
            { id: 3, cantidad: 10, valor_unitario: 4000, total_teorico: 40000, total_final: 40000, id_producto: 5, id_pedido: 1 },
            { id: 4, cantidad: 35, valor_unitario: 2000, total_teorico: 70000, total_final: 70000, id_producto: 1, id_pedido: 2 },
            { id: 5, cantidad: 42, valor_unitario: 2500, total_teorico: 105000, total_final: 105000, id_producto: 3, id_pedido: 2 },
            { id: 6, cantidad: 18, valor_unitario: 3000, total_teorico: 54000, total_final: 54000, id_producto: 4, id_pedido: 3 },
            { id: 7, cantidad: 30, valor_unitario: 1500, total_teorico: 45000, total_final: 45000, id_producto: 7, id_pedido: 3 },
            { id: 8, cantidad: 12, valor_unitario: 2500, total_teorico: 30000, total_final: 30000, id_producto: 2, id_pedido: 4 },
            { id: 9, cantidad: 8, valor_unitario: 8000, total_teorico: 64000, total_final: 64000, id_producto: 6, id_pedido: 4 },
            { id: 10, cantidad: 75, valor_unitario: 2500, total_teorico: 187500, total_final: 187500, id_producto: 3, id_pedido: 5 },
            { id: 11, cantidad: 5, valor_unitario: 12000, total_teorico: 60000, total_final: 60000, id_producto: 8, id_pedido: 5 }
        ]);

        console.log('Datos insertados correctamente');
        process.exit();
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

insertData();