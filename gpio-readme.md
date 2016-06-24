####GPIO
#####Implementation file - gpio.js

#####<pre>read(pin, file)</pre>
>Read from a specific `file` in relation to *the* specified GPIO `pin`. Readable files include, but are not limited to: 'active_low', 'direction', 'edge', 'uevent', and 'value'. 

	write(pin, file, value) 
is used to write `value` to a specific `file` in relation to *the* specified GPIO `pin`. Common files to write to would include 'direction', 'edge', and 'value'.

	export_pin(pin) 
Exports a `pin` exactly as if echoing a numerical value to */sys/class/gpio/export*.

	unexport_pin(pin) 
Unexports a `pin` exactly as if echoing a numerical value to */sys/class/gpio/unexport*
