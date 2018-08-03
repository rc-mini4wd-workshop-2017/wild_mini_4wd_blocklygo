// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"errors"
	"fmt"
	"net/http"
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
	serialCommand, err := OpenSerialCommandIO()
	if err == nil {
		defer serialCommand.Close()
		fmt.Println("success: open serial")
		result, body, err := serialCommand.Execute(command, timeout)
		fmt.Fprintf(w, "%s", body)
		if err != nil {
			fmt.Fprintf(w, "error: %s\n", err)
		}
		return result, body, err
	}

	serialCommand, err = OpenBluetoothCommandIO()
	if err == nil {
		defer serialCommand.Close()
		fmt.Println("success: open bluetooth")
		result, body, err := serialCommand.Execute(command, timeout)
		fmt.Fprintf(w, "%s", body)
		if err != nil {
			fmt.Fprintf(w, "error: %s\n", err)
		}
		return result, body, err
	}

	fmt.Println("error: open command io")
	err = errors.New("open command io")
	fmt.Fprintf(w, "result: -1\n")
	fmt.Fprintf(w, "error: %s\n", err)
	return 0, "", err
}
