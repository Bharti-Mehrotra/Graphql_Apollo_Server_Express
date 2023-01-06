
const friendSchema =require('../../models/friendSchema');

export const resolvers={
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
        async deleteFriend(root,{id}){
            const wasDeleted =  await (friendSchema.deleteOne({_id:id}));
            return wasDeleted.deletedCount;

            }
    },
};
