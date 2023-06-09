package handler

import (
	"net/http"

	"github.com/21hack02win/nascalay-v2-backend/pkg/bufgen/api/proto/v2/protov2connect"
)

func SetupRoutes(mux *http.ServeMux) {
	roomHandler := NewRoomHandler()
	path, h := protov2connect.NewRoomServiceHandler(roomHandler)
	mux.Handle(path, h)

	streamHandler := NewStreamHandler()
	path, h = protov2connect.NewStreamServiceHandler(streamHandler)
	mux.Handle(path, h)
}
