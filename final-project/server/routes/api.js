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

  app.get("/api/games", function(req, res) {
    db.Games.findAll({where: {active: 1}})
      .then(function(allGames) {
        res.json(allGames);
      })
  });

}


// This code *might* work to send people back to the splash screen when not logged in
//
// if(!req.user){
//   return res.redirect("/");
// }
  
  

