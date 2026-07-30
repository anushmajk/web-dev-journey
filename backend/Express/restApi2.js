const express =require("express");
const app=express();

let users=[
    {id:"01",name:"Anushma"},
    {id:"02",name:"Ajishma"}
];
app.get("/users/:id",(req,res)=>{
    const id=res.params.id;
    const user= users.find((u)=>{
            return u.id === id;
        });
        if(!user){
            return res.status(401).json({
                message:"User not found"
            });
        }
        res.json(user);
});