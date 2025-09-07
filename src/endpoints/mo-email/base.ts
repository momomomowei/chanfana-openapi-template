import { z } from "zod";

export const moEmail = z.object({
  id: z.number().int(),
  email: z.string().email(),
  is_delete: z.number().int().default(0),
  create_at: z.number().int(),
});

export const MoEmailModel = {
  tableName: "mo_email",
  primaryKeys: ["id"],
  schema: moEmail,
  serializer: (obj: Record<string, string | number | boolean>) => {
    return {
      ...obj,
      is_delete: Number(obj.is_delete),
      create_at: Number(obj.create_at),
    };
  },
  serializerObject: moEmail,
};
