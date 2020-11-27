import {prisma} from "../../../../generated/prisma-client";

export default {
    Query:{
      
        overlapUser: async(_,args,{request}) => {
            const {
                email
            }   = args;
            console.log(request);
            const result = await prisma.$exists.user({email});

            return result;
        }
    },
    Mutation: {
        createAccount: async(_,args, {request}) => {
            const {
                username,
                gender,
                email,
                password
            } = args;
            console.log(args);
            console.log(request);
                // await prisma.createUser({
                //     email,
                //     gender,
                //     password,
                //     username
                // });
            return true;
        }
      
    }
}