const Vehicle = require('../database/schemas/Vehicle');

class VehicleController {
    async index(req, res) {
        const vehicles = Vehicle.find({}, (err, results) => {
            if (err) {
                return next(err);
            }

            res.status(200).json(results);
        }).sort('-createdAt');
    }

    async store(req, res) {
        const { vehicle, brand, year, description } = req.body;
        const response = await Vehicle.create(req.body, (err) => {
          if(err) {
            res.send({error: err.message});
          } else {
            res.status(201).json(response);
          }
        });
    }

    async show(req, res) {
        const vehicle = Vehicle.findById(req.params.id, (err, result) => {
            if (err) {
                return next(err);
            }

            res.status(200).json(result);
        });
    }

    async update(req, res) {
        Vehicle.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
            res.status(200).json(result);
        });
    }

    async delete(req, res) {
        Vehicle.findByIdAndRemove({ _id: req.params.id }, req.body, (err, data) => {
            if (err) {
                return next(err);
            }

            res.status(200).json({ success: true });
        }); 
    }

    async search(req, res) {
        Vehicle.find( { $or: [
            { vehicle: { $regex: new RegExp(req.query['q'], "i") } },
            { brand: { $regex: new RegExp(req.query['q'], "i") } },
            { description: { $regex: new RegExp(req.query['q'], "i") } }
        ]}, (err, results) => {
            res.status(200).json(results);
        });
    }
}

module.exports = new VehicleController();
