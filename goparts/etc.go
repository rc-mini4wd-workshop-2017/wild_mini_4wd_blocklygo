// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func Info(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	_, body, _ := ExecCommand(w, "info")
	fmt.Fprintf(w, "%s", body)
}

func LedOn(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	_, body, _ := ExecCommand(w, "set_digtal 26 HIGH")
	fmt.Fprintf(w, "%s", body)
}

func LedOff(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	_, body, _ := ExecCommand(w, "set_digtal 26 LOW")
	fmt.Fprintf(w, "%s", body)
}

func Log(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "log")
}
