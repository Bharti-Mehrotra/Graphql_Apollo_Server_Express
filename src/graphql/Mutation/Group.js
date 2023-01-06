const groupSchema = require('../../models/groupSchema');
export const resolvers={
    Mutation:{
        async createGroup(root,{ input }){
            const newGroup=new groupSchema({
            name:input.name,
            friend:input.friend,
            });
            newGroup.id=newGroup._id;
            const createdGroup = await (newGroup.save());
            return createdGroup;
        },
        async deleteGroup(root,{id}){
            const wasDeleted =  await (groupSchema.deleteOne({_id:id}));
            return wasDeleted.deletedCount;

            }
    },
};
