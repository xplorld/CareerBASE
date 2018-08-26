var mongoose = require('mongoose');

var PublicDataSchema = new mongoose.Schema({
    publicKey: {
        type: String,
        unique: true,
        required: true,
    },
    data: {} // Dictionary: string -> string
});
var PublicData = mongoose.model('PublicData', PublicDataSchema);

module.exports = PublicData;