var path = require("path");

// Import results
var friendResults = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      // Returns all friends!
      res.json(friends);
    });

    // collects all the incoming, live survey data!
    // also handles the logic for compatibility to give you your perfect match!
    app.post("/api/friends", function(req, res) {
      friends.push(req.body);
      res.json(req.body.newFriend);
    });
};
