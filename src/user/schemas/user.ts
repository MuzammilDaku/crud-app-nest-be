import * as mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    }
})

export  interface userInterface{
    name:string,
    phoneNumber:number
}