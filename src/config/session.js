const session = require('express-session');

module.exports = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 30,
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    }
});