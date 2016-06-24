"use strict";
var fs = require('fs');
var path = "/sys/bus/iio/devices/iio:device0/in_voltage";

exports.read = function(ch, callback){	
        fs.access(path + ch + "_raw", fs.F_OK, (err) => {
		if(err){throw err;}
	});

	fs.readFile(path + ch + "_raw", (err, data) => {
                if(err){data = null;}
        
                callback(data);
    });
};
