import {Schema, SchemaTypes} from "mongoose";

export const BinSchema = new Schema({
    _id: {
        type: SchemaTypes.String,
        required: true
    },
    area: {
        type: SchemaTypes.String,
        required: true
    },
    bottle_count: {
        type: SchemaTypes.Number,
        required: true
    },
    status:{
        type:SchemaTypes.Boolean,
        required:true
    }
});