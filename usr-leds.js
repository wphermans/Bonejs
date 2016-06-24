"use strict";

var fs = require('fs');
var path = "/sys/class/leds/beaglebone:green:usr";

exports.write = function(led, file, value){
        fs.access(path + led + "/" + file, fs.F_OK, (err) => {
		if(err){throw err;}
	});
    
        fs.writeFileSync(path + led + "/" + file, value, 'utf8');   
};
