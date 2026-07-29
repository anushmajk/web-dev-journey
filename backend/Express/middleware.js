/*const express= require("express");
const app= express();
app.use(express.json());


function validateLoginForm(req,res,next){
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).send("Username and password are required");
    }
    res.send("Validation successful");
    next();
}
app.post("/login",validateLoginForm,(req,res)=>{
    res.send("Login successful");
});
app.listen(3000); */

//task1
const express =require("express");
const app=express();
app.use(express.json());
app.use("/",(req,res,next)=>{
    console.log("Request recieved");
    next();
});
app.get("/",(req,res)=>{
    res.send(" Home Page");
});

//task2
function checkLogin(req, res, next) {
    console.log("Checking Login...");
    next();
}
app.get("/dashboard", checkLogin, (req, res) => {
    res.send("dashboard");
});

//task3
app.use("/",(req,res,next)=>{
    console.log("middleware-1");
    next();
})
app.use("/",(req,res,next)=>{
    console.log("middleware-2");
    next();
});
app.get("/hello",(req,res)=>{
    res.send("Hello Express");
});
