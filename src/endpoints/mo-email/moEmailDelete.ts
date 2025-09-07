import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MoEmailModel } from "./base";

export class MoEmailDelete extends D1DeleteEndpoint<HandleArgs> {
  _meta = {
    model: MoEmailModel,
  };
}
