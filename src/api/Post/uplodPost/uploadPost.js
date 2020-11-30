import { prisma } from "../../../../generated/prisma-client";


export default {
    Mutation:{
        createPost: async(_,args,{request}) => {
            const {title, content} = args;
            const {user} = request;
            if(user){
                await prisma.createPost({
                    username:{
                        connect:{
                            id:user.id
                        }
                    },
                    title, 
                    content
                });
                return true; 
            }else{
                throw Error("로그인이 필요한 기능입니다.");
            }
        }
    }
}