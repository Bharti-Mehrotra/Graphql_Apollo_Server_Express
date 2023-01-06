const {model,Schema} = require('mongoose');

export const tripSchema = new Schema({
    place: {
        type: String
    },
    amount: {
        type: Number
    },
    arrivalDate: {
        type: String
    },
    departureDate: {
        type: String
    },
    noOfdays: {
        type: Number
    },
    noOfFriends: {
        type: Number
    },
    // contacts: {
    //     type: Array
    // },
});
module.exports = model('tripSchema',tripSchema);