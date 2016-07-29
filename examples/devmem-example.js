"use strict";

(function() {
        var devmem = require('../devmem.js');
        var led = require('../usr-leds.js');

        var stdin = process.stdin;
        stdin.setRawMode( true );
        stdin.setEncoding( 'utf8' );
        
        // GPIO1 bank base address.
        var GPIO1 = 0x4804C000;
        // One can use GPIO_SETDATAOUT, and GPIO_CLEARDATAOUT to set/clear GPIO data registers. 
        // Or, we can use GPIO_DATAOUT directly. Which in my mind is closer to
        // 'traditional' embedded design. Either way will work.
        var GPIO_DATAOUT = 0x13C;       
        // USR LED bit offsets.
        var USR0 = (1 << 21);   
        var USR1 = (1 << 22);
        var USR2 = (1 << 23);
        var USR3 = (1 << 24);

        var value = 0;
        var interval = 75;
        var addr = GPIO1 + GPIO_DATAOUT;

        // Turn off all USR LEDs through sysfs
        for(var n=0; n < 4; n++){
                led.write(n, 'trigger', 'none');
        }

        clearLEDS();
        // Cylon like blink pattern.
        toggle0();

        function toggle0(){
                value ^= USR0;
                devmem.write(addr, value);
                setTimeout(toggle1, interval * 5);
        }

        function toggle1(){
                value ^= USR0 + USR1;
                devmem.write(addr, value);
                setTimeout(toggle2, interval);
        }

        function toggle2(){
                value ^= USR1 + USR2;
                devmem.write(addr, value);
                setTimeout(toggle3, interval);
        }

        function toggle3(){
                value ^= USR2 + USR3;
                devmem.write(addr, value);
                setTimeout(toggle4, interval * 5);
        }

        function toggle4(){
                value ^= USR3 + USR2;
                devmem.write(addr, value);
                setTimeout(toggle5, interval);
        }

        function toggle5(){
                value ^= USR2 + USR1;
                devmem.write(addr, value);
                setTimeout(toggle6, interval);
        }

        function toggle6(){
                value ^= USR1;
                devmem.write(addr, value);
                toggle0();
        }

        function clearLEDS(){
                value &= ~(USR0 + USR1 + USR2 + USR3);
                devmem.write(addr, value);
        }

        stdin.on( 'data', function( key ){
                // Cleanly exit on CTRL + C
                if ( key === '\u0003' ) {
                        clearLEDS();
                        process.exit();
                }
        });                
})();
