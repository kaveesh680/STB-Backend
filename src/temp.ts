import express, {Application, Request, Response} from 'express';
import {connectDatabase} from './database/connection';
import {v4 as uuidv4} from 'uuid';
import {BinModel} from "./database/model/BinModel";
import {DisposeModel} from "./database/model/DisposeModel";
import {genSalt, hash} from "bcrypt";
import {UserModel} from "./database/model/UserModel";
import jwt from "jsonwebtoken";
import {GarbageCollectorModel} from "./database/model/GarbageCollectorModel";


const app: Application = express();
app.use(express.json());

connectDatabase().then(() => {
    app.post('/add/bin', async (req: Request, res: Response) => {
        // const bin = await BinModel.create({
        //     _id: uuidv4(),
        //     area: "Matara",
        //     bottle_count: 50,
        //     status: false
        // });
        // res.send(bin);
        // const dispose = await DisposeModel.create({
        //     _id:uuidv4(),
        //     user_id:"54b9981c-82c7-424f-99cb-df4d87a0fa82",
        //     date:"July 07",
        //     no_of_bottles:5,
        //     bin_id:"30897981-5777-4a6e-b6dd-dba1ddc35bc4"
        // });
        // res.send(dispose)
        const salt = await genSalt(10);
        const hashedpassword = await hash("qwer", salt);
        const garbageCollector = await GarbageCollectorModel.create({
            _id: uuidv4(),
            name: "charuka",
            email: "daham@gmail.com",
            password: hashedpassword,
            area:"Matara"
        });
        res.send(garbageCollector);
    });
    app.listen(3000, () => {
        console.log(`App is listen at http://localhost/3000`);
    });
}).catch((error) => {
    console.log(error);
})


//     const order = await DisposeModel.create({
//         _id:uuidv4(),
//         user_id:"d959f1ef-455c-4e15-8f8e-22d50fa8a457",
//         date:"july 05",
//         no_of_bottles:3,
//         bin_id:
// });
// signUp: async (_, args: { email: string, password: string, first_name: string, last_name: string }) => {
//     const salt = await genSalt(10);
//     const hashedpassword = await hash(args.password, salt);
//     const user = await UserModel.create({
//         _id: uuidv4(),
//         first_name: args.first_name,
//         last_name: args.last_name,
//         email: args.email,
//         password: hashedpassword
//     });
//     return {
//         token: jwt.sign({user_id: user._id, user: "user"}, `${process.env.JWT_SECRET_ID}`),
//         role: 'user'
//     }
// }