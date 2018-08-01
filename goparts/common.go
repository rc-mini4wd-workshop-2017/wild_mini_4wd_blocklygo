// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"fmt"
	"time"
	"net/http"
)

var serialCommand *CommandIO

func Initialize() {
	var err error
	serialCommand, err = OpenBluetoothCommandIO()
	if err != nil {
		fmt.Println("error: open serial")
	}
	fmt.Println("initialize success")
}
func Finalize() {
	serialCommand.Close()
}

func ExecCommand(w http.ResponseWriter, command string) (result int, body string, err error){
	result, body, err = serialCommand.Execute(command, 3*time.Second)
	return result, body, err
}
