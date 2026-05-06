const express = require('express');
const sequelize = require('./config/database');
const productoRoutes = require('./routes/productoRoutes');
const promocionRoutes = require('./routes/promocionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', productoRoutes);
app.use('/api', promocionRoutes);


sequelize.authenticate()
    .then(() => console.log('Conectado a MySQL'))
    .catch(err => console.error('Error de conexion:', err));

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});



// Probar conexión a la base de datos
/*
sequelize.authenticate()
  .then(() => console.log('Conectado a MySQL con Sequelize'))
  .catch(err => console.error('Error de conexión:', err));

app.get('/', (req, res) => {
  res.json({ message: 'API Market funcionando' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/





