import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation:{
        confirmSecret: async(_,args) => {
            const {email} = args;
            const user = await prisma.user({email});
                return generateToken(user.id);
        }
    }
}