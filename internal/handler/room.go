package handler

import (
	"context"

	protov2 "github.com/21hack02win/nascalay-v2/pkg/bufgen/api/proto/v2"
	"github.com/21hack02win/nascalay-v2/pkg/bufgen/api/proto/v2/protov2connect"
	"github.com/bufbuild/connect-go"
)

type roomHandler struct{}

func NewRoomHandler() protov2connect.RoomServiceHandler {
	return &roomHandler{}
}

type roomServiceCreateRequest = connect.Request[protov2.RoomServiceCreateRequest]
type roomServiceCreateResponse = connect.Response[protov2.RoomServiceCreateResponse]

func (h *roomHandler) Create(context.Context, *roomServiceCreateRequest) (*roomServiceCreateResponse, error) {
	panic("implement me")
}

type roomServiceJoinRequest = connect.Request[protov2.RoomServiceJoinRequest]
type roomServiceJoinResponse = connect.Response[protov2.RoomServiceJoinResponse]

func (h *roomHandler) Join(context.Context, *roomServiceJoinRequest) (*roomServiceJoinResponse, error) {
	panic("implement me")
}
