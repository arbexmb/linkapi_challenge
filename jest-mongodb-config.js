module.exports = {
    mongodbMemoryServerOptions: {
        instance: {
            dbName: 'linkapi_challenge_test'
        },
        binary: {
            version: '4.0.3',
            skipMD5: true
        },
        autoStart: false
    }
};