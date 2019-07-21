# Wild MINI4WD blockly go

## How to build

```
$ cd /home/pi/workspace/wild_mini_4wd_blocklygo
$ GO111MODULE=off go build
```

## How to install

```
$ go get github.com/julienschmidt/httprouter
$ cp chromium.desktop ~/.config/autostart/
$ sudo cp wild_mini_4wd_blocklygo.service /etc/systemd/system/
$ sudo systemctl enable wild_mini_4wd_blocklygo.service
$ sudo reboot
```


