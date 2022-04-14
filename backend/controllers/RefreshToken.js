import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken; // nama cookies pas login
        if(!refreshToken) {
            return res.sendStatus(401); //unauthorized
        }

        const user = await Users.findOne({
            where: {
                refresh_token: refreshToken
            } 
        });

        if(!user) {
            return res.sendStatus(403); //forbidden
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                return res.sendStatus(403); //forbidden
            }

            const userId = user.id;
            const name = user.name;
            const email = user.email;

            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            })

            res.json({accessToken});
        });

    } catch(err) {
        console.log(err);
    }
}