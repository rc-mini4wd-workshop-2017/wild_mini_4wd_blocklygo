// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func Front(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "drive_steering FORWARD")
}

func Left(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "drive_steering LEFT")
}

func Right(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "drive_steering RIGHT")
}

func Servo(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")

	ExecCommand(w, "set_servo "+command)
}
