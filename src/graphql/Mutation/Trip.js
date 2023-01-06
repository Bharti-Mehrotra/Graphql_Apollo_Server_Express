const tripSchema = require('../../models/tripSchema');
export const resolvers={
    Mutation:{
        async createTrip(root,{ input }){
            const newTrip=new tripSchema({
            place:input.place,
            amount:input.amount,
            arrivalDate:input.arrivalDate,
            departureDate:input.departureDate,
            noOfdays:input.noOfdays,
            noOfFriends:input.noOfFriends,
            });
            newTrip.id=newTrip._id;
            const createdTrip = await (newTrip.save());
            return createdTrip;
        },
        async deleteTrip(root,{id}){
            const wasDeleted =  await (tripSchema.deleteOne({_id:id}));
            return wasDeleted.deletedCount;

            },
        async editTrip(root,{ID,trip:{place,amount,arrivalDate,departureDate,noOfdays,noOfFriends}}){
            const wasEdited = await (tripSchema.updateOne({_id:ID},
                {
                    place:place,
                    amount:amount,
                    arrivalDate:arrivalDate,
                    departureDate:departureDate,
                    noOfdays:noOfdays,
                    noOfFriends:noOfFriends
                }
                    ))
            return wasEdited.modifiedCount;
        }
    },
};
