const game = require('../util/game/game');

module.exports = function (app, db) {

  app.get("/api/user", function(req, res) {
    if(!req.user){
        return res.json(false);
    }
    res.json(req.user);
  });

  app.get("/api/games", function(req, res) {
    db.Games.findAll({where: {active: 1}})
      .then(function(allGames) {
        res.json(allGames);
      })
  });

  app.post("/api/games", function(req, res) {
    if(!req.user || req.user.activeGame != 0){
      return res.json(false);
    }
    return game.newGame(req.user, res.json.bind(res));
  });

  app.put("/api/join/:id", function(req, res) {
    if(!req.user || req.user.activeGame != 0){
      return res.json(false);
    }
    return game.joinGame(req.user.id, req.user.name, req.params.id, res.json.bind(res));
  });

  app.get("/api/game/:id", function(req, res) {
    let activeUser = "";
    if(!req.user){
      activeUser = "NONE";
    }
    else {
      activeUser = req.user.id;
    }
    
    // why am I not using promises? cb feels so sloppy...
    return game.loadGame(req.params.id, activeUser, res.json.bind(res));
  });
}
// Calling game.getGameObject(gameID, UserID) will give you the full game object including it's checks.
// Simply use the functions on the opject to check if an interation is valid and then make the db change.
// The same object is available in the state of the Game component.