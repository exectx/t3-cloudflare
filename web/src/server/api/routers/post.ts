import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { posts } from "@/server/db/schema";
import { TRPCError } from "@trpc/server";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const ip = ctx.headers.get("x-forwarded-for") ?? "undefined";
      const ratelimit = await ctx.ratelimit.limit(ip);
      if (!ratelimit.success) {
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "You are doing that too much. Please wait a bit.",
        });
      }
      await ctx.db.insert(posts).values({
        name: input.name,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.query.posts
      .findFirst({
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
      })
      .then((post) => post ?? null);
  }),
});
