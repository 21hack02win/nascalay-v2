package handler

import "github.com/21hack02win/nascalay-v2/pkg/bufgen/api/proto/v2/protov2connect"

type streamHandler struct {
	protov2connect.UnimplementedStreamServiceHandler
}

func NewStreamHandler() protov2connect.StreamServiceHandler {
	return &streamHandler{}
}
