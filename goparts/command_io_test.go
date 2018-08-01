// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"fmt"
	"os"
	"strings"
	"testing"
	"time"
)

var testSerialCommand *CommandIO

func initializeSerial() {
	var err error
	testSerialCommand, err = OpenSerialCommandIO()
	if err != nil {
		fmt.Println("error: open serial")
	}
}

func initializeBluetooth() {
	var err error
	testSerialCommand, err = OpenBluetoothCommandIO()
	if err != nil {
		fmt.Println("error: open bluetooth")
	}
}

func finalize() {
	testSerialCommand.Close()
}

func TestInvalidCommand(t *testing.T) {
	result, body, err := testSerialCommand.Execute("unvalid_command", time.Second)
	if err != nil {
		t.Fatalf("info Execute() returns err: %v", err)
	}
	if result != 2 {
		t.Fatalf("info Execute() result(expected 2, actual %d)", result)
	}
	fmt.Println(body)
}

func testNormalCommand(t *testing.T, command string) {
	result, body, err := testSerialCommand.Execute(command, time.Second)
	if err != nil {
		t.Fatalf("%s Execute() returns err: %v", command, err)
	}
	if result != 0 {
		t.Fatalf("%s Execute() result(expected 0, actual %d)", command, result)
	}
	fmt.Println(body)
}

func testLongTimeCommand(t *testing.T, command string, timeout time.Duration) {
	result, body, err := testSerialCommand.Execute(command, timeout)
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
	result, body, err := testSerialCommand.Execute("get_distance", time.Second)
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

// Example:
//   env TEST_MODES=serial go test
//   env TEST_MODES=bluetooth go test
//   env TEST_MODES=serial:bluetooth go test
func TestMain(m *testing.M) {
	if len(os.Getenv("TEST_MODES")) == 0 {
		fmt.Printf("skip test bacause of no TEST_MODES.\n")
		fmt.Printf("\n")
		fmt.Printf("Example:\n")
		fmt.Printf("  env TEST_MODES=serial go test\n")
		fmt.Printf("  env TEST_MODES=bluetooth go test\n")
		fmt.Printf("  env TEST_MODES=serial:bluetooth go test\n")
		os.Exit(0)
	}
	test_modes := strings.Split(os.Getenv("TEST_MODES"), ":")
	fmt.Printf("TEST_MODES: %v\n", test_modes)
	for _, mode := range test_modes {
		switch mode {
		case "bluetooth":
			initializeBluetooth()
		case "serial":
			initializeSerial()
		default:
			fmt.Printf("unknown TEST_MODES: %v\n", mode)
			os.Exit(1)
		}
		ret := m.Run()
		finalize()
		if ret != 0 {
			os.Exit(ret)
		}
	}
	os.Exit(0)
}
