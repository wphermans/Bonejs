## What is it ?
Bonejs is a very simple wrapper of the Beaglebone's sysfs entries for some am335x
hardware peripherals.  As well as perhaps wrapping *some* Linux tools
( executables ) when necessary. With the idea of keeping things as minimal, simple,
and bloat-free as possible - Yet, hopefully still understandable, functional, and 
useful. Currently, this project is still a work in progress.

## Why?
For many reasons, but primarily to keep things simple, and minimal. 

##Compatibility
Currently, tested for the *BeagleBoard.org Debian Image 2016-05-01* console image. Kernel used was *4.4.8-ti-r22*. However this code *should* work for any beaglebord.org debian images, running a 4.x kernel. By chance if older, or future kernels have different pathing for the various sysfs directories, and files. The code base for this project is very small, and as such would be easily fixed. One of the benefits of keeping things simple, and minimal.

####GPIO - gpio.js 
Do note that directories, and files used with these functions exist in the sysfs */sys/class/gpio* path. As such, any system wide permissions for these directories, and files apply. Futhermore, a `pin` must first be exported using the `export_pin` function, otherwise an error will be thrown. Additionally, many pins must also first be muxed as GPIO(0x7) pins prior to using gpio.js's functionality. This limitation is imposed by the hardware, since many pins are multi peripheral capable.

**`read(pin, file)`** is used to read from a specific `file` in relation to *the* specified GPIO `pin`. Readable files include, but are not limited to: 'active_low', 'direction', 'edge', 'uevent', and 'value'.  

**`write(pin, file, value)`** is used to write `value` to a specific `file` in relation to *the* specified GPIO `pin`. Common files to write to would include 'direction', 'edge', and 'value'. 

**`export_pin(pin)`** Exports a `pin` exactly as if echoing a numerical value to */sys/class/gpio/export*.

**`unexport_pin(pin)`** Unexports a `pin` exactly as if echoing a numerical value to */sys/class/gpio/unexport*

####I2C - i2c.js
A very thin wrapper around the i2c-tools executable *i2cget*. As such, the Debian
package i2c-tools must be installed to use this functionality. Error checking for
read() is nearly non existant, only checking if the /dev/ path exists for the
given dev parameter. So it would be wise to understand the tool i2cget, and how
it is used with the given system. Before using this functionality.

Permissions for */usr/sbin/i2cget*, and */dev/i2c-[0-2]* may also need to be modified if one wishes to use this functionality as a regular user. 

**`read(dev, addr, subaddr, callback)`** Reads from *the* specified `dev` bus where `addr` is the chip address, and `subaddr` is the data address. This function is asynchronous in nature, so a `callback` function must be provided to recieve data as it becomes ready.

####pmic-example.js
An example usage of the i2c.js functionality. Reading from the tps65217 pmic 
device on the i2c-0 bus. This example reads every(except for INT ) register sub 
address, and parses the values out into an object. After which, this object is
then written out to the file *pmic.json*. Values do need additional parsing in
order to make better sense. The datasheet for the TI tps65217 PMIC provides the
required information for these values. Starting on page 41.

Since this file does require i2c.js. Having the i2c-tools package installed is 
also a requirement.

####USR LEDs - user-leds.js
Do note that files used with the write() function exist in the sysfs */sys/class/leds* path. As such, any system wide permissions for these files apply.

**`write(led, file, value)`** Writes a `value` to the specified `file` coresponding to the given `led`. Valid values for `led` are [0-3], and common `file`s written to are 'brightness', and 'trigger'.

####ADC - adc.js
A simple wrapper for the beaglebone ADC sysfs object. Setup for the ADC, such as device tree overlays. Must be done prior to using this functionality. Currently there is no facility in this code to load device tree files, but perhaps in the future this will change.

`read(ch, callback)` Read from the specified channel `ch`. As this function is asyncronous, a `callback` function must be provided in order to work with the data returned.

####Serial - serial-read-example.js serial-write-example.js
These two example files are to demonstrate how simple it is to implement serial reads, and writes without any wrapper code what so ever. using the Nodejs fs object methods createReadStream(), and createWriteStream()

####Serial, and ADC - test.js
This file is simply a demonstration of combining ADC reads, and serial writes into the same code file.

####Future code
As of this moment in time, the only other feature that I personally plan on adding into this code is PWM. However for that to happen I need a hardware jig in order to test the code properly. Ideally, I would have prefered a test jig for the ADC as well, but at first glance reading floating ADC values seems to work as a "decent" indication as to whether it works or not.

Passed the above mentioned intentions. I'm not sure adding SPI would make sense for Nodejs. Nodejs does reaquire a lot of CPU in order to achieve similar results in other languages such as C, or C++. The AM335x's PRU's also make little sense considering they are meant as a high speed peripheral. Perhaps I will rethink in the future. 