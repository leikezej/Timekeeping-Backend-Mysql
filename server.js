const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const colors = require ("colors");
const cors = require ("cors");
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser')
const cookieSession = require('cookie-session')
const session = require('express-session');
const logger = require("morgan");

const connectDB = require("./config/db.config.js");
const { Session } = require('inspector');
dotenv.config({ path: './config/config.env'});
connectDB();

const app = express();
// app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    // dotenv.config({ path:  '../.'})
    // app.use(logger('dev'));
};

if (process.env.NODE_ENV === 'production') {
      app.use(logger('dev'));
    // app.use(express.static(path.join(__dirname, '/frontend/build')))
    // app.get('*', (req, res) =>
    // res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    // )
};

// CORS
app.use(
    cors({
      // origin: '*',
      origin: "http://localhost:5050",
      credentials:  true
    })
);

// Cookie Session
app.use(
  cookieSession({
    name: process.env.COOKIE_NAME,
    keys: ['key420', 'key230'],
    secret: process.env.COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true,
    saveUninitialized: true
  })
);

// Express Session
app.use(session({ 
    secret: process.env.SESSION_SECRET, 
    saveUninitialized: true, 
    resave: false,
    // store: new MongoStore({
    //   mongooseConnection: mongoose.connection
    // }),
    cookie:{maxAge: 180*60*1000}
    // cookie: { maxAge: 60000 }
}));


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/leave.routes')(app);
require('./routes/timein.routes')(app);
require('./routes/timeout.routes')(app);


app.listen(process.env.PORT, () => {
    const PORT = process.env.PORT || 5555 || 5050
    const HOST = process.env.HOST;
    console.log(
        `Server Running @ ${HOST}:${PORT}`
      .red.bold
    );
    // console.log('hello'.green); // outputs green text
});

