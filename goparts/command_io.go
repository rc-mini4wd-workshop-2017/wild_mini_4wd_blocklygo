// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"errors"
	"github.com/tarm/serial"
	"log"
	"regexp"
	"strconv"
	"time"
)

const (
	discard_timeout = time.Millisecond * 10
)

type CommandIO struct {
	port *serial.Port
	line *ReadlineChannel
}

func openCommandIO(device string, name string) (*CommandIO, error) {
	c := &serial.Config{Name: device, Baud: 115200}
	port, err := serial.OpenPort(c)
	if err != nil {
		log.Printf("%s: %v\n", name, err)
		return nil, err
	}
	log.Printf("%s: open\n", name)

	line := NewReadlineChannel(port, name)
	command := &CommandIO{port: port, line: line}
	command.discardReadBuffer()
	return command, nil
}

// Open bluetooth command IO
func OpenBluetoothCommandIO(device string) (*CommandIO, error) {
	return openCommandIO(device, "bluetooth")
}

// Open serial command IO
func OpenSerialCommandIO(device string) (*CommandIO, error) {
	return openCommandIO(device, "serial")
}

func (c *CommandIO) discardReadBuffer() error {
	for {
		select {
		case <-c.line.C:
		case <-c.line.Err:
			return nil
		case <-time.After(discard_timeout):
			return errors.New("Timeout")
		}
	}
}

// Close command IO
func (c *CommandIO) Close() (err error) {
	return c.port.Close()
}

// Execute command IO
//
// Args:
//  - command[in] "info", "log", etc...
//  - result[out] command result(0, 1, etc...)
//  - body[out]   command body
func (c *CommandIO) Execute(command string, timeout time.Duration) (result int, body string, err error) {
	_, err = c.port.Write([]byte(command + "\n"))
	if err != nil {
		log.Printf("command: %v", err)
		return 0, body, err
	}

	r := regexp.MustCompile("result: (.*)\n")
	for {
		time.Sleep(time.Millisecond * 20)

		select {
		case line := <-c.line.C:
			body += line
			body += "\n"
		case err = <-c.line.Err:
			log.Printf("command: %v", err)
			return 0, body, err
		case <-time.After(timeout):
			return result, body, errors.New("Timeout")
		}

		match := r.FindStringSubmatch(body)
		if len(match) != 0 {
			result, err = strconv.Atoi(match[1])
			return
		}
	}
}
