// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package wm4b

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

// Front executes "drive_steering FORWARD" command
func Front(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "drive_steering FORWARD")
}

// Left executes "drive_steering LEFT" command
func Left(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "drive_steering LEFT")
}

// Right executes "drive_steering RIGHT" command
func Right(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "drive_steering RIGHT")
}

// Servo executes "set_servo" command
func Servo(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")

	ExecCommand(w, "set_servo "+command)
}
