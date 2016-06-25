"use strict";

(function() {
        var fs = require('fs');
        var rs = fs.createReadStream('/dev/ttyO0');
        
        rs.on('data', function(chunk){
                process.stdout.write(chunk.toString());
        });      
})();
