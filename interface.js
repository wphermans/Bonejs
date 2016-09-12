"use strict";

var exec = require('child_process').exec;

exports.display_ip = function(inet, callback){
    
    var params = inet + "  | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'"
    var child = exec('/sbin/ifconfig ' + params, (error, stdout, stderr) => {
        if(error){throw error;}

        callback(stdout);       
    });
};

