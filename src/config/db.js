const mongoose = require('mongoose');

const connect = () => {

    return mongoose.connect("mongodb+srv://dilshad09:rmHQ7eM4VDp17RlZ@cluster0.lpck5.mongodb.net/myglamm")
}
module.exports = connect;