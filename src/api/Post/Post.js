import { prisma } from "../../../generated/prisma-client"

export default {
    Post: {
        username: async(parent) => {
            const { id } = parent;
            return prisma.post({id}).username();
        },
        comments: async (parent) => {
          const { id } = parent;
          return prisma.post({ id }).comments();
        },
        likes: async (parent) => {
        const { id } = parent;
        return prisma.post({ id }).likes();
        },
        category: async (parent) => {
          const { id } = parent;
          return prisma.post({ id }).category();
        },
        
}
}