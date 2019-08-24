// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package goparts

import (
	"errors"
	"fmt"
	"os"
	"sync"
	"testing"
	"time"
)

var testSerialCommand *CommandIO
var testOnce sync.Once

func initialize() error {
	mode := os.Getenv("TEST_IO_MODE")
	if len(mode) == 0 {
		fmt.Printf("skip test bacause of no TEST_IO_MODE.\n")
		fmt.Printf("\n")
		fmt.Printf("Example:\n")
		fmt.Printf("  env TEST_IO_MODE=serial go test\n")
		fmt.Printf("  env TEST_IO_MODE=bluetooth go test\n")
		return errors.New("no TEST_IO_MODE")
	}
	switch mode {
	case "bluetooth":
		return initializeBluetooth()
	case "serial":
		return initializeSerial()
	default:
		message := "unknown TEST_IO_MODE: " + mode
		return errors.New(message)
	}
}

func initializeSerial() error {
	var err error
	testSerialCommand, err = OpenSerialCommandIO("/dev/ttyUSB0")
	if err != nil {
		fmt.Println("error: open serial")
	}
	return err
}

func initializeBluetooth() error {
	var err error
	testSerialCommand, err = OpenBluetoothCommandIO("/dev/rfcomm0")
	if err != nil {
		fmt.Println("error: open bluetooth")
	}
	return err
}

func finalize() {
	testSerialCommand.Close()
}

func TestInvalidCommand(t *testing.T) {
	if initialize() != nil {
		return
	}

	result, body, err := testSerialCommand.Execute("unvalid_command", time.Second)
	if err != nil {
		t.Fatalf("info Execute() returns err: %v", err)
	}
	if result != 2 {
		t.Fatalf("info Execute() result(expected 2, actual %d)", result)
	}
	fmt.Println(body)

	finalize()
}

func testNormalCommand(t *testing.T, command string) {
	if initialize() != nil {
		return
	}

	result, body, err := testSerialCommand.Execute(command, time.Second)
	if err != nil {
		t.Fatalf("%s Execute() returns err: %v", command, err)
	}
	if result != 0 {
		t.Fatalf("%s Execute() result(expected 0, actual %d)", command, result)
	}
	fmt.Println(body)

	finalize()
}

func testLongTimeCommand(t *testing.T, command string, timeout time.Duration) {
	if initialize() != nil {
		return
	}

	result, body, err := testSerialCommand.Execute(command, timeout)
	if err != nil {
		t.Fatalf("%s Execute() returns err: %v", command, err)
	}
	if result != 0 {
		t.Fatalf("%s Execute() result(expected 0, actual %d)", command, result)
	}
	fmt.Println(body)

	finalize()
}

// Timeout Test:
//   $ env TEST_IO_MODE=bluetooth go test -timeout 60m -count 10000 -run "TestInfoCommand"
//   PASS
//   ok      _/home/pi/workspace/wild_mini_4wd_blocklygo/goparts     1787.138s
//
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
	if initialize() != nil {
		return
	}

	result, body, err := testSerialCommand.Execute("get_distance", time.Second)
	if err != nil {
		t.Fatalf("get_distance Execute() returns err: %v", err)
	}
	fmt.Printf("distance = %d\n", result)
	fmt.Println(body)

	finalize()
}

func TestDriveMotorCommand(t *testing.T) {
	testLongTimeCommand(t, "drive_motor 61 UNTIL_TIME 2", time.Second*5)
	testLongTimeCommand(t, "drive_motor 62 UNTIL_TIME 2", time.Second*5)
	testLongTimeCommand(t, "drive_motor 61 UNTIL_NEAR", time.Second*30)
	testLongTimeCommand(t, "drive_motor 62 UNTIL_NEAR", time.Second*30)
	testLongTimeCommand(t, "drive_motor 61 UNTIL_BUMPER", time.Second*30)
	testLongTimeCommand(t, "drive_motor 62 UNTIL_BUMPER", time.Second*30)
}
