/*const express =require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello World');
});
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});*/

const express = require("express");
const { startTransition } = require("react");
const app = express();

app.use(express.json());

// GET route
app.get("/", (req, res) => {
    res.send("Express is working!");
});

// POST route
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({
            message: "Login Successful"
        });
    } else {
        res.status(401).json({
            message: "Invalid Credentials"
        });
    }

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


