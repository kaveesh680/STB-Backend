import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getUser = (token: string) => {
    if (token) {
        try {
            return jwt.verify(token, `${process.env.JWT_SECRET_ID}`);
        } catch (err) {
            return null;
        }
    }
};
