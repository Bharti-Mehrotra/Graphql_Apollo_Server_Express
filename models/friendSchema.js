const {model,Schema} = require('mongoose');

export const friendSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    // contacts: {
    //     type: Array
    // },
});

module.exports = model('friendSchema',friendSchema);