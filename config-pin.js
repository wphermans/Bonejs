"use strict";
var fs = require('fs');
var exec = require('child_process').exec;

exports.config = function(pin, value){
    
    var params = pin + ' ' + value; 
    var child = exec('/usr/bin/config-pin ' + params, (error, stdout, stderr) => {
        if(error){throw error;}       
    });
};

exports.listModes = function(pin, callback){
    
    var params = pin; 
    var child = exec('/usr/bin/config-pin -l ' + params, (error, stdout, stderr) => {
        if(error){throw error;}

        callback(stdout);       
    });
};
 