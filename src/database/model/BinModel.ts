import {Document, model} from "mongoose";
import {BinSchema} from "../schemas/BinSchema";

export interface IBin {
    area: string
    bottle_count:number
}

export interface IBinModel extends IBin, Document {
}

export const BinModel = model<IBinModel>("bins", BinSchema);