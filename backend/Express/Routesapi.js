const express = require("express");
const router = express.Router();

let users = [
    { id: "01", name: "Anushma" },
    { id: "02", name: "Ajishma" }
];

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