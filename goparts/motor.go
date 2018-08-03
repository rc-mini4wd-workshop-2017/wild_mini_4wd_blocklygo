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
	forward_speed_slow   = "61"
	forward_speed_normal = "81"
	forward_speed_high   = "101"
	back_speed_slow      = "62"
	back_speed_normal    = "82"
	back_speed_high      = "102"
)

func Forward(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")
	option := ps.ByName("option")
	speed := forward_speed_normal
	switch command {
	case "slow":
		speed = forward_speed_slow
	case "normal":
		speed = forward_speed_normal
	case "high":
		speed = forward_speed_high
	}
	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_TIME "+option, time.Second*20)
}

func Back(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")
	option := ps.ByName("option")
	speed := back_speed_normal
	switch command {
	case "slow":
		speed = back_speed_slow
	case "normal":
		speed = back_speed_normal
	case "high":
		speed = back_speed_high
	}
	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_TIME "+option, time.Second*20)

}

func Stop(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_motor 0")
}

func Drive(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	command := ps.ByName("command")
	distance := ps.ByName("distance")

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
	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_NEAR "+distance, time.Second*20)
}
