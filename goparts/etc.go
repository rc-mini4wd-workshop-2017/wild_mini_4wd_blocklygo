// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func Info(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "info")
}

func LedOn(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_digtal 26 HIGH")
}

func LedOff(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_digtal 26 LOW")
}

func Log(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "log")
}

func IrGun(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "fire_led_gun 26")
}

func Distance(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "get_distance")
}
