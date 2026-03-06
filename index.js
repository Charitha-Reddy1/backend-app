import express from "express"
import expressLayouts from "express-ejs-layouts"
import session from "express-session"
import productRouter from "./routes/productRoute"
import userRouter from "./routes/userRoute"

const app=express()
app.set("view engine","ejs")
app.set("views","views")
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use(session({
    secret:'secretKey',
    resave:false,
    saveUninitialized:false
}),
)

app.get("/",(req,res)=>{
    res.render("home")
})
app.use('/products',productRouter)
app.use("/users",userRouter)

app.listen(5000,()=>{
    console.log("Server Started")
})