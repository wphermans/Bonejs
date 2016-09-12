"use strict";

(function() {
        var inet = require('../interface.js');

        inet.display_ip('eth0', function(stdout){
                process.stdout.write(stdout);
        });         
        
})();