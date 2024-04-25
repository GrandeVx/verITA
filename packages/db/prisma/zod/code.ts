import * as z from "zod"
import { Completeproduct, relatedproductSchema, Completerequest, relatedrequestSchema } from "./index"

export const codeSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  status: z.string(),
  productId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface Completecode extends z.infer<typeof codeSchema> {
  product: Completeproduct
  requests: Completerequest[]
}

/**
 * relatedcodeSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedcodeSchema: z.ZodSchema<Completecode> = z.lazy(() => codeSchema.extend({
  product: relatedproductSchema,
  requests: relatedrequestSchema.array(),
}))
