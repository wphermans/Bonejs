"use strict";
var fs = require('fs');
var exec = require('child_process').exec;

exports.read = function(dev, addr, subaddr, callback){
        fs.access("/dev/i2c-" + dev, fs.F_OK, (err) => {
		if(err){throw err;}
        });
    
    var params = dev + ' ' + addr + ' ' + subaddr; 
    var child = exec('/usr/sbin/i2cget -y -f ' + params, (error, stdout, stderr) => {
        if(error){throw error;}
        
        callback(stdout);        
    });
};  
