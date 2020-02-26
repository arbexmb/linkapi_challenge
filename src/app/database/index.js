const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.mongoConnection = mongoose.connect(process.env.ENV == 'development' ? process.env.DB_TEST : process.env.DB_DSN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
    }
}

module.exports = new Database();