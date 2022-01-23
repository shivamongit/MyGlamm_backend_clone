 
const Razorpay = require('razorpay');

const express = require('express');

const session = require('express-session');
const passport = require('passport');
require('./auth');

const app = express();
app.use(express.static("./public"))


const lipsticController = require("./src/controller/lipstic.controller");
const hairController = require("./src/controller/hairController");
const productController = require("./src/controller/product.controller");
const skinController = require("./src/controller/skincare.controller");


const connect = require('./src/config/db')
const {
    register,
    login,
    getUsers
} = require('./src/controller/auth.controller');
app.use(express.json());

app.use("/lipstic", lipsticController);
app.use("/hairCare", hairController);
app.use("/products", productController);
app.use("/skins", skinController);

app.post("/register", register);
app.post("/login", login);
app.get("/getUsers", getUsers);


app.post("/register", register);
app.post("/login", login);
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
  }
  app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  });
  app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));
  app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/google/failure'
    })
  );
//   app.get('/protected', isLoggedIn, (req, res) => {
//     res.send(`Hello ${req.user.displayName}`);
//   });
app.get('/protected',isLoggedIn,(req,res) => {
    res.render("home.ejs");
})
  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
  });
  app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });







// let app = express()
const razorpay = new Razorpay({
    key_id: 'rzp_test_1QUwthR4KQ4Qbz',
    key_secret: '4OnLOVbBUrPXbZ9yT03rZkiz',
})


app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/checkout.ejs', (req, res) => { 
    res.render('checkout.ejs')
})

app.get('/razorpay.ejs', (req, res) => { 
    res.render('razorpay.ejs')
})


app.post("/successful",(req,res) => {
    res.render("successful.ejs");
})
app.get("/successful",(req,res) => {
    res.render("successful.ejs");
})



app.post('/order', (req, res) => {
    let options = {
        // amount: `${JSON.parse(localStorage.getItem("GrandTotal"))}`,
        amount:378*100,
        currency: "INR",
    };
    razorpay.orders.create(options, (err, order) => {
        console.log(order)
        res.json(order)
    })
})

// app.listen(6300);


const start = async () => {
    await connect();
    app.listen(5000, () => {
        console.log("listening port on ...5000")
    })
}
module.exports = start;





