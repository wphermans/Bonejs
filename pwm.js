"use strict";
var fs = require('fs');
var path = "/sys/class/pwm";

exports.set_period = function(pwmchip, pwm, period){
        fs.access(path + "/pwmchip" + pwmchip + "/pwm" + pwm + "/period", fs.F_OK, (err) => {
	        if(err){throw err;}
	});

        fs.writeFileSync(path + "/pwmchip" + pwmchip + "/pwm" + pwm + "/period", period, 'utf8'); 
};

exports.set_duty_cycle = function(pwmchip, pwm, duty_cycle){
        fs.access(path + "/pwmchip" + pwmchip + "/pwm" + pwm + "/duty_cycle", fs.F_OK, (err) => {
	        if(err){throw err;}
	});

        fs.writeFileSync(path + "/pwmchip" + pwmchip + "/pwm" + pwm + "/duty_cycle", duty_cycle, 'utf8');
};

exports.enable = function(pwmchip, pwm, enable){
        if(enable > 1 || enable < 0){
                throw "Valid values are 0, or 1 only.";
        }
        fs.access(path + "/pwmchip" + pwmchip + "/pwm" + pwm + "/enable", fs.F_OK, (err) => {
	        if(err){throw err;}
	});

        fs.writeFileSync(path + "/pwmchip" + pwmchip + "/pwm" + pwm + "/enable", enable, 'utf8'); 
};

exports.export_pwm = function(pwmchip, pwm){
        fs.access(path + "/pwmchip" + pwmchip + "/export", fs.F_OK, (err) => {
	        if(err){throw err;}
	});

        fs.writeFileSync(path + "/pwmchip" + pwmchip + "/export", pwm, 'utf8'); 
};

exports.unexport_pwm = function(pwmchip, pwm){
        fs.access(path + "/pwmchip" + pwmchip + "/unexport", fs.F_OK, (err) => {
	        if(err){throw err;}
	});

        fs.access(path + "/pwmchip" + pwmchip + "/pwm" + pwm, fs.F_OK, (err) => {
	        if(err){throw err;}
	});

        fs.writeFileSync(path + "/pwmchip" + pwmchip + "/unexport", pwm, 'utf8');   
};
