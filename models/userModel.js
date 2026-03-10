import mongoose from 'mongoose'
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    pass:{type:String,required:true},
})

const userModel=mongoose.model("users",userSchema)
// const productModel=[
//     {id:1,name:'Product 1',price:130},
//     {id:2,name:'Product 2',price:180},
//     {id:3,name:'Product 3',price:245}
// ]

export default userModel