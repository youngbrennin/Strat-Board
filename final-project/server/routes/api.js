module.exports = function (app, db) {

  app.get("/api/cards", function(req, res) {
    db.Cards.findAll({})
      .then(function(dbCards) {
        res.json(dbCards);
      });
  });

}





  
  

