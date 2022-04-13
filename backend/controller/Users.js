import Users from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch(err) {
        console.log(err);
    }
}