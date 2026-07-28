//task-1
const express =require("express");
const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(" Welcome to my Express App");
});
//task2
app.get('/user/:name',(req,res)=>{
const name=req.params.name;
res.send(`Hello ${name}`);
});

//task-3
app.get('/search',(req,res)=>{
    const item=req.query.item;
    res.send(` You Searched for ${item}`);
})

//task-4

app.post('/login',(req,res)=>{
const {username,password}=req.body;
if(username==="admin" && password==="1234"){
    res.json({
        message:"Login Successful"
    });
}else{
    res.status(401).json({
        message:"Invalid Credentials"
    });
}
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});