// Copyright 2018 Quattro Ace. All rights reserved.
// Use of this source code is governed by a MIT
// license that can be found in the LICENSE file.

package main

import (
	"net/http"
	"sync"
	"text/template"
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
