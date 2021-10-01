import {model} from "mongoose";
import {GarbageCollectorSchema} from "../schemas/GarbageCollectorSchema";

export interface IGarbageCollector {
    name: string
    password: string
    email: string
    area: string
}

export interface IGarbageCollectorModel extends IGarbageCollector, Document {
}

export const GarbageCollectorModel = model<IGarbageCollectorModel>("garbageCollectors", GarbageCollectorSchema);