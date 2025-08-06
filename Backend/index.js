const express=require("express");
const app=express();

const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const router=require("./Routes/auth.js");
const products=require("./Routes/product.js");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const port=process.env.Port;

main()
.then(() =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/JWTAUTHENTICATION');
}



app.use("/user", router);
app.use("/product", products);

app.get("/", (req, res)=>{
    res.send("this is root node");
})



app.listen(port, (req,res)=>{
    console.log("app is listening in this port");
})
