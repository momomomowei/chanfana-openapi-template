import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MoEmailModel } from "./base";

export class MoEmailUpdate extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: MoEmailModel,
    fields: MoEmailModel.schema.pick({
      email: true,
      is_delete: true,
      create_at: true,
    }),
  };
}
