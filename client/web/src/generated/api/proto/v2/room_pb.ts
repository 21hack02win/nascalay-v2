// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file api/proto/v2/room.proto (package api.proto.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.proto.v2.RoomServiceCreateRequest
 */
export class RoomServiceCreateRequest extends Message<RoomServiceCreateRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: api.proto.v2.Avatar avatar = 2;
   */
  avatar?: Avatar;

  /**
   * @generated from field: api.proto.v2.RoomConfig config = 3;
   */
  config?: RoomConfig;

  constructor(data?: PartialMessage<RoomServiceCreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.proto.v2.RoomServiceCreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "avatar", kind: "message", T: Avatar },
    { no: 3, name: "config", kind: "message", T: RoomConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoomServiceCreateRequest {
    return new RoomServiceCreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoomServiceCreateRequest {
    return new RoomServiceCreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoomServiceCreateRequest {
    return new RoomServiceCreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RoomServiceCreateRequest | PlainMessage<RoomServiceCreateRequest> | undefined, b: RoomServiceCreateRequest | PlainMessage<RoomServiceCreateRequest> | undefined): boolean {
    return proto3.util.equals(RoomServiceCreateRequest, a, b);
  }
}

/**
 * @generated from message api.proto.v2.RoomServiceCreateResponse
 */
export class RoomServiceCreateResponse extends Message<RoomServiceCreateResponse> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId = "";

  /**
   * @generated from field: api.proto.v2.RoomConfig config = 2;
   */
  config?: RoomConfig;

  constructor(data?: PartialMessage<RoomServiceCreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.proto.v2.RoomServiceCreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: RoomConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoomServiceCreateResponse {
    return new RoomServiceCreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoomServiceCreateResponse {
    return new RoomServiceCreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoomServiceCreateResponse {
    return new RoomServiceCreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RoomServiceCreateResponse | PlainMessage<RoomServiceCreateResponse> | undefined, b: RoomServiceCreateResponse | PlainMessage<RoomServiceCreateResponse> | undefined): boolean {
    return proto3.util.equals(RoomServiceCreateResponse, a, b);
  }
}

/**
 * @generated from message api.proto.v2.RoomServiceJoinRequest
 */
export class RoomServiceJoinRequest extends Message<RoomServiceJoinRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: string room_id = 2;
   */
  roomId = "";

  /**
   * @generated from field: api.proto.v2.Avatar avatar = 3;
   */
  avatar?: Avatar;

  constructor(data?: PartialMessage<RoomServiceJoinRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.proto.v2.RoomServiceJoinRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar", kind: "message", T: Avatar },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoomServiceJoinRequest {
    return new RoomServiceJoinRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoomServiceJoinRequest {
    return new RoomServiceJoinRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoomServiceJoinRequest {
    return new RoomServiceJoinRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RoomServiceJoinRequest | PlainMessage<RoomServiceJoinRequest> | undefined, b: RoomServiceJoinRequest | PlainMessage<RoomServiceJoinRequest> | undefined): boolean {
    return proto3.util.equals(RoomServiceJoinRequest, a, b);
  }
}

/**
 * @generated from message api.proto.v2.RoomServiceJoinResponse
 */
export class RoomServiceJoinResponse extends Message<RoomServiceJoinResponse> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId = "";

  /**
   * @generated from field: string host_id = 2;
   */
  hostId = "";

  /**
   * @generated from field: repeated api.proto.v2.User users = 3;
   */
  users: User[] = [];

  /**
   * @generated from field: api.proto.v2.RoomConfig config = 4;
   */
  config?: RoomConfig;

  constructor(data?: PartialMessage<RoomServiceJoinResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.proto.v2.RoomServiceJoinResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "users", kind: "message", T: User, repeated: true },
    { no: 4, name: "config", kind: "message", T: RoomConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoomServiceJoinResponse {
    return new RoomServiceJoinResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoomServiceJoinResponse {
    return new RoomServiceJoinResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoomServiceJoinResponse {
    return new RoomServiceJoinResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RoomServiceJoinResponse | PlainMessage<RoomServiceJoinResponse> | undefined, b: RoomServiceJoinResponse | PlainMessage<RoomServiceJoinResponse> | undefined): boolean {
    return proto3.util.equals(RoomServiceJoinResponse, a, b);
  }
}

/**
 * @generated from message api.proto.v2.Avatar
 */
export class Avatar extends Message<Avatar> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * @generated from field: string color = 2;
   */
  color = "";

  constructor(data?: PartialMessage<Avatar>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.proto.v2.Avatar";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Avatar {
    return new Avatar().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Avatar {
    return new Avatar().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Avatar {
    return new Avatar().fromJsonString(jsonString, options);
  }

  static equals(a: Avatar | PlainMessage<Avatar> | undefined, b: Avatar | PlainMessage<Avatar> | undefined): boolean {
    return proto3.util.equals(Avatar, a, b);
  }
}

/**
 * @generated from message api.proto.v2.RoomConfig
 */
export class RoomConfig extends Message<RoomConfig> {
  /**
   * @generated from field: uint32 capacity = 1;
   */
  capacity = 0;

  /**
   * @generated from field: string shape = 2;
   */
  shape = "";

  /**
   * @generated from field: uint32 time_limit_seconds = 3;
   */
  timeLimitSeconds = 0;

  constructor(data?: PartialMessage<RoomConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.proto.v2.RoomConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "capacity", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "shape", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "time_limit_seconds", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoomConfig {
    return new RoomConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoomConfig {
    return new RoomConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoomConfig {
    return new RoomConfig().fromJsonString(jsonString, options);
  }

  static equals(a: RoomConfig | PlainMessage<RoomConfig> | undefined, b: RoomConfig | PlainMessage<RoomConfig> | undefined): boolean {
    return proto3.util.equals(RoomConfig, a, b);
  }
}

/**
 * @generated from message api.proto.v2.User
 */
export class User extends Message<User> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: api.proto.v2.Avatar avatar = 3;
   */
  avatar?: Avatar;

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.proto.v2.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "avatar", kind: "message", T: Avatar },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

