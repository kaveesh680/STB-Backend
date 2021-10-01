import {Document, model} from "mongoose";
import {UserSchema} from "../schemas/UserSchema";

export interface IUser {
    first_name: string
    last_name: string
    email: string
    password: string
}

export interface IUserModel extends IUser, Document {
}

export const UserModel = model<IUserModel>("users", UserSchema);
