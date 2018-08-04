// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package main

import (
	"./goparts"
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
)

func main() {
	goparts.Initialize()

	router := httprouter.New()
	router.Handler("GET", "/",
		&templateHandler{filename: "index.html", Lang: "ja"})
	router.Handler("GET", "/index.html",
		&templateHandler{filename: "index.html", Lang: "ja"})
	router.Handler("GET", "/index_en.html",
		&templateHandler{filename: "index.html", Lang: "en"})
	router.ServeFiles("/static/*filepath", http.Dir("static"))
	router.PUT("/v1/info", goparts.Info)
	router.PUT("/v1/forward/:command/:option", goparts.Forward)
	router.PUT("/v1/back/:command/:option", goparts.Back)
	router.PUT("/v1/stop", goparts.Stop)
	router.PUT("/v1/drive/:command/:distance", goparts.Drive)
	router.PUT("/v1/turnfront", goparts.Front)
	router.PUT("/v1/turnleft", goparts.Left)
	router.PUT("/v1/turnright", goparts.Right)
	router.PUT("/v1/servo/:command", goparts.Servo)
	log.Print("Server Start..")
	port := ":8080"
	log.Fatalf("listen serve error[%s]: %v\n", port, http.ListenAndServe(port, router))
	log.Print("Server Finished.")

	goparts.Finalize()
}
