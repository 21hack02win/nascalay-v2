package main

import (
	"log"
	"net/http"

	"github.com/21hack02win/nascalay-v2-backend/internal/handler"
	"github.com/21hack02win/nascalay-v2-backend/pkg/bufgen/api/proto/v2/protov2connect"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	roomHandler := handler.NewRoomHandler()
	mux := http.NewServeMux()
	path, handler := protov2connect.NewRoomServiceHandler(roomHandler)
	mux.Handle(path, handler)

	if err := http.ListenAndServe(":8080", h2c.NewHandler(mux, &http2.Server{})); err != nil {
		log.Fatal(err)
	}
}
