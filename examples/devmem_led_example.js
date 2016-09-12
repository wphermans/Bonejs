"use strict";

(function() {
        var devmem = require('../devmem.js');

        var USR0 = (1 << 21);
        var USR1 = (1 << 22);
        var USR2 = (1 << 23);
        var USR3 = (1 << 24);

        var GPIO1 = 0x4804C000;
        var GPIO_DATAOUT = 0x13C;
        var GPIO1_DATAOUT = GPIO1 + GPIO_DATAOUT;

        var led_value = USR0;
        var led_up = 0x1;
        var led_down = 0x2;
        var led_direction = 0;

        function toggle_leds(){
                devmem.write(GPIO1_DATAOUT, led_value);

                if(led_value & USR0){
                        led_direction = led_up;
                }else if(led_value & USR3){
                        led_direction = led_down;
                }

                if(led_direction & led_up){
                        led_value <<=1;
                }else if(led_direction & led_down){
                        led_value >>=1;
                }

                setTimeout(toggle_leds, 100);
        }
        toggle_leds();

        var stdin = process.stdin;
        stdin.setRawMode( true );
        stdin.setEncoding( 'utf8' );

        stdin.on( 'data', function( key ){
                // Cleanly exit on CTRL + C
                if ( key === '\u0003' ) {
                        led_value &= ~(USR0 + USR1 + USR2 + USR3);
                        devmem.write(GPIO1_DATAOUT, led_value);
                        process.exit();
                }
        }); 
        
})();