// const express=require("express");

const route=require("express").Router();
const {signup, login}=require("../Controllers/authenticate.js");
const {signupValidation, loginValidation}=require("../Middleware/Schema.js");

route.post("/signup",signupValidation, signup);
route.post("/login", loginValidation, login);

module.exports=route;