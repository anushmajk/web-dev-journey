const express = require("express");

const app = express();

app.use(express.json());

const postapi = require("./routes/postapi");

app.use("/users", postapi);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});