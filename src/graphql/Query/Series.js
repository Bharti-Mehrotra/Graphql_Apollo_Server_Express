const seriesSchema = require('../../models/seriesSchema');

export const resolvers={
    Query:{
        async findAllSeries(root){
            const allSeries = await(seriesSchema.find())
            .then((res)=>{
                return res;
            })
        return allSeries;
    },
            async getSeriesById(root,{id}){
                const series = await(seriesSchema.findOne({_id:id}))
            return series;
        }
    }
};
