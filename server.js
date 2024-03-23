const express = require("express");
const app = express();
const port = 3000;
const mongoose =  require("mongoose");
const Product = require("./models/productModel");


//MiddleWare
app.use(express.json());

//Routes
app.get("/" , (req,res)=> {
    console.log("Hello Node API!");
})
app.get("/blog" , (req,res)=> {
    console.log("Hello Blog!")
})
app.get("/products", async(req, res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)

    }catch(err){
        res.status(500).json({message: err.message})
    }

})
app.get("/products/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)

    }catch (err){
        res.status(500).json({message: err.message})
    }

})
app.post("/products/:id", async(req, res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch(err) {
        console.log(err.message);
        res.status(500).json({message :err.message})
    }

})



mongoose.connect("mongodb+srv://cfuser:12345@cluster0.kkskqwx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen (port, ()=> {
        console.log("Node Api is runnin from port "+ port)
        
    });
    }
    ).catch ((err)=>{
        console.log(err)
    });