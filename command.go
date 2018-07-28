// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package main

import (
	"github.com/tarm/serial"
	"log"
	"regexp"
	"strconv"
	"time"
)

type Command struct {
	port *serial.Port
}

// Open bluetooth command
func OpenBluetoothCommand() (*Command, error) {
	c := &serial.Config{Name: "/dev/rfcomm0", Baud: 115200}
	port, err := serial.OpenPort(c)
	if err != nil {
		log.Printf("bluetooth: %v\n", err)
		return nil, err
	}
	log.Printf("bluetooth: open\n")
	return &Command{port}, nil
}

// Open serial command
func OpenSerialCommand() (*Command, error) {
	c := &serial.Config{Name: "/dev/ttyUSB0", Baud: 115200}
	port, err := serial.OpenPort(c)
	if err != nil {
		log.Printf("serial: %v\n", err)
		return nil, err
	}
	log.Printf("serial: open\n")
	return &Command{port}, nil
}

// Close command
func (c *Command) Close() (err error) {
	return c.port.Close()
}

// Execute command
//
// command: info, log, etc...
// result:  0, 1, etc...
// body:    command message
func (c *Command) Execute(command string) (result int, body string, err error) {
	_, err = c.port.Write([]byte(command + "\n"))
	if err != nil {
		log.Printf("command: %v", err)
		return 0, body, err
	}

	buf := make([]byte, 128)
	r := regexp.MustCompile("result: (.*)\n")
	for {
		time.Sleep(time.Millisecond * 20)

		var n int
		n, err = c.port.Read(buf)
		if err != nil {
			log.Printf("command: %v", err)
			return 0, body, err
		}
		body = body + string(buf[:n])

		match := r.FindStringSubmatch(body)
		if len(match) != 0 {
			log.Print(body)
			result, err = strconv.Atoi(match[1])
			return
		}
	}
}
