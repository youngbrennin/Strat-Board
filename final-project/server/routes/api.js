module.exports = function (app, db) {

  app.get("/api/cards", function(req, res) {
    db.Cards.findAll({})
      .then(function(dbCards) {
        res.json(dbCards);
      });
  });

  app.get("/api/user", function(req, res) {
    if(!req.user){
        res.json(false);
    }
    res.json(req.user);
  });

}


// This code *might* work to send people back to the splash screen when not logged in
//
// if(!req.user){
//   return res.redirect("/");
// }
  
  

