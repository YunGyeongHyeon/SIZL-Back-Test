import { prisma } from "../../../../generated/prisma-client"


export default {
    Query:{
        allPost: async(_, __) => {
            try{
                const allPost = await prisma.posts();
                return allPost;

            }catch(e){
                return null;
            }

        }
    }
}