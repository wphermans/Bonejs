"use strict";
var fs = require('fs');
var path = "/sys/class/gpio/gpio";

exports.read = function(pin, file){	
	fs.access(path + pin + "/" + file, fs.F_OK, (err) => {
		if(err){throw err;}
	});

	return fs.readFileSync(path + pin + "/" + file, 'utf8');
};

exports.write = function(pin, file, value){
	fs.access(path + pin + "/" + file, fs.F_OK, (err) => {
		if(err){throw err;}
	});

	fs.writeFileSync(path + pin + "/" + file, value, 'utf8');
};

exports.export_pin = function(pin){
	var file ="/sys/class/gpio/export";

	fs.writeFileSync(file, pin, 'utf8');
};

exports.unexport_pin = function(pin){
	var file ="/sys/class/gpio/unexport";

	fs.writeFileSync(file, pin, 'utf8');
};