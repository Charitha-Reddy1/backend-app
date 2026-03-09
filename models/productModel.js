import mongoose from 'mongoose'
const productSchema=mongoose.Schema({
    name:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    imageUrl:{type:String},
})

const productModel=mongoose.model("prods",productSchema)
// const productModel=[
//     {id:1,name:'Product 1',price:130},
//     {id:2,name:'Product 2',price:180},
//     {id:3,name:'Product 3',price:245}
// ]

export default productModel