const {model,Schema} = require('mongoose');

export const groupSchema = new Schema({
    name:{
        type:String
    },
    friends: {
        type: Array
    },
});

module.exports = model('groupSchema',groupSchema);