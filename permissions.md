####Permissions
As of this moment there are currently two cmd line utilities being wrapped in this project.
Both require elevated permissions to use - Normally. In order to use these executables as a
regular user with no additional privileges. You can add your regular users to a group, and
then change ownership of the executable to root, and group to your new group.

For example:
```
william@beaglebone:~$ sudo groupadd gpio
william@beaglebone:~$ sudo usermod -aG gpio william
william@beaglebone:~$ sudo chown root:gpio /usr/sbin/i2cget
william@beaglebone:~$ sudo chmod 770 /usr/sbin/i2cget
```
Additionally, the cmd line tool config-pin has been written using sudo for various commands
within the tool. The will present a problem if you wish to use groups as demonstrated above.
However, this can be corrected by removing any occurrences of `'sudo -A'`, (without the quotes),
within the script file. Just replace with an empty string '' .

Other files such as `/dev/i2c-0` ( device files ) will also have to be treated as described above.
As needed.

sysfs entries for use with GPIO pins, and for config-pin functionality also need to
be dealt with. Ideally, I think creating a udev rule is probably the best / easiest way to deal
with these various files, and directories. Below I will include the udev rule that I am currently
using. Feel free to use it as is, or modified.

```
william@beaglebone:~$ sudo nano /etc/udev/rules.d/99-gpio.rules
SUBSYSTEM=="gpio*", PROGRAM="/bin/sh -c 'chown -R root:gpio /sys/class/gpio; chmod -R 770 /sys/class/gpio; chown -R root:gpio /sys/devices/platform/ocp/4????000.gpio/gpio/; chmod -R 770 /sys/devices/platform/ocp/4????000.gpio/gpio/; chown root:gpio /sys/devices/platform/ocp/ocp:??_??_pinmux/state; chmod 770 /sys/devices/platform/ocp/ocp:??_??_pinmux/state'"
```
Please do also keep in mind that this is in no way an exhaustive guide for Linux security, and / or permissions. So please do treat this information appropriately, and educate yourself.