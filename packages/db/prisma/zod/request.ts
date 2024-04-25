import * as z from "zod"
import { Completecode, relatedcodeSchema } from "./index"

export const requestSchema = z.object({
  id: z.number().int(),
  position: z.string(),
  codeId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface Completerequest extends z.infer<typeof requestSchema> {
  code: Completecode
}

/**
 * relatedrequestSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedrequestSchema: z.ZodSchema<Completerequest> = z.lazy(() => requestSchema.extend({
  code: relatedcodeSchema,
}))
