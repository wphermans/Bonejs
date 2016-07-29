##devmem
A simple wrapper for the pwm sysfs file system.

######Implementation file: pwm.js

**Functions:**

<dl>
	<dt>set_period(pwmchip, pwm, period)</dt>
	<dd>Sets the `period` of the related `pwmchip`, `pwm`. </dd>
	<dt>set_duty_cycle(pwmchip, pwm, duty_cycle)</dt>
	<dd>Sets the `duty_cycle` of the related `pwmchip`, `pwm`.</dd>
    <dt>enable(pwmchip, pwm, enable)</dt>
    <dd>Enables the `pwm` of the specified `pwmchip`.</dd>
    <dt>export_pwm(pwmchip, pwm)</dt>
    <dd>Performs the same fucntion as: echo 'pwm' > /sys/class/pwm/pwmchip/export. Where `pwm` is a valid numerical value.</dd>
    <dt>unexport_pwm(pwmchip, pwm)</dt>
    <dd>Performs the same fucntion as: echo 'pwm' > /sys/class/pwm/pwmchip/unexport. Where `pwm` is a valid numerical value.</dd>

</dl>


____
**Additional information:**

The pwm sysfs file structure may require elevated permissions when used. See: [permissions.md](https://github.com/wphermans/Bonejs/blob/master/documentation/permissions.md) for more information.

**Example:**
https://github.com/wphermans/Bonejs/blob/master/examples/pwm-enable.js
https://github.com/wphermans/Bonejs/blob/master/examples/pwm-example.js