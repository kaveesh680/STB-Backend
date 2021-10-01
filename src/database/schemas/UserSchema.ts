import {Schema, SchemaTypes} from "mongoose";

export const UserSchema = new Schema({
    _id: {
        type: SchemaTypes.String,
        required: true
    },
    first_name: {
        type: SchemaTypes.String,
        required: true
    },
    last_name: {
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
    }
});
