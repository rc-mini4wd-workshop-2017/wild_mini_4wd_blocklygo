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
	serialCommand, err := OpenSerialCommandIO()
	if err == nil {
		defer serialCommand.Close()
		fmt.Println("success: open serial")
		return serialCommand.Execute(command, 3*time.Second)
	}

	serialCommand, err = OpenBluetoothCommandIO()
	if err == nil {
		defer serialCommand.Close()
		fmt.Println("success: open bluetooth")
		return serialCommand.Execute(command, 3*time.Second)
	}

	fmt.Println("error: open command io")
	return 0, "open command io", errors.New("open command io")
}
