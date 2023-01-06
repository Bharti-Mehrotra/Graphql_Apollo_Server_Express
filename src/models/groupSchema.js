const {model,Schema} = require('mongoose');

export const groupSchema = new Schema({
    name:{
        type:String
    },
    friend: {
        type: Array
    },
});

module.exports = model('groupSchema',groupSchema);