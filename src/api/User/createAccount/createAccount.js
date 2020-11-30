import {prisma} from "../../../../generated/prisma-client";

export default {
    Query:{
      
        overlapUser: async(_,args,{request}) => {
            const {
                email
            }   = args;
            const result = await prisma.$exists.user({email});

            return result;
        }
    },
    Mutation: {
        createAccount: async(_,args) => {
            const {
                username,
                gender,
                email,
                password,
                nickname
            } = args;
                await prisma.createUser({
                    email,
                    gender,
                    password,
                    username,
                    nickname
                });
            return true;
        }
      
    }
}