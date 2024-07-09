import mongoose from "mongoose";
import {DB_Name }from '../constants.js';

const connectDB = async ()=>{
    // const DB_Name = 'LibrarySystem'
    try{
        let connect  = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log('mongo db is connected', connect.connection.host)

    }
    catch(error)
    {
        console.log(error)
    }
}

export default connectDB