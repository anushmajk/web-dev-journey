const express=require("express");
const app=express();
app.use(express.json());

    const Routesapi= require("./routes/Routesapi");
    app.use("/users", Routesapi);

    const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
