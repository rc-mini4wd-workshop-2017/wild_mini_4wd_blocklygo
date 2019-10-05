// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package wm4b

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"strconv"
)

// Front executes "drive_steering FORWARD" command
func Front(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	config, err := ReadConfig("config.json")
	if err != nil {
		fmt.Println("error: open config.json")
		return
	}

	angle := 90 + config.WebapiRotationAngle
	ExecCommand(w, "set_servo "+strconv.Itoa(angle))
}

// Left executes "drive_steering LEFT" command
func Left(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	config, err := ReadConfig("config.json")
	if err != nil {
		fmt.Println("error: open config.json")
	}

	angle := config.WebapiRotationAngle + config.WebapiRightAngle
	ExecCommand(w, "set_servo "+strconv.Itoa(angle))
}

// Right executes "drive_steering RIGHT" command
func Right(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	config, err := ReadConfig("config.json")
	if err != nil {
		fmt.Println("error: open config.json")
	}

	angle := config.WebapiRotationAngle + config.WebapiLeftAngle
	ExecCommand(w, "set_servo "+strconv.Itoa(angle))
}

// Servo executes "set_servo" command
func Servo(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")
	angle, err := strconv.Atoi(command)
	if err != nil {
		fmt.Println("error: command must be integer")
	}

	config, err := ReadConfig("config.json")
	if err != nil {
		fmt.Println("error: open config.json")
	}

	ExecCommand(w, "set_servo "+strconv.Itoa(config.WebapiRotationAngle+angle))
}
