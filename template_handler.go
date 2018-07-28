package main

import (
	"net/http"

	"sync"
	"text/template"
)

type templateHandler struct {
	once          sync.Once
	filename      string
	templ         *template.Template
}

func (t *templateHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
//	w.Header().Add("Access-Control-Allow-Origin", "http://localhost:8080")
//	w.Header().Set("Access-Control-Allow-Methods", "*")
//	w.Header().Add("Access-Control-Allow-Headers", "Content-Type")
//	w.Header().Add("Access-Control-Allow-Headers", "Origin")
//	w.Header().Add("Access-Control-Allow-Headers", "X-Requested-With")
//	w.Header().Add("Access-Control-Allow-Headers", "Accept")
//	w.Header().Add("Access-Control-Allow-Headers", "Accept-Language")
//	w.Header().Set("Content-Type", "application/json")

	t.once.Do(func() {
		t.templ = template.Must(template.ParseFiles(t.filename))
	})
	t.templ.Execute(w, t)
}
