// import friendSchema  from '../models/friendSchema.js';
// import seriesSchema from '../models/seriesSchema.js';
const friendSchema =require('../models/friendSchema');
const seriesSchema = require('../models/seriesSchema');
export const resolvers={
    Query:{
            getAllFriend:(root)=>{
                return new Promise((resolve,reject)=>{
                    friendSchema.find((err,friends)=>{
                        if(err) reject(err);
                        else resolve(friends);
                    })
                })
            },
            findASeries:(root,{id})=>{
                return new Promise((resolve,reject)=>{
                    seriesSchema.findOne({_id:id},(err,series)=>{
                    if(err) reject(err);
                    else resolve(series);
                })
            })
        }
    },
    Mutation:{
        createFriend: (root,{ input }) => {
            const newFriend=new friendSchema({
                firstName : input.firstName,
                lastName : input.lastName,
                gender : input.gender,
                language : input.language,
                age : input.age,
                email : input.email,
                // contacts:input.contacts
            });

            newFriend.id=newFriend._id;

            return new Promise((resolve,reject)=>{
                newFriend.save((err)=>{
                    if(err) reject(err);
                    else resolve(newFriend);
                })
            })
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
        async deleteFriend(root,{id}){
            const wasDeleted =  await (friendSchema.deleteOne({_id:id}));
            console.log("daasddsdf",wasDeleted)

            return wasDeleted.deletedCount;

            },
        async editSeries(root,{ID,series:{seriesName,year,rating}}){
            const wasEdited = await (seriesSchema.updateOne({_id:ID},{seriesName:seriesName,year:year,rating:rating}))
            console.log("dsfsd",wasEdited)
            return wasEdited.modifiedCount;
        }
    },
};