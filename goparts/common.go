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
	serialCommand, err := OpenBluetoothCommandIO()
	defer serialCommand.Close()

	if err != nil {
		fmt.Println("error: open bluetooth")
		return 0, "can not open bluetooth", errors.New("open bluetooth")
	}
	fmt.Println("initialize success")
	return serialCommand.Execute(command, 3*time.Second)
}
