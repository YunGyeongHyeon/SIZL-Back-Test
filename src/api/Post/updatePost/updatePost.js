import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        updatePost: async( _, args ) => {
            try{
                const {
                    id,
                    title,
                    content
                } = args;

                console.log(id,title,content);

                await prisma.updatePost({where:{id}, data:{title, content}});
                return true;
            }catch(e){
                console.log(e);
                return false;
            }
        }
    } 
}