import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation:{
        confirmSecret: async(_,args) => {
            const {email} = args;
            const user = await prisma.user({email});
            console.log(user);
                return generateToken(user.id);
        }
    }
}