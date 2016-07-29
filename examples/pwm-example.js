"use strict";

(function() {
        var pwm = require("../pwm.js");

        function test_pwm(pwmchip, pwmnum, interval){
                function test(){
                        pwm.set_period(pwmchip, pwmnum, interval);
                        pwm.set_duty_cycle(pwmchip, pwmnum, interval);
                        pwm.enable(pwmchip, pwmnum, 1);

                        var count = interval;

                        while(count-- > 0){
                                pwm.set_duty_cycle(pwmchip, pwmnum, count);
                        }

                        while(count++ < interval){
                                pwm.set_duty_cycle(pwmchip, pwmnum, count);
                        }
                        pwm.set_duty_cycle(pwmchip, pwmnum, interval);
                        //pwm.enable(pwmchip, pwmnum, 0);
                };
                setInterval(test, 100);
        };

        var pwm0 = new test_pwm(0, 0, 100);
        var pwm1 = new test_pwm(0, 1, 100);
        var pwm2 = new test_pwm(2, 0, 100);
        var pwm3 = new test_pwm(2, 1, 100);
        var pwm4 = new test_pwm(4, 0, 100);
        var pwm5 = new test_pwm(4, 1, 100);
})();
