import mongoose from "mongoose";
import {DB_NAME} from './constants.js';
import dotenv from "dotenv"
import express from "express"
const app = express()

dotenv.config({
    path:'./env'
})

const connectDb = async () => {
        try {
           await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

           app.on( 'error' , (error) => {
            console.log('error', error);
            throw error
           })

           console.log('nikesh');
           app.listen(process.env.PORT , (err) => {
                console.log('hii i am working hii', process.env.PORT);
           })
        } catch (error) {
            console.log(error);
            throw err 
        }
}

connectDb()
export default connectDb;