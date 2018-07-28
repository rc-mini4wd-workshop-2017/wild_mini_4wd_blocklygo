package main

import (
	"github.com/tarm/serial"
	"log"
//	"os"
	"regexp"
	"time"
	"github.com/julienschmidt/httprouter"
	"net/http"
	"fmt"
	"html"
)

var serialport *serial.Port

func Info(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	c := &serial.Config{Name: "/dev/rfcomm0", Baud: 115200}
	serialport, err := serial.OpenPort(c)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("%s\n",serialport)

	log.Printf("[Info] accessed from %s\n", r.RequestURI)
	_, err = serialport.Write([]byte("info\n"))
	if err != nil {
		log.Fatal(err)
	}

	buf := make([]byte, 128)
	message := ""
	res, err := regexp.Compile("result: 0\n")
	for {
		time.Sleep(time.Millisecond * 20)

		n, err := serialport.Read(buf)
		if err != nil {
			log.Fatal(err)
			fmt.Fprintf(w, "[Info], %q", html.EscapeString(r.URL.Path))
			return
		}
		message = message + string(buf[:n])

		if res.MatchString(message) {
			log.Print(message)
			fmt.Fprintf(w, "[Info], %q", message)
			return
		}
	}
}

func InfoTest(s *serial.Port)(error){
	log.Print("> info")
	_, err := s.Write([]byte("info\n"))
	if err != nil {
		log.Fatal(err)
	}

	buf := make([]byte, 128)
	message := ""
	r, err := regexp.Compile("result: 0\n")
	for {
		time.Sleep(time.Millisecond * 20)

		n, err := s.Read(buf)
		if err != nil {
			log.Fatal(err)
			return err
		}
		message = message + string(buf[:n])

		if r.MatchString(message) {
			log.Print(message)
			return nil
		}
	}
}

func LedOn(w http.ResponseWriter, r *http.Request, ps httprouter.Params ) {
	log.Printf("[LedOn] accessed from %s\n", r.RequestURI)
	_, err := serialport.Write([]byte("set_digtal 26 HIGH\n"))
	if err != nil {
		log.Fatal(err)
	}

	buf := make([]byte, 128)
	message := ""
	res, err := regexp.Compile("result: 0\n")
	for {
		time.Sleep(time.Millisecond * 20)

		n, err := serialport.Read(buf)
		if err != nil {
			log.Fatal(err)
			fmt.Fprintf(w, "[LedOn], %q", html.EscapeString(r.URL.Path))
			return
		}
		message = message + string(buf[:n])

		if res.MatchString(message) {
			log.Print(message)
			fmt.Fprintf(w, "[LedOn], %q", message)
			return
		}
	}

}

func LedOff(w http.ResponseWriter, r *http.Request, ps httprouter.Params ) {
	log.Printf("[LedOn] accessed from %s\n", r.RequestURI)
	_, err := serialport.Write([]byte("set_digtal 26 LOW\n"))
	if err != nil {
		log.Fatal(err)
	}

	buf := make([]byte, 128)
	message := ""
	res, err := regexp.Compile("result: 0\n")
	for {
		time.Sleep(time.Millisecond * 20)

		n, err := serialport.Read(buf)
		if err != nil {
			log.Fatal(err)
			fmt.Fprintf(w, "[LedOff], %q", html.EscapeString(r.URL.Path))
			return
		}
		message = message + string(buf[:n])

		if res.MatchString(message) {
			log.Print(message)
			fmt.Fprintf(w, "[LedOff], %q", message)
			return
		}
	}

}


func main() {
//	c := &serial.Config{Name: "/dev/rfcomm0", Baud: 115200}
//	serialport, err := serial.OpenPort(c)
//	if err != nil {
//		log.Fatal(err)
//	}
//	log.Printf("%s\n",serialport)

//	err = InfoTest(serialport)
//	if err != nil {
//		os.Exit(1)
//	}
	
	router := httprouter.New()
	router.Handler("GET", "/",
		&templateHandler{filename: "index.html"})
	router.ServeFiles("/static/*filepath", http.Dir("static"))
//	router.PUT("/v1/echo", Echo)
	router.PUT("/v1/info", Info)
	router.PUT("/v1/ledon", LedOn)
	router.PUT("/v1/ledoff", LedOff)
	log.Print("Server Start..")
	port :=":8080"
	log.Fatalf("listen serve error[%s]: %v\n", port, http.ListenAndServe(port, router))
	log.Print("Server Finished.")

}