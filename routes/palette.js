var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	//res.send('Your random palette is called: ' + randomPalette['title']);
	 // of by one, our first project has index 0
	 console.log(randomPalette);
  	res.json(randomPalette);
	

}