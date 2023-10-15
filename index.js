const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/check",(req,res)=>{
    let num = req.body.num;
    let ans = num % 2 ==0 ? "Even" : "Odd";
    res.send(ans);
});

app.listen(9000, ()=>{console.log("We are ready with port 9000")});