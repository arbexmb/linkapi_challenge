const Vehicle = require('../database/schemas/Vehicle');

class VehicleController {
    async store(req, res) {
        const { vehicle, brand, year, description } = req.body;
        const response = await Vehicle.create(req.body);
        res.status(201).json(response);
    }
}

module.exports = new VehicleController();