import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";

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