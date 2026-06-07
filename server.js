import express from "express"
import sum from "./sum.js";

const app = express()

const port = 8080;

app.listen(port , () => {
    console.log("Server chal raha hai .... 8080 port per ")
})

app.get("/home" , async (req , res) => {
    res.json({
        msg : "Main root hu "
    })
})

app.get("/getSum/:a/:b" , async (req , res) => {
    const {a , b} = req.params;
    res.json ({
        ans : sum(parseInt(a) , parseInt(b))
    })
})