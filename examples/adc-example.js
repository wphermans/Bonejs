"use strict";

(function() {
        var adc = require('./adc.js');
        
        function read_adc(channel){
                var log_sample = function(){
                        adc.read(channel, function(data){
                                var sample = (data & 0xFFF);
                                console.log(channel + ':' + sample);
                        });
                }
                setInterval(log_sample, 1000);
        }
        
        var ain0 = new read_adc(0);
        var ain1 = new read_adc(1);
        var ain2 = new read_adc(2);
        var ain3 = new read_adc(3);
        var ain4 = new read_adc(4);
        var ain5 = new read_adc(5);
        var ain6 = new read_adc(6);       
})();
