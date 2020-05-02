var mongoose = require('mongoose')

var measures = new mongoose.Schema({
    bytes_sent: Number,
    bytes_received: Number,
    server: {
        country: String,
        url: String,
        name: String,
        lat: mongoose.Schema.Types.Decimal128,
        host: String,
        sponsor: String,
        latency: mongoose.Schema.Types.Decimal128,
        cc: String,
        d: mongoose.Schema.Types.Decimal128,
        id: Number,
        lon: mongoose.Schema.Types.Decimal128
    },
    timestamp: Date,
    share: String,
    download: mongoose.Schema.Types.Decimal128,
    client: {
        ispulavg: Number,
        rating: Number,
        country: String,
        isprating: mongoose.Schema.Types.Decimal128,
        lat: mongoose.Schema.Types.Decimal128,
        ispdlavg: mongoose.Schema.Types.Decimal128,
        isp: String,
        loggedin: String,
        ip: String,
        lon: mongoose.Schema.Types.Decimal128,
    },
    ping: mongoose.Schema.Types.Decimal128,
    upload: mongoose.Schema.Types.Decimal128
})

module.exports = mongoose.model('Measures', measures)
