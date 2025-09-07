import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { MoEmailModel } from "./base";

export class MoEmailList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: MoEmailModel,
  };

  searchFields = ["email"];
  defaultOrderBy = "id DESC";
}
