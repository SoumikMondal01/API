const express= require("express");
const app=express();
const mongoose= require('mongoose');
app.use(express.json());

//DB Connection
mongoose.connect("mongodb://localhost:27017/olympics",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
    {
        console.log("connected to db")
    }
    else{
        console/log("error")
    }
})

//Schema

const sch={
    name:String,
    email:String,
    id:Number
}
const monmodel=mongoose.model("menrankings", sch);

//POST
app.post("/post",async (req, res)=>{
    console.log("inside post function");

    const data=new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });

    const val=await data.save();
    res.json(val);
})
app.listen(3000, ()=>{
    console.log("on port 3000")
})