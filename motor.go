// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package wm4b

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"time"
)

const (
	forwardSpeedSlow   = "61"
	forwardSpeedNormal = "81"
	forwardSpeedHigh   = "101"
	backSpeedSlow      = "62"
	backSpeedNormal    = "82"
	backSpeedHigh      = "102"
)

func getForwardSpeedString(ps httprouter.Params) string {
	switch ps.ByName("speed") {
	case "slow":
		return forwardSpeedSlow
	case "normal":
		return forwardSpeedNormal
	case "high":
		return forwardSpeedHigh
	}
	return forwardSpeedNormal
}

func getBackSpeedString(ps httprouter.Params) string {
	switch ps.ByName("speed") {
	case "slow":
		return backSpeedSlow
	case "normal":
		return backSpeedNormal
	case "high":
		return backSpeedHigh
	}
	return backSpeedNormal
}

// GoForward executes "set_motor" command
func GoForward(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getForwardSpeedString(ps)
	ExecLongtimeCommand(w, "set_motor "+speed, time.Second*20)
}

// Forward executes "drive_motor" command
func Forward(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getForwardSpeedString(ps)
	option := ps.ByName("option")
	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_TIME "+option, time.Second*20)
}

// GoBack executes "set_motor" command
func GoBack(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getBackSpeedString(ps)
	ExecLongtimeCommand(w, "set_motor "+speed, time.Second*20)
}

// Back executes "drive_motor" command
func Back(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getBackSpeedString(ps)
	option := ps.ByName("option")
	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_TIME "+option, time.Second*20)
}

// Stop executes "set_motor" command
func Stop(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_motor 0")
}

// Drive executes "drive_motor" command
func Drive(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getForwardSpeedString(ps)
	distance := ps.ByName("distance")

	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_NEAR "+distance, time.Second*20)
}
