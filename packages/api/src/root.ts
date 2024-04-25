import { postRouter } from "./routers/post";
import { productRout } from "./routers/product";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  product: productRout,
});

// export type definition of API
export type AppRouter = typeof appRouter;
