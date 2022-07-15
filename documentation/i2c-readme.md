## I2C
A simple wrapper for the cmd line utility `i2cget`. 

###### Implementation file: i2c.js

**Functions:**

<dl>
	<dt>read(dev, addr, subaddr, callback)</dt>
	<dd>Reads from the specified <em>dev</em> bus where <em>addr</em> is the chip address, and <em>subaddr</em> is the data address. This function is asynchronous in nature, so a <em>callback</em> function must be provided to receive data as it becomes ready.</dd>
</dl>


____
**Additional information:**

The Debian package i2c-tools must be installed to use this functionality. Permissions for */usr/sbin/i2cget*, and */dev/i2c-[0-2]* may also need to be modified if one wishes to use this functionality as a regular user. See: [permissions.md](https://github.com/wphermans/Bonejs/blob/master/documentation/permissions.md) for more information.

**Example:**
https://github.com/wphermans/Bonejs/blob/master/examples/pmic-example.js
