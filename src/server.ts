import express, {Application} from 'express';
import dotenv from "dotenv";
import {json} from 'body-parser';
import {connectDatabase} from './database/connection';

const app: Application = express();
app.use(json());
dotenv.config();

connectDatabase().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
}).then((error) => {
    console.log(error);
});

