require("dotenv").config()
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");
const newToken = (user) => {
    return jwt.sign({
        user: user,
        exp: 60 * 5
    }, process.env.JWT_SECRET_KEY)
}
const register = async (req, res) => {
    let user;
    try {
        // first check if email provided is already given to another user
        user = await User.findOne({
            email: req.body.email
        }).lean().exec();
        // if yes then throw an eror 404 bad request
        if (user) return res.status(400).send({
            message: "User with this email id is already exists"
        })
        //if not then we will create the user
        user = await User.create(req.body);
        // user.delete("password");
        // we will hash the password for the user

        // we will create the tocken for the user
        const token = newToken(user)

        // return the tocken and the user details
        return res.status(201).send({
            user,
            token
        })
    } catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
}
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).lean().exec();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}
const login = async (req, res) => {
    console.log("where is the error", req.body.email)
    try {
        // first we will find the user with the email
        let user = await User.findOne({
            email: req.body.email
        });
        // if user is not found throw an error 400 bad request
        if (!user) return res.status(400).send({
            message: "User with this email id is already exists"
        })
        // if found then match the password with provided password in db
        const match = user.checkPassword(req.body.Password)
        console.log("password is ?", match)
        // if user is not found throw an error 400 bad request
        if (!match) return res.status(400).send({
            message: "Either email or password is incorrect"
        })
        // if password also matches then create a token
        const token = newToken(user)

        // return the tocken and the user details
        return res.status(201).send({
            user,
            token
        })
        // return the token and user details


    } catch (err) {
        return res.status(400).send({
            message: err.message
        })
    }
}

module.exports = {
    register,
    login,
    getUsers
}