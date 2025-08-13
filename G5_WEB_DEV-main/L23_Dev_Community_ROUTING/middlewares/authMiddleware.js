const jwt = require("jsonwebtoken");


const authMiddleware = async (req , res, next) =>{
    const { authorization } = req.headers;

    const token = authorization.split(" ")[1];

    const userData = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(userData)
    if (!userData){
        return res.status(401).json({
            message: "User not found"
        })
    }

    const { _id} = userData.userId;
    console.log(_id);
    


    next();
}


module.exports = authMiddleware;