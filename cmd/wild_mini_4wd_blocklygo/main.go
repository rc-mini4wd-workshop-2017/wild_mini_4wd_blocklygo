// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package main

import (
	"github.com/julienschmidt/httprouter"
	"log"
	"net/http"
	"sync"
	"text/template"
	"wm4b"
)

type templateHandler struct {
	once     sync.Once
	filename string
	Lang     string
	Mode     string
	templ    *template.Template
}

func (t *templateHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	t.once.Do(func() {
		t.templ = template.Must(template.ParseFiles(t.filename))
	})
	t.templ.Execute(w, t)
}

func main() {
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
	router.PUT("/v1/info", wm4b.Info)
	router.PUT("/v1/go_forward/:speed", wm4b.GoForward)
	router.PUT("/v1/forward/:speed/:option", wm4b.Forward)
	router.PUT("/v1/go_back/:speed", wm4b.GoBack)
	router.PUT("/v1/back/:speed/:option", wm4b.Back)
	router.PUT("/v1/stop", wm4b.Stop)
	router.PUT("/v1/drive/:speed/:distance", wm4b.Drive)
	router.PUT("/v1/turnfront", wm4b.Front)
	router.PUT("/v1/turnleft", wm4b.Left)
	router.PUT("/v1/turnright", wm4b.Right)
	router.PUT("/v1/servo/:command", wm4b.Servo)
	router.PUT("/v1/irgun", wm4b.IrGun)
	router.PUT("/v1/distance", wm4b.Distance)
	port := ":8080"
	log.Printf("Server Start.. http://localhost%s", port)
	log.Fatalf("listen serve error[%s]: %v\n", port, http.ListenAndServe(port, router))
	log.Print("Server Finished.")
}
