import {Schema, SchemaTypes} from "mongoose";

export const DisposeSchema = new Schema({
    _id: {
        type: SchemaTypes.String,
        required: true
    },
    user_id: {
        type: SchemaTypes.String,
        required: true
    },
    date: {
        type: SchemaTypes.String,
        required: true
    },
    no_of_bottles: {
        type: SchemaTypes.Number,
        required: true
    },
    bin_id: {
        type: SchemaTypes.String,
        required: true
    }
});