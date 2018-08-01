// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"time"
	"fmt"
)

func Front(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	result, body, err := ExecCommand(w, "drive_steering FORWARD")
	if ((err != nil) && (result != 0)) {
		time.Sleep(time.Second)
	}
	fmt.Fprintf(w, "%s", body)
}

func Left(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	result, body, err := ExecCommand(w, "drive_steering LEFT")
	if ((err != nil) && (result != 0)) {
		time.Sleep(time.Second)
	}
	fmt.Fprintf(w, "%s", body)
}

func Right(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	result, body, err := ExecCommand(w, "drive_steering RIGHT")
	if ((err != nil) && (result != 0)) {
		time.Sleep(time.Second)
	}
	fmt.Fprintf(w, "%s", body)
}

func Servo(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")

	result, body, err := ExecCommand(w, "set_servo " + command)
	if ((err != nil) && (result != 0)) {
		time.Sleep(time.Second)
	}
	fmt.Fprintf(w, "%s", body)
}