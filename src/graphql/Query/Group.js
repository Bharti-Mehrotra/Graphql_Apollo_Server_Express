const groupSchema =require('../../models/groupSchema');
export const resolvers={
    Query:{
            async getAllGroup(root){
                const allGroup = await(groupSchema.find())
                .then((res)=>{
                    return res;
                })
                return allGroup;
            },
            async getGroupById(root,{id}){
                const group = await(groupSchema.findOne({_id:id}))
            return group;
        }
    }
};
