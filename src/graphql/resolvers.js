const friendSchema =require('../models/friendSchema');
const seriesSchema = require('../models/seriesSchema');
const tripSchema = require('../models/tripSchema');
const groupSchema = require('../models/groupSchema');
export const resolvers={
    Query:{
            async getAllFriend(root){
                const allFriends = await(friendSchema.find())
                .then((res)=>{
                    return res;
                })
                return allFriends;
            },
            async findASeries(root,{id}){
                const series = await(seriesSchema.findOne({_id:id}))
            return series;
        },
        async getAllTrip(root){
            const allTrips = await(tripSchema.find())
            .then((res)=>{
                return res;
            })
            return allTrips;
        }
    },
    Mutation:{
       async createFriend(root,{ input }){
            const newFriend=new friendSchema({
                firstName : input.firstName,
                lastName : input.lastName,
                gender : input.gender,
                language : input.language,
                age : input.age,
                email : input.email,
            });

            newFriend.id=newFriend._id;
            const createdFriend = await (newFriend.save());
            return createdFriend;
        },
        addASeries:(root,{series})=>{
            const newSeries=new seriesSchema({
                seriesName:series.seriesName,
                year:series.year,
                rating:series.rating
            });
            newSeries.id=series._id;
            return new Promise((resolve,reject)=>{
                newSeries.save(err=>{
                    if(err) reject(err);
                    resolve(newSeries);
                })
            })
        }, 
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
        async createGroup(root,{ input }){
            const newGroup=new groupSchema({
            name:input.name,
            friend:input.Friend,
            });
            newGroup.id=newGroup._id;
            const createdGroup = await (newGroup.save());
            return createdGroup;
        },
        async deleteFriend(root,{id}){
            const wasDeleted =  await (friendSchema.deleteOne({_id:id}));
            return wasDeleted.deletedCount;

            },
        async deleteTrip(root,{id}){
            const wasDeleted =  await (tripSchema.deleteOne({_id:id}));
            return wasDeleted.deletedCount;

            },
        async editSeries(root,{ID,series:{seriesName,year,rating}}){
            const wasEdited = await (seriesSchema.updateOne({_id:ID},{seriesName:seriesName,year:year,rating:rating}))
            return wasEdited.modifiedCount;
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
