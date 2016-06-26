##config-pin
A simple wrapper for the universal-io cmd line utility `config-pin` See: [universal-io](https://github.com/cdsteinkuehler/beaglebone-universal-io)

######Implementation file: config-pin.js

**Functions:**

<dl>
	<dt>config(pin, value)</dt>
	<dd>Configure `pin` mode mux as `value`.</dd>
	<dt>listModes(pin, callback)</dt>
	<dd>List the valid mode values for the `pin`. As this function is asynchronous, a `callback` function must be provided.</dd>
</dl>


____
**Additional information:**

>`debian@beaglebone:~$ sudo config-pin --help / *For more information on how this tool is used* /`

This cmd line utility may require elevated permissions when used. See: [permissions.md](https://github.com/wphermans/Bonejs/blob/master/documentation/permissions.md) for more information.

**Example:**
https://github.com/wphermans/Bonejs/blob/master/examples/config-pin-example.js