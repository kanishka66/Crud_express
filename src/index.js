const express =require("express");
const app= express();
// const quotes=require("./quotes.json");
const userRouter=require("./routes/userroutes");
const noteRouter = require("./routes/noteRoutes");
const mongoose=require("mongoose");

app.use(express.json());

app.use((req,res,next)=>{
    console.log("HTTP Method -" + req.method + ", URL - " +req.url);
    next();
});
app.use("/users",userRouter);//user ke route is file se serve honge
app.use("/note",noteRouter);

 
app.get("/",(req,res)=>{
res.send("Hey ");
});

// app.get("/quote",(req,res)=>{
//     res.status(200).json(quotes);
// });

// app.get("/random",(req,res)=>{
//     let index= Math.floor(Math.random()*quotes.length);
//     let quote= quotes[index];
//     res.status(200).json(quote);
// });
mongoose.connect("mongodb+srv://Kanishka:Patwa@notescrud.drbmwuj.mongodb.net/?retryWrites=true&w=majority&appName=notescrud")
.then(()=>{
    app.listen(5000,()=>{
        console.log("Sever started on port 5000");
    });
})
.catch((error)=>{
    console.log(error);
})

