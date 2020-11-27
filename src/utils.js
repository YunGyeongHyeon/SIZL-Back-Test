import jwt from "jsonwebtoken";

export const generateToken = (id) => {
    if(id!== undefined){
        return jwt.sign({id}, process.env.JWT_SECRET)
    }else{
        return "아이디가 존재하지 않습니다."
    }
};