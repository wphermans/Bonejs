"use strict";
var fs = require('fs');
var exec = require('child_process').exec;

exports.write = function(addr, value){
    
        var params = addr + ' w ' + value; 
        var child = exec('/usr/bin/devmem ' + params, (error, stdout, stderr) => {
                if(error){throw error;}       
        });
};

exports.read = function(addr, callback){
    
        var params = addr; 
        var child = exec('/usr/bin/devmem ' + params, (error, stdout, stderr) => {
                if(error){throw error;}

                callback(stdout);       
        });
};
 