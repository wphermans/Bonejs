"use strict";
(function() {
        var i2c = require('./i2c.js');
        var pmic = {};
        // Chip ID Register (CHIPID) Page 42 tps65217.pdf
        i2c.read(0, 0x24, 0x00, function(data){
                var num = parseInt(data, 16);
                var chipid = {};
                
                chipid.chipid = (num & 0xF0) >> 4;
                chipid.rev = num & 0x0F;
                
                pmic.chipid = chipid;
        });
        // Power Path Control Register (PPATH)
        i2c.read(0, 0x24, 0x01, function(data){
                var num = parseInt(data, 16);
                var ppath ={}
                 
                ppath.iusb = num & 0x03;
                ppath.iac = (num & 0x0C) >> 2;
                 
                num & (1 << 4) ? ppath.usben = 1 : ppath.usben = 0;
                num & (1 << 5) ? ppath.acen = 1 : ppath.acen = 0;
                num & (1 << 6) ? ppath.usbsink = 1 : ppath.usbsink = 0;
                num & (1 << 7) ? ppath.acsink = 1 : ppath.acsink = 0;
         
                pmic.ppath = ppath;
        });
        //  Interrupt Register (INT)
        i2c.read(0, 0x24, 0x02, function(data){});
        // Charger Configuration Register 0 (CHGCONFIG0)
        i2c.read(0, 0x24, 0x03, function(data){
                var num = parseInt(data, 16);
                var chgconfig ={};
                
                num & (1 << 0) ? chgconfig.battemp = 1 : chgconfig.battemp = 0;
                num & (1 << 1) ? chgconfig.pchgtout = 1 : chgconfig.pchgtout = 0;
                num & (1 << 2) ? chgconfig.chgtout = 1 : chgconfig.chgtout = 0;
                num & (1 << 3) ? chgconfig.active = 1 : chgconfig.active = 0;
                num & (1 << 4) ? chgconfig.termi = 1 : chgconfig.termi = 0;
                num & (1 << 5) ? chgconfig.tsusp = 1 : chgconfig.tsusp = 0;
                num & (1 << 6) ? chgconfig.dppm = 1 : chgconfig.dppm = 0;
                num & (1 << 7) ? chgconfig.treg = 1 : chgconfig.treg = 0;
                
                pmic.chgconfig0 = chgconfig;
        });
        // Charger Configuration Register 1 (CHGCONFIG1)
        i2c.read(0, 0x24, 0x04, function(data){
                var num = parseInt(data, 16);
                var chgconfig ={};
                
                num & (1 << 0) ? chgconfig.chgen = 1 : chgconfig.chgen = 0;
                num & (1 << 1) ? chgconfig.susp = 1 : chgconfig.susp = 0;
                num & (1 << 2) ? chgconfig.term = 1 : chgconfig.term = 0;
                num & (1 << 3) ? chgconfig.reset = 1 : chgconfig.reset = 0;
                num & (1 << 4) ? chgconfig.ntctype = 1 : chgconfig.ntctype = 0;
                num & (1 << 5) ? chgconfig.tmren = 1 : chgconfig.tmren = 0;
                
                chgconfig.timer = (num & 0xC0) >> 6;
                
                pmic.chgconfig1 = chgconfig;
        });
        // Charger Configuration Register 2 (CHGCONFIG2)
        i2c.read(0, 0x24, 0x05, function(data){
                var num = parseInt(data, 16);
                var chgconfig ={};
                
                chgconfig.voreg = (num & 0x18) >> 3;        
                num & (1 << 6) ? chgconfig.vprechg = 1 : chgconfig.vprechg = 0;
                num & (1 << 7) ? chgconfig.dyntmr = 1 : chgconfig.dyntmr = 0;
                
                pmic.chgconfig2 = chgconfig;
        });
        //  Charger Configuration Register 3 (CHGCONFIG3)
        i2c.read(0, 0x24, 0x06, function(data){
                var num = parseInt(data, 16);
                var chgconfig ={};
                
                num & (1 << 0) ? chgconfig.trange = 1 : chgconfig.trange = 0;
                
                chgconfig.termif = (num & 0x06) >> 1; 
                
                num & (1 << 3) ? chgconfig.pchgt = 1 : chgconfig.pchgt = 0;
                
                chgconfig.dppmth = (num & 0x30) >> 4;
                chgconfig.ichrg = (num & 0xC0) >> 6;        
                
                pmic.chgconfig3 = chgconfig;
        });
        // WLED Control Register 1 (WLEDCTRL1)
        i2c.read(0, 0x24, 0x07, function(data){
                var num = parseInt(data, 16);
                var wledctrl ={};
                
                wledctrl.fdim = (num & 0x03);
                
                num & (1 << 2) ? wledctrl.isel = 1 : wledctrl.isel = 0;
                num & (1 << 3) ? wledctrl.isinken = 1 : wledctrl.isinken = 0;
                
                pmic.wledctrl1 = wledctrl;
        });
        // WLED Control Register 2 (WLEDCTRL2)
        i2c.read(0, 0x24, 0x08, function(data){
                var num = parseInt(data, 16);
                var wledctrl ={};
                
                wledctrl.duty = (num & 0x7F);
                
                pmic.wledctrl2 = wledctrl;
        });
        // MUX Control Register (MUXCTRL)
        i2c.read(0, 0x24, 0x09, function(data){
                var num = parseInt(data, 16);
                var muxctrl ={};
                
                muxctrl.mux = (num & 0x07);
                
                pmic.muxctrl = muxctrl;
        });
        // Status Register (STATUS)    
        i2c.read(0, 0x24, 0x0A, function(data){
                var num = parseInt(data, 16);
                var status ={};
                
                num & (1 << 2) ? status.usbpwr = 1 : status.usbpwr = 0;
                num & (1 << 3) ? status.acpwr = 1 : status.acpwr = 0;
                num & (1 << 7) ? status.off = 1 : status.off = 0;
                
                pmic.status = status;
        });
        //  Password Register (PASSWORD)
        i2c.read(0, 0x24, 0x0B, function(data){});
        // Power Good Register (PGOOD)
        i2c.read(0, 0x24, 0x0C, function(data){
                var num = parseInt(data, 16);
                var pgood ={};
                
                num & (1 << 0) ? pgood.ldo2pg = 1 : pgood.ldo2pg = 0;
                num & (1 << 1) ? pgood.ldo1pg = 1 : pgood.ldo1pg = 0;
                num & (1 << 2) ? pgood.dc3pg = 1 : pgood.dc3pg = 0;
                num & (1 << 3) ? pgood.dc2pg = 1 : pgood.dc2pg = 0;
                num & (1 << 4) ? pgood.dc1pg = 1 : pgood.dc1pg = 0;
                num & (1 << 5) ? pgood.ldo4pg = 1 : pgood.ldo1pg = 0;
                num & (1 << 6) ? pgood.ldo3pg = 1 : pgood.ldo3pg = 0;
                
                pmic.pgood = pgood;
        });
        // Power Good Control Register (DEFPG) 
        i2c.read(0, 0x24, 0x0D, function(data){
                var num = parseInt(data, 16);
                var defpg ={};
                
                defpg.pgdly = (num & 0x03);
                
                num & (1 << 2) ? defpg.ldo2pgm = 1 : defpg.ldo2pgm = 0;
                num & (1 << 3) ? defpg.ldo1pgm = 1 : defpg.ldo1pgm = 0;
                
                pmic.defpg = defpg;
        });
        // DCDC1 Control Register (DEFDCDC1)
        i2c.read(0, 0x24, 0x0E, function(data){
                var num = parseInt(data, 16);
                var defdcdc = {};
                
                defdcdc.dcdc1 = (num & 0x3F);
                
                num & (1 << 7) ? defdcdc.ldopgm = 1 : defdcdc.ldo1pgm = 0;
                
                pmic.defdcdc1 = defdcdc;
        });
        // DCDC2 Control Register (DEFDCDC2)
        i2c.read(0, 0x24, 0x0F, function(data){
                var num = parseInt(data, 16);
                var defdcdc = {};
                
                defdcdc.dcdc2 = (num & 0x3F);
                
                num & (1 << 7) ? defdcdc.xadj2 = 1 : defdcdc.xadj2 = 0;
                
                pmic.defdcdc2 = defdcdc;
        });
        // DCDC3 Control Register (DEFDCDC3)
        i2c.read(0, 0x24, 0x10, function(data){
                var num = parseInt(data, 16);
                var defdcdc = {};
                
                defdcdc.dcdc3 = (num & 0x3F);
                
                num & (1 << 7) ? defdcdc.xadj3 = 1 : defdcdc.xadj3 = 0;
                
                pmic.defdcdc3 = defdcdc;
        });
        // Slew Rate Control Register (DEFSLEW)
        i2c.read(0, 0x24, 0x11, function(data){
                var num = parseInt(data, 16);
                var defslew = {};
                
                defslew.slew = (num & 0x03);
                
                num & (1 << 3) ? defslew.pfmen3 = 1 : defslew.pfmen3 = 0;
                num & (1 << 4) ? defslew.pfmen2 = 1 : defslew.pfmen2 = 0;
                num & (1 << 5) ? defslew.pfmen1 = 1 : defslew.pfmen1 = 0;
                num & (1 << 6) ? defslew.godsbl = 1 : defslew.godsbl = 0;
                num & (1 << 7) ? defslew.go = 1 : defslew.go = 0;
                
                pmic.defslew3 = defslew;
        });
        //  LDO1 Control Register (DEFLDO1)
        i2c.read(0, 0x24, 0x12, function(data){
                var num = parseInt(data, 16);
                var defldo ={};
                
                defldo.ldo1 =  (num & 0x0F);
                
                pmic.defldo1 = defldo;
        });
        // LDO2 Control Register (DEFLDO2)
        i2c.read(0, 0x24, 0x13, function(data){
                var num = parseInt(data, 16);
                var defldo ={};
                
                defldo.ldo2 =  (num & 0x0F);
                
                pmic.defldo2 = defldo;
        });
        // Load Switch1 / LDO3 Control Register (DEFLS1)
        i2c.read(0, 0x24, 0x14, function(data){
                var num = parseInt(data, 16);
                var defls ={};
                
                defls.ldo3 = (num & 0x3F);
                
                num & (1 << 5) ? defls.ls1ldo3 = 1 : defls.ls1ldo3 = 0;
                
                pmic.defls1 = defls;
        });
        // Load Switch2 / LDO4 Control Register (DEFLS2)
        i2c.read(0, 0x24, 0x15, function(data){
                var num = parseInt(data, 16);
                var defls ={};
                
                defls.ldo4 = (num & 0x3F);
                
                num & (1 << 5) ? defls.ls1ldo4 = 1 : defls.ls1ldo4 = 0;
                
                pmic.defls2 = defls;
        });
        // Enable Register (ENABLE)
        i2c.read(0, 0x24, 0x16, function(data){
                var num = parseInt(data, 16);
                var enable ={};
                
                num & (1 << 0) ? enable.ldo2en = 1 : enable.ldo2en;
                num & (1 << 1) ? enable.ldo1en = 1 : enable.ldo1en;
                num & (1 << 2) ? enable.dc3en = 1 : enable.dc3en; 
                num & (1 << 3) ? enable.dc2en = 1 : enable.dc2en;
                num & (1 << 4) ? enable.dc1en = 1 : enable.dc1en;
                num & (1 << 5) ? enable.ls2en = 1 : enable.ls2en;
                num & (1 << 6) ? enable.ls1en = 1 : enable.ls1en;
                
                pmic.enable = enable;         
        });
        // UVLO Control Register (DEFUVLO)
        i2c.read(0, 0x24, 0x18, function(data){
                var num = parseInt(data, 16);
                var defuvlo ={};
                
                defuvlo.uvlo = (num & 0x03);
                
                pmic.defuvlo = defuvlo;
        });
        // Sequencer Register 1 (SEQ1)
        i2c.read(0, 0x24, 0x19, function(data){
                var num = parseInt(data, 16);
                var seq = {};
                
                seq.dc2seq = (num & 0x0F);
                seq.dc1seq = (num & 0xF0) >> 4;
                
                pmic.seq1 = seq;
        });
        // Sequencer Register 2 (SEQ2)
        i2c.read(0, 0x24, 0x1A, function(data){
                var num = parseInt(data, 16);
                var seq = {};
                
                seq.ldo1seq = (num & 0x0F);
                seq.dc3seq = (num & 0xF0) >> 4;
                
                pmic.seq2 = seq;
        });
        //  Sequencer Register 3 (SEQ3)
        i2c.read(0, 0x24, 0x1B, function(data){
                var num = parseInt(data, 16);
                var seq = {};
                
                seq.ldo3seq = (num & 0x0F);
                seq.ldo2seq = (num & 0xF0) >> 4;
                
                pmic.seq3 = seq;
        });
        // Sequencer Register 4 (SEQ4)
        i2c.read(0, 0x24, 0x1C, function(data){
                var num = parseInt(data, 16);
                var seq = {};
                
                seq.ldo4seq = (num & 0xF0) >> 4;
                
                pmic.seq4 = seq;
        });
        //  Sequencer Register 5 (SEQ5)
        i2c.read(0, 0x24, 0x1D, function(data){
                var num = parseInt(data, 16);
                var seq = {};
                
                seq.dly4 = (num & 0x03);
                seq.dly3 = (num & 0x0C) >> 2;
                seq.dly2 = (num & 0x30) >> 4;
                seq.dly1 = (num & 0xC0) >> 6;
                
                pmic.seq5 = seq;        
        });
        //  Sequencer Register 6 (SEQ6)
        i2c.read(0, 0x24, 0x1E, function(data){
                var num = parseInt(data, 16);
                var seq = {};
                
                num & (1 << 0) ? seq.instdwn = 1 : seq.instdwn = 0;
                num & (1 << 1) ? seq.seqdwn = 1 : seq.seqdwn =0;
                num & (1 << 2) ? seq.sequp = 1 : seq.sequp = 0;
                
                seq.dly6 = (num & 0x30) >> 4;
                seq.dly5 = (num & 0xC0) >> 6;
                
                pmic.seq6 = seq;
        });
        
        setTimeout(function(){
                var fs = require('fs');
                var path ="./pmic.json";
                fs.writeFile(path, JSON.stringify(pmic, null, 4), function (error) {
                        if (error) {throw error;}
                });
        }, 1000);
   
})();