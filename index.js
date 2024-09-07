const express = require("express");
// const bodyParser =require("body-parser");
const app = express();

const port = /*process.env.PORT || */ 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Routes

app.get("/",(req,res)=>{
    console.log("this is get");
    
    res.status(200).json({
        key:"this is the get route"
    })
})
app.post("/post",(req,res)=>{
    const {username} = req.body;
    const nocache = req.query.nocache; // Leer el parámetro nocache
    res.status(200).json({
        key:`esta es post ${username}`,nocache
    })
})
app.put("/:id",(req,res)=>{
    res.status(200).json({
        key:"this is the put route"
    })
})
app.delete("/:id",(req,res)=>{
    res.status(200).json({
        key:"this is the delete route"
    })
})


app.listen(port, ()=>console.log(`Server running on port ${port}`));