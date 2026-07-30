const express = require("express");
const router = express.Router();

let users = [
    { id: "01", name: "Anushma" },
    { id: "02", name: "Ajishma" }
];

router.get("/",(req,res)=>{
     res.json(users);
});
// GET /users/:id
router.get("/:id", (req, res) => {

    const id = req.params.id;

    const user = users.find((u) => {
        return u.id === id;
    });

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    res.json(user);
});

//POST

router.post("/",(req,res)=>{
    const {name}=req.body;
    if(!name){
        res.status(400).json({
            message:" Name is required"
        });
    }
    const newUser ={
        id:String(users.length+1).padStart(2,"0"),
        name :name
    };
    users.push(newUser);
    res.status(201).json(newUser);

});

module.exports = router;