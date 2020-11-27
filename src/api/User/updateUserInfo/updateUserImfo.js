import { prisma } from "../../../../generated/prisma-client";

export default  {
    Mutation: {
        updateUserInfo: async(_, args) => {
            const {
                username,
                gender,
                email,
                password,
                nickname
            } = args;

            //로그인한 아이디 찾기
            // const preInfo = prisma.$exists.user({id:""})

            
        }
    }
}