"use strict";

(function() {
        var led = require('../usr-leds.js');
        var timerID = 0;
        var stdin = process.stdin;
        stdin.setRawMode( true );
        stdin.setEncoding( 'utf8' );
        
        // Turn off all USR LEDs
        for(var n=0; n < 4; n++){
                led.write(n, 'trigger', 'none');
        }
        
        // Create a blink pattern
        var led_number = 0;
        var led_value = 0;
        
        function toggleLED(){
                
                if(led_number <= 3){
                        led.write(led_number, 'brightness', led_value);
                        led_number++;
                }else{
                        led_number = 0;
                        led_value ^= 1;
                }
        };
        
        timerID = setInterval(toggleLED, 100);
        
        // Trap CTRL + C key combination, and exit app cleanly.
        stdin.on( 'data', function( key ){
                // ctrl-c ( end of text )
                if ( key === '\u0003' ) {
                        process.stdout.write('Caught CTRL + C keypress, turning off LEDs . . .');
                        clearInterval(timerID);
                        for(var n=0; n < 4; n++){
                                led.write(n, 'brightness', 0);
                        }
                        process.stdout.write(' Exiting.' + '\n');
                        process.exit();
                }
        });              
})();
