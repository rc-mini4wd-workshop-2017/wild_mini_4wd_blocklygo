// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"time"
)

const (
	forward_speed_slow   = "41"
	forward_speed_normal = "61"
	forward_speed_high   = "81"
	back_speed_slow      = "42"
	back_speed_normal    = "62"
	back_speed_high      = "82"
)

func Forward(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")
	speed := forward_speed_normal
	switch command {
	case "slow":
		speed = forward_speed_slow
	case "normal":
		speed = forward_speed_normal
	case "high":
		speed = forward_speed_high
	}
	ExecCommand(w, "set_motor "+speed)
}

func Back(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")
	speed := back_speed_normal
	switch command {
	case "slow":
		speed = back_speed_slow
	case "normal":
		speed = back_speed_normal
	case "high":
		speed = back_speed_high
	}
	ExecCommand(w, "set_motor "+speed)
}

func Stop(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_motor 0")
}

func Drive(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")
	option := ps.ByName("option")

	// speed setting
	speed := forward_speed_normal
	switch command {
	case "slow":
		speed = forward_speed_slow
	case "normal":
		speed = forward_speed_normal
	case "high":
		speed = forward_speed_high
	}
	// stop setting
	stop := ""
	switch option {
	case "UNTIL_NEAR":
		stop = "UNTIL_NEAR"
	case "UNTIL_BUMPER":
		stop = "UNTIL_BUMPER"
	}
	ExecLongtimeCommand(w, "drive_motor "+speed+" "+stop, time.Second*20)
}
