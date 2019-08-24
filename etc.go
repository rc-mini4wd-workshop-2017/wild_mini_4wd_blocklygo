// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package wm4b

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

// Info executes "info" command
func Info(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "info")
}

// LedOn executes "set_digtal 26 HIGH" command
func LedOn(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_digtal 26 HIGH")
}

// LedOff executes "set_digtal 26 Low" command
func LedOff(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_digtal 26 LOW")
}

// Log executes "log" command
func Log(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "log")
}

// IrGun executes "fire_led_gun 15" command
func IrGun(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "fire_led_gun 15")
}

// Distance executes "get_distance" command
func Distance(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "get_distance")
}
