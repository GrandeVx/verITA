import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const productRout = createTRPCRouter({
  getProducts: publicProcedure
    .input(
      z.object({
        company_id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const products = await ctx.db.product.findMany({
        where: {
          companyId: input.company_id,
        },
      });
      return products;
    }),

  getProduct: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const code = await ctx.db.code.findFirst({
        where: {
          code: input.id,
        },
      });

      if (!code) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Product not found",
        });
      }

      const product = await ctx.db.product.findUnique({
        where: {
          id: code.productId,
        },
      });

      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Product not found",
        });
      }

      const request = await ctx.db.request.create({
        data: {
          position: "-2.96502,-66.78188",
          codeId: code.id,
        },
      });

      if (!request) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Internal error",
        });
      }

      return {
        ...product,
        status: code.status,
      };
    }),

  getAllRequests: publicProcedure
    .input(z.object({ company_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const requests = await ctx.db.request.findMany({
        where: {
          code: {
            product: {
              companyId: input.company_id,
            },
          },
        },
        include: {
          code: {
            include: {
              product: true,
            },
          },
        },
      });

      return requests;
    }),

  addCodes: publicProcedure
    .input(z.object({ codes: z.array(z.string()), productId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const codes = input.codes.map((code) => {
        return {
          code,
          productId: input.productId,
        };
      });

      const createdCodes = await ctx.db.code.createMany({
        data: codes,
      });

      return createdCodes;
    }),
});
