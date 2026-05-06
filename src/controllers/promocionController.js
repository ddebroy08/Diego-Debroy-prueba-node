const sequelize = require('../config/database');

const listarPromocionesPorDia = async (req, res) => {
    try {
        const { dia } = req.query;
        const indiceDia = parseInt(dia) - 1;

        if (indiceDia < 0 || indiceDia > 6) {
            return res.status(400).json({ error: 'Dia invalido. Use 1-7' });
        }

        const [promociones] = await sequelize.query(`
            SELECT 
                p.id as idPromocion,
                p.nombre,
                p.porcentaje
            FROM promociones p
            WHERE SUBSTRING(p.dias_semana, ${indiceDia + 1}, 1) = '1'
        `);

        if (promociones.length === 0) {
            return res.json({ message: "consultado correctamente", data: [] });
        }

        const promocionesIds = promociones.map(p => p.idPromocion).join(',');

        const [tiendasPromociones] = await sequelize.query(`
            SELECT 
                tp.id_promocion as promocion_id,
                t.nombre as tienda_nombre
            FROM tiendas_promociones tp
            JOIN tiendas t ON tp.id_tienda = t.id
            WHERE tp.id_promocion IN (${promocionesIds})
                AND tp.inicio <= NOW()
                AND tp.fin >= NOW()
                AND tp.estado = 1
        `);

        const data = promociones.map(promo => {
            const tiendas = tiendasPromociones
                .filter(tp => tp.promocion_id === promo.idPromocion)
                .map(tp => tp.tienda_nombre);

            return {
                idPromocion: promo.idPromocion,
                nombre: promo.nombre,
                porcentaje: promo.porcentaje,
                tiendas: tiendas
            };
        });

        res.json({ message: "consultado correctamente", data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listarPromocionesPorDia };