import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/trashBin`;

export const connectDatabase = async () => {
    try {
        const client = await mongoose.connect(databaseURL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
}


