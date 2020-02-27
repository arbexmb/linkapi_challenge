const VehicleController = require('../../src/app/controllers/VehicleController');
const request = require('supertest');
const app = require('../../src/app');
const {MongoClient} = require('mongodb');

describe('VehicleController', () => {
    let connection;
    let db;

    beforeAll(async() => {
        connection = await MongoClient.connect(process.env.DB_TEST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db(process.env.DBNAME_TEST);
    });

    afterAll(async() => {
        await connection.close();
        await db.close();
    });

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
