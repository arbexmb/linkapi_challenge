const routes = require('express').Router();
const VehicleController = require('./app/controllers/VehicleController');

// Rotas
routes.get('/', (req, res) => {
    res.send("Hello, World!");
});

routes.post('/vehicles', VehicleController.store);

module.exports = routes;