import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MoEmailModel } from "./base";

export class MoEmailRead extends D1ReadEndpoint<HandleArgs> {
  _meta = {
    model: MoEmailModel,
  };
}
