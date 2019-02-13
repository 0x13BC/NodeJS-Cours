let mongoose = require('mongoose');

let Schema = mongoose.Schema;



module.exports = mongoose.model('Event', new Schema({
    name: {
        type: String,
        required: 'Nom obligatoire'
    },
    startDate: {
        //yyyy-mm-dd
        type: Date,
        required: 'Date de début obligatoire'
    },
    endDate: {
        //yyyy-mm-dd
        type: Date,
        required: 'Date de fin obligatoire'
    },
    street: String,
    zipCode: String,
    city: {
        type: String,
        required: 'Ville obligatoire'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));