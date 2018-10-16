var session = require("express-session");
var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(app, passport, db){
    app.use(require('cookie-parser')());
    app.use(session({ secret: "cats" }));
    app.use(passport.initialize());
    app.use(passport.session()); 

    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        db.Users.findOrCreate({
            where: {
                googleID: profile.id
            },
            defaults: {
                userName: profile.displayName,
                score: 0
            }
        }).spread((User, created) => {
            let user = {
                // Yes, I did use both user and User here.
                id : User.id,
                name : User.userName,
                winCount : User.winCount,
                loseCount : User.loseCount,
                activeGame : User.activeGame,
                hp : User.hp,
                ap : User.ap
            }
            console.log(user);
            cb(null, user);
        });
    }
    ));

    passport.serializeUser(function(user, callback){
        console.log('serializing user.');
        callback(null, user);
    });

    passport.deserializeUser(function(user, callback){
        db.Users.find({
            where: {
                id: user.id
            }
        })
        .then((User) => {
            let user = {
                // Yes, I did use both user and User here.
                id : User.id,
                name : User.userName,
                winCount : User.winCount,
                loseCount : User.loseCount,
                activeGame : User.activeGame,
                hp : User.hp,
                ap : User.ap
            }
            
            console.log('deserialize user.');
            callback(null, user);
        });
    });
}