const express = require("express");
const app= express();

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    if(id!=10){
        return res.status(404).send("Product not found");
    }
    res.send(`Product ID: ${id}`);
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});