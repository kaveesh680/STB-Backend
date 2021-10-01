import {IResolvers} from "graphql-tools";
import {UserModel} from '../../database/model/UserModel';
import {GarbageCollectorModel} from '../../database/model/GarbageCollectorModel';
import jwt from "jsonwebtoken";
import {genSalt, hash, compare} from 'bcrypt';
import {AuthenticationError} from "apollo-server-express";
import {v4 as uuidv4} from 'uuid';

export const UserResolver: IResolvers = {
    Mutation: {
        signIn: async (_, args: { email: string, password: string }, context: { user_id: string }) => {
            const user = await UserModel.findOne({email: args.email});
            const garbageCollector = await GarbageCollectorModel.findOne({email: args.email});
            if (user) {
                const match = await compare(args.password, user.password);
                if (match) {
                    return {
                        token: jwt.sign({user_id: user._id, user: "user"}, `${process.env.JWT_SECRET_ID}`),
                        role: 'user'
                    };
                }
                throw new AuthenticationError("Sign in failed.");
            } else {
                if (garbageCollector) {
                    const match = await compare(args.password, garbageCollector.password);
                    if (match) {
                        return {
                            token: jwt.sign({
                                user_id: garbageCollector._id,
                                user: "garbageCollector"
                            }, `${process.env.JWT_SECRET_ID}`, {expiresIn: "12h"}),
                            role: 'garbageCollector'
                        };
                    }
                    throw new AuthenticationError("Sign in failed");
                } else {
                    throw new AuthenticationError("sign in failed");
                }
            }
        },
        signUp: async (_, args: { email: string, password: string, first_name: string, last_name: string }) => {
            const salt = await genSalt(10);
            const hashedpassword = await hash(args.password, salt);
            const user = await UserModel.create({
                _id: uuidv4(),
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                password: hashedpassword
            });
            return {
                token: jwt.sign({user_id: user._id, user: "user"}, `${process.env.JWT_SECRET_ID}`),
                role: 'user'
            }
        }
    }
}