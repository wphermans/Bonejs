####GPIO
#####Implementation file - gpio.js

<dl>
  <dt>read(pin, file)</dt>
  <dd style="font-size: 11px">Read from a specific `file` in relation to *the* specified GPIO `pin`. Readable files include, but are not limited to: 'active_low', 'direction', 'edge', 'uevent', and 'value'.</dd>

  <dt>write(pin, file, value)</dt>
  <dd style="font-size: 11px">is used to write `value` to a specific `file` in relation to *the* specified GPIO `pin`. Common files to write to would include 'direction', 'edge', and 'value'.</dd>
  <dt>export_pin(pin)</dt>
  <dd style="font-size: 11px">Exports a `pin` exactly as if echoing a numerical value to <em>/sys/class/gpio/export</em>.</dd>
  <dt>unexport_pin(pin)</dt>
  <dd style="font-size: 11px">Unexports a `pin` exactly as if echoing a numerical value to <em>/sys/class/gpio/unexport</em></dd>
</dl>
