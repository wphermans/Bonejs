"use strict";

(function() {
        var adc = require('./adc.js');
        var fs = require('fs');
        var writeStream = fs.createWriteStream('/dev/ttyO0');
        
        function read_adc(channel){
                var log_sample = function(){
                        adc.read(channel, function(data){
                                var sample = (data & 0xFFF);
                                writeStream.write(channel + ':' + sample + "\n");
                        });
                }
                setInterval(log_sample, 1000);
        }
        
        var ain0 = new read_adc(0);       
})();
