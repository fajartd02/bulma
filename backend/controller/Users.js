import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch(err) {
        console.log(err);
    }
}

export const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;

    const valid = await Users.findOne({ where: {email} });
    if(valid !== null) {
        return res.status(400).json({message: "Email sudah ada"});
    }

    if(password !== confPassword) {
        return res.status(400).json({message: "Password dan Confirm Password tidak match"});
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });

        res.json({message: "Register Successfully"});
    } catch(err) {
        console.log(err);
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) {
            res.status(400).json({message: "Wrong Password!"});
        }
        const userId = user.id;
        const name = user.name;
        const email = user.email;

        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });

        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await Users.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true, // this mean can't access by client
            maxAge: 24 * 60 * 60 * 1000 // this mean 1 day
        });

        res.json({ accessToken });
    } catch(err) {
        console.log(err);
        res.status(404).json({message: "Email tidak ditemukan!"});
    }
}