import express from 'express'
// import mongoose from 'mongoose'
// import DB_Name from './constants'
import connectDB from './db/index.js'
import dotenv from 'dotenv'
// import app from './app.js' 

// just check why this is not working in our app.js 



const app = express()

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(
            'server is running at port ', process?.env?.PORT
        )
    })
}).catch((error)=>{
    console.log('---------------------------------------------------------')
    console.log('Mongo db connnection faild ', error)
})

dotenv.config({path : './env'})























// const app = express()

// ;(async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//        app.on("error",(error)=>{
//         console.log(error , 'something wrong in error in try block')
//         throw error
//        })
//        app.listen(process.env.PORT , ()=>{
//         console.log(`app is listening at ${process.env.PORT}`)
//        })

//     }
//     catch(error)
//     {
//         console.log(error, 'something went wrong ')

//     }

// })()