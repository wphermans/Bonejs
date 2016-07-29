##devmem
A simple wrapper for the devmem cmd line utility, which is compiled from the source file devmem2.c

######Implementation file: devmem.js

**Functions:**

<dl>
	<dt>write(addr, value)</dt>
	<dd>Write `value` to memory `addr` location.</dd>
	<dt>read(addr, callback)</dt>
	<dd>Read from the memory `addr` location. As this function is asynchronous, a `callback` function must be provided.</dd>
</dl>


____
**Additional information:**

This cmdline tool is very powerful, and care should be used when writting to any memory location using /dev/mem. 
Consider this fair warning. devmem2.c can be found online with a simple internet search. Then it is a simple matter of:

```
    $ gcc devmem.c -o devmem
    $ sudo cp devmem /usr/bin/
    $ sudo chmod +x /usr/bin/devmem 
```
This cmd line utility may require elevated permissions when used. See: [permissions.md](https://github.com/wphermans/Bonejs/blob/master/documentation/permissions.md) for more information.

**Example:**
https://github.com/wphermans/Bonejs/blob/master/examples/devmem-example.js