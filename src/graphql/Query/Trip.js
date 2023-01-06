const tripSchema = require('../../models/tripSchema');

export const resolvers={
    Query:{
        async getAllTrip(root){
            const allTrips = await(tripSchema.find())
            .then((res)=>{
                return res;
            })
            return allTrips;
        },
        async getTripById(root,{id}){
            const trip = await(tripSchema.findOne({_id:id}))
        return trip;
    }
    }
};
