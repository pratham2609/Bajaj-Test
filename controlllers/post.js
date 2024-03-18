import express from "express";
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
        user_id:"Pratham_Mehta_26092003",
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
const router = express.Router()
router.post("/bfhl", response);
export {router};  