const { Schema, model } = require('mongoose');

const VehicleSchema = new Schema(
    {
        vehicle: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true
        }
    }, {
    timestamps: true
});

module.exports = model('Vehicle', VehicleSchema);