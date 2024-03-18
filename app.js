import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({
    limit: '50mb'
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
app.get("/",(req,res)=>{
    res.json("Hey there!")
})

const response = async (req, res) => {
    try{
        const {data} = req.body;
    if(data.length === 0) {
        return res.status(400).json({
            is_success:false,
        message: "Provide some details"
    })}
    let odd = [];
    let even = [];
    let aplh = [];
    data.map((item) => {
        if(isNaN(item)) aplh = [...aplh, item.toUpperCase()];
        else{
        if(parseInt(item) % 2 == 0) even = [...even, item]; 
        else odd = [...odd, item]; 
        }
    })
    let response = {
        isSuccess: true,
        user_id:"Pratham_Mehta_260903",
        roll_no:"2110991055",
        odd_numbers:odd,
        even_numbers: even,
        alphabets: aplh
    }
    return res.json(response).status(200)
    }catch(err){
        console.log(err)
        return res.json({
            message: "Something went wrong"
        }).status(500)
    }
}
app.post("/bfhl", response);
app.get("/bfhl",(req,res)=>{    
    res.send("Please use POST method with postman and enter array of strings in the body.")
})