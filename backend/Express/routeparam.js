const express =require("express");
const app=express();

app.get("/products/:id",(req,res)=>{
    const id =req.params.id;
    const product={
        1:'laptop',
        2:'mobile',
        3:'tablet'
    };
res.send(product[id] || "Product Not Found");
});
const PORT =3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});