const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("hello Crud");
});

app.listen(3002, ()=>{
    console.log("on the 3002 port's");
});