##GPIO
A simple wrapper for the beaglebone GPIO sysfs subsystem.
#####Implementation file: gpio.js

<dl>
  <dt>read(pin, file)</dt>
  <dd >Read from a specific <em>file</em> in relation to <em>the</em> specified GPIO <em>pin</em>. Readable files include, but are not limited to: <em>active_low</em>, <em>direction</em>, <em>edge</em>, <em>uevent</em>, and <em>value</em>.</dd>

  <dt>write(pin, file, value)</dt>
  <dd>is used to write <em>value</em> to a specific <em>file</em> in relation to the specified GPIO <em>pin</em>. Common files to write to would include 'direction', 'edge', and 'value'.</dd>
  <dt>export_pin(pin)</dt>
  <dd>Exports a <em>pin</em> exactly as if echoing a numerical value to <em>/sys/class/gpio/export</em>.</dd>
  <dt>unexport_pin(pin)</dt>
  <dd>Unexports a <em>pin</em> exactly as if echoing a numerical value to <em>/sys/class/gpio/unexport</em></dd>
</dl>
