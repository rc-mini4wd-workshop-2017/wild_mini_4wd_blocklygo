// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package main

import (
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
	"z/goparts"
)

func main() {
	goparts.Initialize()

	router := httprouter.New()
	router.Handler("GET", "/",
		&templateHandler{filename: "index.html", Lang: "ja", Mode: "normal"})
	router.Handler("GET", "/index.html",
		&templateHandler{filename: "index.html", Lang: "ja", Mode: "normal"})
	router.Handler("GET", "/index_en.html",
		&templateHandler{filename: "index.html", Lang: "en", Mode: "normal"})
	router.Handler("GET", "/index_hard.html",
		&templateHandler{filename: "index.html", Lang: "ja", Mode: "hard"})
	router.Handler("GET", "/index_en_hard.html",
		&templateHandler{filename: "index.html", Lang: "en", Mode: "hard"})
	router.ServeFiles("/static/*filepath", http.Dir("static"))
	router.PUT("/v1/info", goparts.Info)
	router.PUT("/v1/go_forward/:speed", goparts.GoForward)
	router.PUT("/v1/forward/:speed/:option", goparts.Forward)
	router.PUT("/v1/go_back/:speed", goparts.GoBack)
	router.PUT("/v1/back/:speed/:option", goparts.Back)
	router.PUT("/v1/stop", goparts.Stop)
	router.PUT("/v1/drive/:speed/:distance", goparts.Drive)
	router.PUT("/v1/turnfront", goparts.Front)
	router.PUT("/v1/turnleft", goparts.Left)
	router.PUT("/v1/turnright", goparts.Right)
	router.PUT("/v1/servo/:command", goparts.Servo)
	router.PUT("/v1/irgun", goparts.IrGun)
	router.PUT("/v1/distance", goparts.Distance)
	log.Print("Server Start..")
	port := ":8080"
	log.Fatalf("listen serve error[%s]: %v\n", port, http.ListenAndServe(port, router))
	log.Print("Server Finished.")

	goparts.Finalize()
}
