
var friendsList = require("../data/friends.js");

function apiRouting(app){

  app.get("/api/friends", function(req, res) {
  res.json(friendsList);
});



// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;


  console.log(newFriend);


  friendsList.push(newFriend);

  

  res.json(newFriend);
});

}

module.exports = apiRouting;