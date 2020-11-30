import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        uploadComment: async( _, args, {request, isAuthenticated}) => {
            try{
                isAuthenticated(request);
                const {
                    postId,
                    commentContent
                } = args;
                const { user } = request;
                
                await prisma.createComment({
                    post:{
                        connect:{id:postId}
                    },
                    text:commentContent,
                    user:{connect:{id:user.id}}
                })
                return true;
            }catch(e){
                console.log(e);
                return false;
            }
        }
    }
}