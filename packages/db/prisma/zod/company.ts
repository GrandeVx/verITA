import * as z from "zod"
import { Completeproduct, relatedproductSchema } from "./index"

export const companySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  imageUrl: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface Completecompany extends z.infer<typeof companySchema> {
  products: Completeproduct[]
}

/**
 * relatedcompanySchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedcompanySchema: z.ZodSchema<Completecompany> = z.lazy(() => companySchema.extend({
  products: relatedproductSchema.array(),
}))
