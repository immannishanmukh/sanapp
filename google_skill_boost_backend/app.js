const express =require("express");
const cors =require("cors");
const mongoose=require("mongoose");
const password=encodeURIComponent('UDAY0908');
const url = `mongodb+srv://22a91a0515:${password}@cluster0.w3ges.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(url)
.then(()=>{
    console.log('connection eshtablished');
})
.catch(err=>{
    console.log(err);
})
const app=express();
app.use(express.json());

app.use(cors({
        origin :["https://deploy-mern-1whq.vercel.app"],
            methods: ["POST", "GET"],
            credentials: true
        }));
const schema=new mongoose.Schema({
    "username":String,
    "password":String,
    "0_0":{
        type:Boolean,
        default:false,
    },
    "0_1":{
        type:Boolean,
        default:false,
    },
    "0_2":{
        type:Boolean,
        default:false,
    },
    "0_3":{
        type:Boolean,
        default:false,
    },
    "1_0":{
        type:Boolean,
        default:false,
    },
    "1_1":{
        type:Boolean,
        default:false,
    },
    "1_2":{
        type:Boolean,
        default:false,
    },
    "1_3":{
        type:Boolean,
        default:false,
    },
    "2_0":{
        type:Boolean,
        default:false,
    },
    "3_0":{
        type:Boolean,
        default:false,
    },
    "4_0":{
        type:Boolean,
        default:false,
    },
    "4_1":{
        type:Boolean,
        default:false,
    },
    "4_2":{
        type:Boolean,
        default:false,
    },
    "4_3":{
        type:Boolean,
        default:false,
    },
    "5_0":{
        type:Boolean,
        default:false,
    },
    "5_1":{
        type:Boolean,
        default:false,
    },
    "5_2":{
        type:Boolean,
        default:false,
    },
    "5_3":{
        type:Boolean,
        default:false,
    },
    "6_0":{
        type:Boolean,
        default:false,
    },
    "6_1":{
        type:Boolean,
        default:false,
    },
    "6_2":{
        type:Boolean,
        default:false,
    },
    "6_3":{
        type:Boolean,
        default:false,
    },
    "7_0":{
        type:Boolean,
        default:false,
    },
    "7_1":{
        type:Boolean,
        default:false,
    },
    "7_2":{
        type:Boolean,
        default:false,
    },
    "7_3":{
        type:Boolean,
        default:false,
    },
    "8_0":{
        type:Boolean,
        default:false,
    },
    "8_1":{
        type:Boolean,
        default:false,
    },
    "8_2":{
        type:Boolean,
        default:false,
    },
    "8_3":{
        type:Boolean,
        default:false,
    },
    "9_0":{
        type:Boolean,
        default:false,
    },
    "9_1":{
        type:Boolean,
        default:false,
    },
    "9_2":{
        type:Boolean,
        default:false,
    },
    "9_3":{
        type:Boolean,
        default:false,
    },
    "10_0":{
        type:Boolean,
        default:false,
    },
    "10_1":{
        type:Boolean,
        default:false,
    },
    "10_2":{
        type:Boolean,
        default:false,
    },
    "10_3":{
        type:Boolean,
        default:false,
    },
    "11_0":{
        type:Boolean,
        default:false,
    },
    "11_1":{
        type:Boolean,
        default:false,
    },
    "11_2":{
        type:Boolean,
        default:false,
    },
    "11_3":{
        type:Boolean,
        default:false,
    },
    "12_0":{
        type:Boolean,
        default:false,
    },
    "12_1":{
        type:Boolean,
        default:false,
    },
    "12_2":{
        type:Boolean,
        default:false,
    },
    "12_3":{
        type:Boolean,
        default:false,
    },
    "13_0":{
        type:Boolean,
        default:false,
    },
    "13_1":{
        type:Boolean,
        default:false,
    },
    "13_2":{
        type:Boolean,
        default:false,
    },
    "13_3":{
        type:Boolean,
        default:false,
    },
    "14_0":{
        type:Boolean,
        default:false,
    },
    "14_1":{
        type:Boolean,
        default:false,
    },
    "14_2":{
        type:Boolean,
        default:false,
    },
    "14_3":{
        type:Boolean,
        default:false,
    },
    "15_0":{
        type:Boolean,
        default:false,
    },
    "15_1":{
        type:Boolean,
        default:false,
    },
    "15_2":{
        type:Boolean,
        default:false,
    },
    "15_3":{
        type:Boolean,
        default:false,
    },
})

const MODEL=mongoose.model('google',schema);


async function Login(req,res)
{
    try{
        const a =await MODEL.findOne(req.body);
        if(a)
        {
            res.send(true);
        }
        else
        {
            res.send(false);
        }
    }
    catch(err)
    {
        console.log(err);
    }
}
async function Getting(req,res) {
    try{
    const {username}=req.query;
    const a=await MODEL.findOne({"username":username})
        if(a)
        {
            return res.status(200).json(a);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch(err)
    {
        console.log(err);
    }
}

async function Modify(req,res)
{
    try{
        const {username,value}=req.query;
        var updateObject = {};
        updateObject[value] = true;
        // console.log(updateObject);
        const data= await MODEL.findOneAndUpdate({"username":username},updateObject,{ new: true });
        if (data) {
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    }
    catch(err)
    {
        console.log(err);
    }
}
async function Inserting(req,res)
{
    try{
        MODEL.create(req.body)
        .then(()=>{
            res.status(200).json("all ok");
        })
    }
    catch(err)
    {
        console.log(err);
    }
}


app.post('/login',Login);
app.get('/getting',Getting);
app.get('/modifing',Modify);

app.post('/inserting',Inserting);

app.listen(9000,()=>{
    console.log("server started at 9000");
})