// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package main

import (
	"bufio"
	"io"
	"log"
)

type ReadlineChannel struct {
	C   chan string
	Err chan error
}

func NewReadlineChannel(reader io.Reader, title string) *ReadlineChannel {
	bufreader := bufio.NewReaderSize(reader, 1024)
	cline := make(chan string)
	cerr := make(chan error)
	go func() {
		for {
			l, _, err := bufreader.ReadLine()
			s := string(l)
			cline <- string(l)
			if err != nil {
				log.Printf("[%s] read line: %v\n", title, err)
				cerr <- err
				continue
			}
			if len(l) == 0 {
				log.Printf("[%s] read line: length is 0", title)
				continue
			}
			log.Printf("[%s]> %s", title, s)
		}
	}()
	return &ReadlineChannel{C: cline, Err: cerr}
}
