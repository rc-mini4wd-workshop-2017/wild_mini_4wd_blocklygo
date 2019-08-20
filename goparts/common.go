// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"errors"
	"fmt"
	"net/http"
	"sync"
	"time"
)

func Initialize() {
}
func Finalize() {
}

func ExecCommand(w http.ResponseWriter, command string) (int, string, error) {
	return ExecLongtimeCommand(w, command, 3*time.Second)
}

func ExecLongtimeCommand(w http.ResponseWriter, command string, timeout time.Duration) (int, string, error) {
	var mutex sync.Mutex
	mutex.Lock()
	defer mutex.Unlock()

	config, err := ReadConfig("config.json")
	if err != nil {
		fmt.Println("error: open command io")
		err = errors.New("open command io")
		fmt.Fprintf(w, "result: -1\n")
		fmt.Fprintf(w, "error: %s\n", err)
		return 0, "", err
	}

	serialCommand, err := OpenSerialCommandIO(config.Serial)
	if err == nil {
		fmt.Println("success: open serial")
		result, body, err := serialCommand.Execute(command, timeout)
		serialCommand.Close()
		fmt.Fprintf(w, "%s", body)
		if err != nil {
			fmt.Fprintf(w, "error: %s\n", err)
		}
		// workaround:
		// A chain of command has errors.(EOF, etc)
		// Wait for serialCommand.Close()
		time.Sleep(time.Millisecond * 100)
		return result, body, err
	}

	serialCommand, err = OpenBluetoothCommandIO(config.Bluetooth)
	if err == nil {
		fmt.Println("success: open bluetooth")
		result, body, err := serialCommand.Execute(command, timeout)
		serialCommand.Close()
		fmt.Fprintf(w, "%s", body)
		if err != nil {
			fmt.Fprintf(w, "error: %s\n", err)
		}
		// workaround:
		// A chain of command has errors.(EOF, etc)
		// Wait for serialCommand.Close()
		time.Sleep(time.Millisecond * 100)
		return result, body, err
	}

	fmt.Println("error: open command io")
	err = errors.New("open command io")
	fmt.Fprintf(w, "result: -1\n")
	fmt.Fprintf(w, "error: %s\n", err)
	return 0, "", err
}
