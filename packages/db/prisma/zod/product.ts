import * as z from "zod"
import { Completecompany, relatedcompanySchema, Completecode, relatedcodeSchema } from "./index"

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  imageUrl: z.string(),
  info: z.string(),
  companyId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface Completeproduct extends z.infer<typeof productSchema> {
  company: Completecompany
  codes: Completecode[]
}

/**
 * relatedproductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedproductSchema: z.ZodSchema<Completeproduct> = z.lazy(() => productSchema.extend({
  company: relatedcompanySchema,
  codes: relatedcodeSchema.array(),
}))
