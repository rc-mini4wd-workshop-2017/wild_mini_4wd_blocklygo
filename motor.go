// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package wm4b

import (
	"fmt"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"strconv"
	"time"
)

func getForwardSpeedString(ps httprouter.Params) string {
	config, err := ReadConfig("config.json")
	if err != nil {
		fmt.Println("error: open config.json")
		return ""
	}

	speed := config.WebapiForwardNormalSpeed
	switch ps.ByName("speed") {
	case "slow":
		speed = config.WebapiForwardSlowSpeed
	case "normal":
		speed = config.WebapiForwardNormalSpeed
	case "high":
		speed = config.WebapiForwardHighSpeed
	}
	return strconv.Itoa(speed)
}

func getBackSpeedString(ps httprouter.Params) string {
	config, err := ReadConfig("config.json")
	if err != nil {
		fmt.Println("error: open config.json")
		return ""
	}

	speed := config.WebapiBackNormalSpeed
	switch ps.ByName("speed") {
	case "slow":
		speed = config.WebapiBackSlowSpeed
	case "normal":
		speed = config.WebapiBackNormalSpeed
	case "high":
		speed = config.WebapiBackHighSpeed
	}
	return strconv.Itoa(speed)
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
