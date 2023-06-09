package main

import (
	"log"
	"net/http"

	"github.com/21hack02win/nascalay-v2-backend/internal/handler"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	mux := http.NewServeMux()
	handler.SetupRoutes(mux)

	if err := http.ListenAndServe(":8080", h2c.NewHandler(mux, &http2.Server{})); err != nil {
		log.Fatal(err)
	}
}
