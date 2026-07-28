const express=require("express");
const app=express();
const menuroutes= require("./menuroutes");
app.use("/",menuroutes);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
