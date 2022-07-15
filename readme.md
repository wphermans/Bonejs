## What is it ?
Bonejs is a very simple wrapper of the Beaglebone's sysfs entries for some am335x
hardware peripherals.  As well as perhaps wrapping *some* Linux tools
( executables ) when necessary. With the idea of keeping things as minimal, simple,
and bloat-free as possible - Yet, hopefully still understandable, functional, and
useful. Currently, this project is still a work in progress.

## Why?
For many reasons, but primarily to keep things simple, and minimal.

## Compatibility
Currently, tested for the *BeagleBoard.org Debian Image 2016-05-01* console image. Kernel used was *4.4.8-ti-r22*. However this code *should* work for any beaglebord.org debian images, running a 4.x kernel. By chance if older, or future kernels have different pathing for the various sysfs directories, and files. The code base for this project is very small, and as such would be easily fixed. One of the benefits of keeping things simple, and minimal.

Versions of node, and npm are listed below. However, the intention of this project is really meant to do without NPM as much as possible. At least for these source files. They can simply be a dropped into a project directory, and required to work. As far as Nodejs versioning requirements. There are none that I am aware of. Although there is usage of the Nodejs FileSystem object (fs), and perhaps some functions used require specific versions of node ? Feel free to check, and / or let me know.

node -v: v4.2.6

npm -v: 3.9.0

## Documentation

<dl>
	<dt>ADC</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/adc-readme.md">adc-readme.md</a></dd>
	<dt>config-pin</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/config-pin-readme.md">config-pin-readme.md</a></dd>
	<dt>devmem</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/devmem-readme.md">devmem-readme.md</a></dd>
	<dt>GPIO</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/gpio-readme.md">gpio-readme.md</a></dd>
	<dt>I2C</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/i2c-readme.md">i2c-readme.md</a></dd>
	<dt>Permissions</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/permissions.md">permissions.md</a></dd>
	<dt>pwm</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/pwm-readme.md">pwm-readme.md</a></dd>
	<dt>Serial</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/serial-readme.md">serial-readme.md</a></dd>
	<dt>USR LED</dt>
	<dd><a href="https://github.com/wphermans/Bonejs/blob/master/documentation/usr-led-readme.md">usr-led-readme.md</a></dd>
</dl>

#### Future code
As of this moment in time, the only other feature that I personally plan on adding into this code is PWM. However for that to happen I need a hardware jig in order to test the code properly. Ideally, I would have preferred a test jig for the ADC as well, but at first glance reading floating ADC values seems to work as a "decent" indication as to whether it works or not.

I have given some thought to adding wrapper code for various other cmd line tools. Perhaps it would be neet to add tools such as 'uptime', 'free', or anything else of this nature. The really very cool thing here, is that it has been demonstrated already in this project. For the I2C functionality. So repeating the process should be very trivial. Even for the inexperienced developer.

Passed the above mentioned intentions. I'm not sure adding SPI would make sense for Nodejs. Nodejs does require a lot of CPU in order to achieve similar results in other languages such as C, or C++. The AM335x's PRU's also make little sense considering they are meant as a high speed peripheral. Perhaps I will rethink in the future.
