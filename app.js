const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send("Hello DevOps!")
})

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);    
})