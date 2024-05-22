const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;


// public static path
const static_path = path.join(__dirname,"../public")


app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.send("Welcome to first page")
});

app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
});

app.get("/weather",(req,res)=>{
    res.send("Welcome to weather page")
});

app.get("*",(req,res)=>{
    res.send("404 Page Not Found")
});

app.listen(port,()=>{
    console.log(`Listening at ${port}`)
})