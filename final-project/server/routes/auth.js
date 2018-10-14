module.exports = function (app, passport) {
    app.get('/auth/google', passport.authenticate( 'google', { scope: ['profile'] } ) );

    app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: "/"}), function(req, res){
        res.redirect('/matchmaking');
    });

    app.get('/auth/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })
}