const {merge} =require('lodash');
const Friend = require('./Friend');
const Series = require('./Series');
const Group = require('./Group');
const Trip = require('./Trip');

const resolvers = [
    Friend,
    Series,
    Group,
    Trip
];

module.exports = merge(...resolvers);