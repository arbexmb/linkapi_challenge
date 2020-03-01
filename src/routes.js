const routes = require('express').Router();
const VehicleController = require('./app/controllers/VehicleController');

// Rotas
routes.get('/', (req, res) => {
    res.send("Hello, World!");
});

routes.get('/vehicles', VehicleController.index);

routes.post('/vehicles', VehicleController.store);

routes.get('/vehicles/search', VehicleController.search);

routes.get('/vehicles/:id', VehicleController.show);

routes.patch('/vehicles/:id', VehicleController.update);

routes.delete('/vehicles/:id', VehicleController.delete);

module.exports = routes;
