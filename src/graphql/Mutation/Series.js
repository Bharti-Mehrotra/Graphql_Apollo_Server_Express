const seriesSchema = require('../../models/seriesSchema');

export const resolvers={
    Mutation:{
        addASeries:(root,{input})=>{
            const newSeries=new seriesSchema({
                seriesName:input.seriesName,
                year:input.year,
                rating:input.rating
            });
            newSeries.id=input._id;
            return new Promise((resolve,reject)=>{
                newSeries.save(err=>{
                    if(err) reject(err);
                    resolve(newSeries);
                })
            })
        },
        async editSeries(root,{ID,series:{seriesName,year,rating}}){
            const wasEdited = await (seriesSchema.updateOne({_id:ID},{seriesName:seriesName,year:year,rating:rating}))
            return wasEdited.modifiedCount;
        }
    },
};
