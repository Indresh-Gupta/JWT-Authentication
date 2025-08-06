import jwt from "webjsontoken";

const ensureAuthentication=(req, res, next)=>{
    const auth=req.headers["application"];
    if(!auth){
        res.status(402).json({msg:"toke is not found"});
    }
    const result=jwt.verify(auth, process.env.JWT_KEY_TOKEN );
    req.user=result;
    next();
    res.status(200).json({msg:"user register before"});
}

export default ensureAuthentication;