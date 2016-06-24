"use strict";

(function() {
        var adc = require('./adc.js');
        var fs = require('fs');                                                 // Step 1 create file system object.
        var ws = fs.createWriteStream('/dev/ttyO0');                            // Step 2 create write stream object.
        
        function read_adc(channel){
                var log_sample = function(){
                        adc.read(channel, function(data){
                                var sample = (data & 0xFFF);
                                ws.write(channel + ':' + sample + "\n");        // Step 3 write data to write stream.
                        });
                }
                setInterval(log_sample, 1000);
        }
        var ain0 = new read_adc(0);       
})();
