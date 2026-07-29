const express =require("express");
const app=express();
app.use(express.json());

app.post("/login",(req,res)=>{

const {username,password}=req.body;

if(username==="admin" && password==="1234"){
    res.send("Success");
}else{
    res.send("Failed");
}

});
app.listen(3000);