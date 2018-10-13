const router = require('express').Router();
const db = require("../server/models");



    router.get("/cards", function(req, res) {
        db.Cards.findAll({})
          .then(function(dbCards) {
            res.json(dbCards);
          });
      });
      
 module.exports = router;





  
  

