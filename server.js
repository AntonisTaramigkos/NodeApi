const express = require("express");
const app = express();
const port = 3000;
const mongoose =  require("mongoose");

//MiddleWare
app.use(express.json());

//Routes
app.get("/" , (req,res)=> {
    console.log("Hello Node API!");
})
app.get("/blog" , (req,res)=> {
    console.log("Hello Blog!")
})

app.post("/product", (req, res)=>{
    try{}
    catch(err) {
        console.log(err.)
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