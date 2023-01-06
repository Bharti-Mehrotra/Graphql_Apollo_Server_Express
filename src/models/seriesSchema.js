const {model,Schema} = require('mongoose');

export const seriesSchema = new Schema({
    seriesName: {
        type: String
    },
    year: {
        type: Number
    },
    rating: {
        type: String
    }
});

module.exports = model('seriesSchema',seriesSchema);