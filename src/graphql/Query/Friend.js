const friendSchema =require('../../models/friendSchema');
export const resolvers={
    Query:{
            async getAllFriend(root){
                const allFriends = await(friendSchema.find())
                .then((res)=>{
                    return res;
                })
                return allFriends;
            },
            async getFriendById(root,{id}){
                const friend = await(friendSchema.findOne({_id:id}))
            return friend;
        }
    }
};
