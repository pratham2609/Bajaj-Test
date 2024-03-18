import express from "express";
import {router} from "./controlllers/post.js";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    limit: '50mb'
}));

app.get("/",(req,res)=>{
    res.json("Hey there!")
})


app.use("/api/v1", router)
app.get("/bfhl",(req,res)=>{    
    res.send("Please use POST method with postman and enter array of strings in the body.")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})