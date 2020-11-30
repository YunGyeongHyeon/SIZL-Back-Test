import { prisma } from "../../../../generated/prisma-client";

export default  {
    Mutation: {
        updateUserInfo: async(_, args, {request}) => {
            const {
                username,
                gender,
                email,
                password,
                nickname
            } = args;

            const { user } = request;

            await prisma.updateUser({
                where:{id:user.id},
                data:{
                    username, 
                    gender, 
                    email, 
                    password, 
                    nickname
                }
            });

            return true;
            
        }
    }
}