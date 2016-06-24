"use strict";

(function() {
        var fs = require('fs');
        var gpio = require('./gpio.js');
        var cp = require('./config-pin.js');
        var P8_07 = {};

        P8_07.pin = 'P8.07';
        P8_07.kernelPin = 66;

        fs.watch('/sys/class/gpio/gpio' + P8_07.kernelPin, (event, filename) => {
                var output = 'pin:' + '\t   ' + P8_07.pin + '\n';
                gpio.read(P8_07.kernelPin, 'direction', function(direction){
                        output += 'direction: ' + direction;
                        gpio.read(P8_07.kernelPin, 'value', function(value){
                                output += 'value:' + '\t   ' + value;
                                process.stdout.write(output);
                                process.exit();
                        });
                });
        }); 
        cp.config(P8_07.pin, 'hi');  
})();
