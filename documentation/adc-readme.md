####ADC - adc.js
A simple wrapper for the beaglebone ADC sysfs object. 

**Functions:**

**`read(ch, callback)`** Read from the specified channel `ch`. As this function is asynchronous, a `callback` function must be provided in order to work with the data returned.

____
**Additional information:**

The `ti_am335x_adc` driver module must be loaded in order for this functionality to work. Probably the easiest way to achceive this is by loading a device tree overlay for the ADC.

**Load ADC device tree overlay:**
```
debian@beaglebone:~$ sudo sh -c "echo 'BB-ADC' > /sys/devices/platform/bone_capemgr/slots"
```
**Example:**
https://github.com/wphermans/Bonejs/blob/master/examples/adc-example.js