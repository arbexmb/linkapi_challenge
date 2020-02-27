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
        await db.dropDatabase();
        await connection.close();
        await db.close();
    });

    const mockVehicle = {
        _id: 12345,
        vehicle: "Ecosport",
        brand: "Ford",
        year: 2015,
        description: "Lorem ipsum dolor."
    };

    test('expect a vehicle can be created', async () => {
        const vehicles = db.collection('vehicles');
        await vehicles.insertOne(mockVehicle);
        const insertedVehicle = await vehicles.findOne({ _id: 12345 });
        expect(insertedVehicle).toEqual(mockVehicle);
    });

    test('expect store method on VehicleController to add a vehicle on collection', async () => {
        return request(app).post('/vehicles').send(mockVehicle).then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.vehicle).toBe("Ecosport");
        });
    });

    test('expect vehicles to be fetched', () => {
        return request(app).get('/vehicles').then((res) => {
            expect(res.status).toBe(200);
        });
    });
});
