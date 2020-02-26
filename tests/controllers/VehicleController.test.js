const VehicleController = require('../../src/app/controllers/VehicleController');
const request = require('supertest');
const app = require('../../src/app');

describe('VehicleController', () => {
    const vehicleData = {
        vehicle: "Ecosport",
        brand: "Ford",
        year: 2015,
        description: "Lorem ipsum dolor."
    };

    test('expect store on VehicleController to create a vehicle', () => {
        return request(app).post('/vehicles').send(vehicleData).then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.vehicle).toBe("Ecosport");
        });
    });
});