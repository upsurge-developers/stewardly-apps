import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'

type Post = { title: string; content: string; id: number }

const posts: Post[] = [
  {
    title: 'Hello',
    content: 'Hello world',
    id: 1,
  },
  {
    title: 'hello again',
    content: 'Hello again world',
    id: 2,
  },
]

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    console.log({ ctx })
    // query from db
    return posts
  }),

  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      console.log({ ctx, input })
      // query from db
      return posts.find(post => post.id === input.id)
    }),
})
