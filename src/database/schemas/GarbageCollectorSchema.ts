import {Schema, SchemaTypes} from "mongoose";

export const GarbageCollectorSchema = new Schema({
    _id: {
        type: SchemaTypes.String,
        required: true
    },
    name: {
        type: SchemaTypes.String,
        required: true
    },
    password: {
        type: SchemaTypes.String,
        required: true
    },
    email: {
        type: SchemaTypes.String,
        required: true
    },
    area:{
        type:SchemaTypes.String,
        required:true
    }
});