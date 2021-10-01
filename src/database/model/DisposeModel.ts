import {Document, model} from "mongoose";
import {DisposeSchema} from "../schemas/DisposeSchema";

export interface IDispose {
    user_id: string
    date: string
    no_of_bottles: number
    bin_id: string
}

export interface IDisposeModel extends IDispose, Document {
}

export const DisposeModel = model<IDisposeModel>("dispose", DisposeSchema);