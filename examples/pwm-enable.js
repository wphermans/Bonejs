"use strict";

(function() {
        var pwm = require("../pwm.js");

        pwm.export_pwm(0, 0);
        pwm.export_pwm(0, 1);
        pwm.export_pwm(2, 0);
        pwm.export_pwm(2, 1);
        pwm.export_pwm(4, 0);
        pwm.export_pwm(4, 1);
})();