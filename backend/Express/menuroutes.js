const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Menu Home");
});

router.get("/:id", (req, res) => {
    const products={
        1: "Pizza",
        2: "Burger",
        3: "Pasta",
        4: "Salad"
    }
    res.send("Product is " + products[req.params.id] || "Product not found");
});

module.exports = router;