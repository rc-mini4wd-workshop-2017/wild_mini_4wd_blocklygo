// Copyright 2019 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package wm4b

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
)

// Config for json config
type Config struct {
	WebapiForwardSlowSpeed   int    `json:"webapi_forward_slow_speed"`
	WebapiForwardNormalSpeed int    `json:"webapi_forward_normal_speed"`
	WebapiForwardHighSpeed   int    `json:"webapi_forward_high_speed"`
	WebapiBackSlowSpeed      int    `json:"webapi_back_slow_speed"`
	WebapiBackNormalSpeed    int    `json:"webapi_back_normal_speed"`
	WebapiBackHighSpeed      int    `json:"webapi_back_high_speed"`
	WebapiRotationAngle      int    `json:"webapi_rotation_angle"`
	WebapiRightAngle         int    `json:"webapi_right_angle"`
	WebapiLeftAngle          int    `json:"webapi_left_angle"`
	Bluetooth                string `json:"bluetooth"`
	Serial                   string `json:"serial"`
}

func openFile(filename string) *os.File {
	fp, err := os.OpenFile(filename, os.O_RDONLY, 0644)
	if err != nil {
		log.Fatalf("open file error(%s): %v\n", filename, err)
	}
	return fp
}

func readAll(fp *os.File) []byte {
	bs, err := ioutil.ReadAll(fp)
	if err != nil {
		log.Fatalf("read error: %v\n", err)
	}
	return bs
}

// ReadConfig read a config file
func ReadConfig(filepath string) (*Config, error) {
	file := openFile(filepath)
	blob := readAll(file)
	var config Config
	err := json.Unmarshal(blob, &config)
	if err != nil {
		log.Fatalf("unmarshal error(%s): %v\n", filepath, err)
		return nil, err
	}
	return &config, nil
}
