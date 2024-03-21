const express = require("express");
const app = express();
const port = 3000;

//Routes
app.get("/" , (req,res)=> {
    console.log("Hello Node API!")

})


app.listen (port, ()=> {
    console.log("Node Api is runnin from port "+ port)
})