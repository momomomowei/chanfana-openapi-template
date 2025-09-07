import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MoEmailModel } from "./base";

export class MoEmailCreate extends D1CreateEndpoint<HandleArgs> {
  _meta = {
    model: MoEmailModel,
    fields: MoEmailModel.schema.pick({
      // this is purposely missing the id, because users shouldn't be able to define it
      email: true,
      is_delete: true,
      create_at: true,
    }),
  };
}
