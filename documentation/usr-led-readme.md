## USR LED
A simple wrapper for the beaglebones USR LED sysfs subsystem. 

###### Implementation file: usr-led.js

**Functions:**

<dl>
	<dt>write(led, file, value)</dt>
	<dd>Writes a <em>value</em> to the specified <em>file</em> corresponding to the given <em>led</em>. Valid values for <em>led</em> are [0-3], and common <em>file</em>s written to are 'brightness', and 'trigger'.
	</dd>
</dl>


____
**Additional information:**

Do note that files used with the write() function exist in the sysfs */sys/class/leds* path. As such, any system wide permissions for these files apply. See: [permissions.md](https://github.com/wphermans/Bonejs/blob/master/documentation/permissions.md) for more information.

**Example:**
https://github.com/wphermans/Bonejs/blob/master/examples/led-example.js
