import { Hono } from "hono";
import { fromHono } from "chanfana";
import { MoEmailList } from "./moEmailList";
import { MoEmailCreate } from "./moEmailCreate";
import { MoEmailRead } from "./moEmailRead";
import { MoEmailUpdate } from "./moEmailUpdate";
import { MoEmailDelete } from "./moEmailDelete";

export const moEmailRouter = fromHono(new Hono());

moEmailRouter.get("/", MoEmailList);
moEmailRouter.post("/", MoEmailCreate);
moEmailRouter.get("/:id", MoEmailRead);
moEmailRouter.put("/:id", MoEmailUpdate);
moEmailRouter.delete("/:id", MoEmailDelete);
