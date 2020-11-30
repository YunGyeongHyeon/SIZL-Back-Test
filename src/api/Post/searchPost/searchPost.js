import { prisma } from "../../../../generated/prisma-client";

export default {
    Query:{
        searchPost: async( _, args ) => {
            try{
                const { postId } = args;
                const post = await prisma.post({id:postId});
                return post;

            }catch(e){
                return null;
            }
        }
    }
}