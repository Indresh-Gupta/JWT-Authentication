import ensureAuthentication from "./middleware/authenication.js";

const route=require("express").Router();
route.post("/product", ensureAuthentication, (req, res)=>{
    res.status(200).json([
        {
            name:"mobile",
            price:"100"
        },
        {
            name:"laptop",
            price:"1000",
        },
        {
            name:"bicycle",
            price:"2000"
        }
    ])
})