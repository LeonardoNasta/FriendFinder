var path = require("path");

// Import results
var friendResults = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // Returns all friends!
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    // get user details
    var user = req.body;
    var userResponses = userInput.scores;
		// console.log('userResponses = ' + userResponses);

		// Compute best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 20000;

		// Examine all existing friends in the list
		for (var i = 0; i < friendResults.length; i++) {
			// console.log('friendResults = ' + JSON.stringify(friends[i]));

			// Compute difference for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			// If lowest difference, record the friend match
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friendResults[i].name;
				matchImage = friendResults[i].photo;
			}
		}

		// Add new user
		friendResults.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};