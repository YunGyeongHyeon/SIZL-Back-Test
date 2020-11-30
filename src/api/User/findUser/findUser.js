import { prisma } from "../../../../generated/prisma-client"

export default {
    Query:{
        findUser: async(_,args, {request}) => {
            const { user } = request;
            const findUser = await prisma.user({id:user.id});
            return findUser;
        }
    }
}