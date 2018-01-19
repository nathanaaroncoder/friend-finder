var path = require("path");

function htmlRouting(app){

app.get("/:newRoute?", function(req, res) {
	var newRoute = req.params.newRoute;

	switch(newRoute){
		case "survey":
			res.sendFile(path.join(__dirname, "../public/survery.html"));
			break;
		default:
  			res.sendFile(path.join(__dirname, "../public/home.html"));
  			break;

	}


});


}

module.exports = htmlRouting;