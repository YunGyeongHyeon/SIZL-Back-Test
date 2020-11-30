import { prisma } from "../../../generated/prisma-client"

export default {
    Comment: {
        user: async(parent) => {
            const { id } = parent;
            return prisma.comment({id}).user();
        },
        post: async (parent) => {
          const { id } = parent;
          return prisma.comment({ id }).post();
        },
        likes: async (parent) => {
        const { id } = parent;
        return prisma.comment({ id }).likes();
        }
        
}
}