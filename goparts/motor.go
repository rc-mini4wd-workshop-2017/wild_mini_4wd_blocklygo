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

func getForwardSpeedString(ps httprouter.Params) string {
	switch ps.ByName("speed") {
	case "slow":
		return forward_speed_slow
	case "normal":
		return forward_speed_normal
	case "high":
		return forward_speed_high
	}
	return forward_speed_normal
}

func getBackSpeedString(ps httprouter.Params) string {
	switch ps.ByName("speed") {
	case "slow":
		return back_speed_slow
	case "normal":
		return back_speed_normal
	case "high":
		return back_speed_high
	}
	return back_speed_normal
}

func GoForward(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getForwardSpeedString(ps)
	ExecLongtimeCommand(w, "set_motor "+speed, time.Second*20)
}

func Forward(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getForwardSpeedString(ps)
	option := ps.ByName("option")
	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_TIME "+option, time.Second*20)
}

func GoBack(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getBackSpeedString(ps)
	ExecLongtimeCommand(w, "set_motor "+speed, time.Second*20)
}

func Back(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getBackSpeedString(ps)
	option := ps.ByName("option")
	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_TIME "+option, time.Second*20)
}

func Stop(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ExecCommand(w, "set_motor 0")
}

func Drive(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	speed := getForwardSpeedString(ps)
	distance := ps.ByName("distance")

	ExecLongtimeCommand(w, "drive_motor "+speed+" UNTIL_NEAR "+distance, time.Second*20)
}
