// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package main

import (
	"fmt"
	"os"
	"testing"
	"time"
)

var serialCommand *CommandIO

func initialize() {
	var err error
	serialCommand, err = OpenSerialCommandIO()
	if err != nil {
		fmt.Println("error: open serial")
	}
}
func finalize() {
	serialCommand.Close()
}

func TestInvalidCommand(t *testing.T) {
	result, body, err := serialCommand.Execute("unvalid_command", time.Second)
	if err != nil {
		t.Fatalf("info Execute() returns err: %v", err)
	}
	if result != 2 {
		t.Fatalf("info Execute() result(expected 2, actual %d)", result)
	}
	fmt.Println(body)
}

func testNormalCommand(t *testing.T, command string) {
	result, body, err := serialCommand.Execute(command, time.Second)
	if err != nil {
		t.Fatalf("%s Execute() returns err: %v", command, err)
	}
	if result != 0 {
		t.Fatalf("%s Execute() result(expected 0, actual %d)", command, result)
	}
	fmt.Println(body)
}

func testLongTimeCommand(t *testing.T, command string, timeout time.Duration) {
	result, body, err := serialCommand.Execute(command, timeout)
	if err != nil {
		t.Fatalf("%s Execute() returns err: %v", command, err)
	}
	if result != 0 {
		t.Fatalf("%s Execute() result(expected 0, actual %d)", command, result)
	}
	fmt.Println(body)
}

func TestInfoCommand(t *testing.T) {
	testNormalCommand(t, "info")
}

func TestLogCommand(t *testing.T) {
	testNormalCommand(t, "log")
}

func TestSetMotorCommand(t *testing.T) {
	// stop
	testNormalCommand(t, "set_motor 0")
	time.Sleep(time.Second)

	// forward, slow
	testNormalCommand(t, "set_motor 61")
	time.Sleep(time.Second)

	// backward, slow
	testNormalCommand(t, "set_motor 62")
	time.Sleep(time.Second)

	// stop
	testNormalCommand(t, "set_motor 0")
	time.Sleep(time.Second)
}

func TestSetServoCommand(t *testing.T) {
	// forward
	testNormalCommand(t, "set_servo 90")
	time.Sleep(time.Second)

	// left
	testNormalCommand(t, "set_servo 75")
	time.Sleep(time.Second)

	// right
	testNormalCommand(t, "set_servo 105")
	time.Sleep(time.Second)

	// forward
	testNormalCommand(t, "set_servo 90")
	time.Sleep(time.Second)
}

func TestGetDistanceCommand(t *testing.T) {
	result, body, err := serialCommand.Execute("get_distance", time.Second)
	if err != nil {
		t.Fatalf("get_distance Execute() returns err: %v", err)
	}
	fmt.Printf("distance = %d\n", result)
	fmt.Println(body)
}

func TestDriveMotorCommand(t *testing.T) {
	testLongTimeCommand(t, "drive_motor 61", time.Second*3)
	testLongTimeCommand(t, "drive_motor 62", time.Second*3)
	testLongTimeCommand(t, "drive_motor 61 UNTIL_NEAR", time.Second*20)
	testLongTimeCommand(t, "drive_motor 62 UNTIL_NEAR", time.Second*20)
	testLongTimeCommand(t, "drive_motor 61 UNTIL_BUMPER", time.Second*20)
	testLongTimeCommand(t, "drive_motor 62 UNTIL_BUMPER", time.Second*20)
}

func TestMain(m *testing.M) {
	initialize()
	ret := m.Run()
	if ret == 0 {
		finalize()
	}
	os.Exit(ret)
}
