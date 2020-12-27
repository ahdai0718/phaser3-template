/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    /**
     * AuthType enum.
     * @name pb.AuthType
     * @enum {number}
     * @property {number} AT_NONE=0 AT_NONE value
     * @property {number} AT_JWT=1 AT_JWT value
     * @property {number} AT_OAUTH=2 AT_OAUTH value
     */
    pb.AuthType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AT_NONE"] = 0;
        values[valuesById[1] = "AT_JWT"] = 1;
        values[valuesById[2] = "AT_OAUTH"] = 2;
        return values;
    })();

    pb.Auth = (function() {

        /**
         * Properties of an Auth.
         * @memberof pb
         * @interface IAuth
         * @property {pb.AuthType|null} [type] Auth type
         * @property {string|null} [id] Auth id
         * @property {string|null} [secret] Auth secret
         * @property {string|null} [grantType] Auth grantType
         * @property {string|null} [scope] Auth scope
         */

        /**
         * Constructs a new Auth.
         * @memberof pb
         * @classdesc Represents an Auth.
         * @implements IAuth
         * @constructor
         * @param {pb.IAuth=} [properties] Properties to set
         */
        function Auth(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Auth type.
         * @member {pb.AuthType} type
         * @memberof pb.Auth
         * @instance
         */
        Auth.prototype.type = 0;

        /**
         * Auth id.
         * @member {string} id
         * @memberof pb.Auth
         * @instance
         */
        Auth.prototype.id = "";

        /**
         * Auth secret.
         * @member {string} secret
         * @memberof pb.Auth
         * @instance
         */
        Auth.prototype.secret = "";

        /**
         * Auth grantType.
         * @member {string} grantType
         * @memberof pb.Auth
         * @instance
         */
        Auth.prototype.grantType = "";

        /**
         * Auth scope.
         * @member {string} scope
         * @memberof pb.Auth
         * @instance
         */
        Auth.prototype.scope = "";

        /**
         * Creates a new Auth instance using the specified properties.
         * @function create
         * @memberof pb.Auth
         * @static
         * @param {pb.IAuth=} [properties] Properties to set
         * @returns {pb.Auth} Auth instance
         */
        Auth.create = function create(properties) {
            return new Auth(properties);
        };

        /**
         * Encodes the specified Auth message. Does not implicitly {@link pb.Auth.verify|verify} messages.
         * @function encode
         * @memberof pb.Auth
         * @static
         * @param {pb.IAuth} message Auth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Auth.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            if (message.secret != null && Object.hasOwnProperty.call(message, "secret"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.secret);
            if (message.grantType != null && Object.hasOwnProperty.call(message, "grantType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.grantType);
            if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.scope);
            return writer;
        };

        /**
         * Encodes the specified Auth message, length delimited. Does not implicitly {@link pb.Auth.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Auth
         * @static
         * @param {pb.IAuth} message Auth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Auth.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Auth message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Auth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Auth} Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Auth.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Auth();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.secret = reader.string();
                    break;
                case 4:
                    message.grantType = reader.string();
                    break;
                case 5:
                    message.scope = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Auth message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Auth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Auth} Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Auth.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Auth message.
         * @function verify
         * @memberof pb.Auth
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Auth.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.secret != null && message.hasOwnProperty("secret"))
                if (!$util.isString(message.secret))
                    return "secret: string expected";
            if (message.grantType != null && message.hasOwnProperty("grantType"))
                if (!$util.isString(message.grantType))
                    return "grantType: string expected";
            if (message.scope != null && message.hasOwnProperty("scope"))
                if (!$util.isString(message.scope))
                    return "scope: string expected";
            return null;
        };

        /**
         * Creates an Auth message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Auth
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Auth} Auth
         */
        Auth.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Auth)
                return object;
            var message = new $root.pb.Auth();
            switch (object.type) {
            case "AT_NONE":
            case 0:
                message.type = 0;
                break;
            case "AT_JWT":
            case 1:
                message.type = 1;
                break;
            case "AT_OAUTH":
            case 2:
                message.type = 2;
                break;
            }
            if (object.id != null)
                message.id = String(object.id);
            if (object.secret != null)
                message.secret = String(object.secret);
            if (object.grantType != null)
                message.grantType = String(object.grantType);
            if (object.scope != null)
                message.scope = String(object.scope);
            return message;
        };

        /**
         * Creates a plain object from an Auth message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Auth
         * @static
         * @param {pb.Auth} message Auth
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Auth.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "AT_NONE" : 0;
                object.id = "";
                object.secret = "";
                object.grantType = "";
                object.scope = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pb.AuthType[message.type] : message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.secret != null && message.hasOwnProperty("secret"))
                object.secret = message.secret;
            if (message.grantType != null && message.hasOwnProperty("grantType"))
                object.grantType = message.grantType;
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = message.scope;
            return object;
        };

        /**
         * Converts this Auth to JSON.
         * @function toJSON
         * @memberof pb.Auth
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Auth.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Auth;
    })();

    pb.Currency = (function() {

        /**
         * Properties of a Currency.
         * @memberof pb
         * @interface ICurrency
         * @property {string|null} [name] Currency name
         * @property {number|null} [multiplyToCredit] Currency multiplyToCredit
         */

        /**
         * Constructs a new Currency.
         * @memberof pb
         * @classdesc Represents a Currency.
         * @implements ICurrency
         * @constructor
         * @param {pb.ICurrency=} [properties] Properties to set
         */
        function Currency(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Currency name.
         * @member {string} name
         * @memberof pb.Currency
         * @instance
         */
        Currency.prototype.name = "";

        /**
         * Currency multiplyToCredit.
         * @member {number} multiplyToCredit
         * @memberof pb.Currency
         * @instance
         */
        Currency.prototype.multiplyToCredit = 0;

        /**
         * Creates a new Currency instance using the specified properties.
         * @function create
         * @memberof pb.Currency
         * @static
         * @param {pb.ICurrency=} [properties] Properties to set
         * @returns {pb.Currency} Currency instance
         */
        Currency.create = function create(properties) {
            return new Currency(properties);
        };

        /**
         * Encodes the specified Currency message. Does not implicitly {@link pb.Currency.verify|verify} messages.
         * @function encode
         * @memberof pb.Currency
         * @static
         * @param {pb.ICurrency} message Currency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Currency.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.multiplyToCredit != null && Object.hasOwnProperty.call(message, "multiplyToCredit"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.multiplyToCredit);
            return writer;
        };

        /**
         * Encodes the specified Currency message, length delimited. Does not implicitly {@link pb.Currency.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Currency
         * @static
         * @param {pb.ICurrency} message Currency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Currency.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Currency message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Currency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Currency} Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Currency.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Currency();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.multiplyToCredit = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Currency message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Currency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Currency} Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Currency.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Currency message.
         * @function verify
         * @memberof pb.Currency
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Currency.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.multiplyToCredit != null && message.hasOwnProperty("multiplyToCredit"))
                if (typeof message.multiplyToCredit !== "number")
                    return "multiplyToCredit: number expected";
            return null;
        };

        /**
         * Creates a Currency message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Currency
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Currency} Currency
         */
        Currency.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Currency)
                return object;
            var message = new $root.pb.Currency();
            if (object.name != null)
                message.name = String(object.name);
            if (object.multiplyToCredit != null)
                message.multiplyToCredit = Number(object.multiplyToCredit);
            return message;
        };

        /**
         * Creates a plain object from a Currency message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Currency
         * @static
         * @param {pb.Currency} message Currency
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Currency.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.multiplyToCredit = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.multiplyToCredit != null && message.hasOwnProperty("multiplyToCredit"))
                object.multiplyToCredit = options.json && !isFinite(message.multiplyToCredit) ? String(message.multiplyToCredit) : message.multiplyToCredit;
            return object;
        };

        /**
         * Converts this Currency to JSON.
         * @function toJSON
         * @memberof pb.Currency
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Currency.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Currency;
    })();

    /**
     * ErrorCode enum.
     * @name pb.ErrorCode
     * @enum {number}
     * @property {number} EC_NONE=0 EC_NONE value
     * @property {number} EC_SERVER_INTERNAL=1 EC_SERVER_INTERNAL value
     * @property {number} EC_LOGIN_FAILED=10001 EC_LOGIN_FAILED value
     * @property {number} EC_ROOM_JOIN_FAILED_NOT_ENOUGH_CREDIT=30001 EC_ROOM_JOIN_FAILED_NOT_ENOUGH_CREDIT value
     * @property {number} EC_ROOM_JOIN_FAILED_NOT_ALLOW=30002 EC_ROOM_JOIN_FAILED_NOT_ALLOW value
     * @property {number} EC_ROOM_JOIN_FAILED_FULL=30003 EC_ROOM_JOIN_FAILED_FULL value
     * @property {number} EC_ROOM_JOIN_FAILED_EXISTS=30004 EC_ROOM_JOIN_FAILED_EXISTS value
     */
    pb.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EC_NONE"] = 0;
        values[valuesById[1] = "EC_SERVER_INTERNAL"] = 1;
        values[valuesById[10001] = "EC_LOGIN_FAILED"] = 10001;
        values[valuesById[30001] = "EC_ROOM_JOIN_FAILED_NOT_ENOUGH_CREDIT"] = 30001;
        values[valuesById[30002] = "EC_ROOM_JOIN_FAILED_NOT_ALLOW"] = 30002;
        values[valuesById[30003] = "EC_ROOM_JOIN_FAILED_FULL"] = 30003;
        values[valuesById[30004] = "EC_ROOM_JOIN_FAILED_EXISTS"] = 30004;
        return values;
    })();

    /**
     * ErrorAction enum.
     * @name pb.ErrorAction
     * @enum {number}
     * @property {number} EA_NONE=0 EA_NONE value
     * @property {number} EA_CLOSE_CONNECTION=1 EA_CLOSE_CONNECTION value
     */
    pb.ErrorAction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EA_NONE"] = 0;
        values[valuesById[1] = "EA_CLOSE_CONNECTION"] = 1;
        return values;
    })();

    pb.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof pb
         * @interface IError
         * @property {pb.ErrorCode|null} [code] Error code
         * @property {string|null} [message] Error message
         * @property {number|Long|null} [timestamp] Error timestamp
         * @property {pb.ErrorAction|null} [action] Error action
         */

        /**
         * Constructs a new Error.
         * @memberof pb
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {pb.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error code.
         * @member {pb.ErrorCode} code
         * @memberof pb.Error
         * @instance
         */
        Error.prototype.code = 0;

        /**
         * Error message.
         * @member {string} message
         * @memberof pb.Error
         * @instance
         */
        Error.prototype.message = "";

        /**
         * Error timestamp.
         * @member {number|Long} timestamp
         * @memberof pb.Error
         * @instance
         */
        Error.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Error action.
         * @member {pb.ErrorAction} action
         * @memberof pb.Error
         * @instance
         */
        Error.prototype.action = 0;

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof pb.Error
         * @static
         * @param {pb.IError=} [properties] Properties to set
         * @returns {pb.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @function encode
         * @memberof pb.Error
         * @static
         * @param {pb.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.action);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Error
         * @static
         * @param {pb.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                case 4:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof pb.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 10001:
                case 30001:
                case 30002:
                case 30003:
                case 30004:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Error)
                return object;
            var message = new $root.pb.Error();
            switch (object.code) {
            case "EC_NONE":
            case 0:
                message.code = 0;
                break;
            case "EC_SERVER_INTERNAL":
            case 1:
                message.code = 1;
                break;
            case "EC_LOGIN_FAILED":
            case 10001:
                message.code = 10001;
                break;
            case "EC_ROOM_JOIN_FAILED_NOT_ENOUGH_CREDIT":
            case 30001:
                message.code = 30001;
                break;
            case "EC_ROOM_JOIN_FAILED_NOT_ALLOW":
            case 30002:
                message.code = 30002;
                break;
            case "EC_ROOM_JOIN_FAILED_FULL":
            case 30003:
                message.code = 30003;
                break;
            case "EC_ROOM_JOIN_FAILED_EXISTS":
            case 30004:
                message.code = 30004;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            switch (object.action) {
            case "EA_NONE":
            case 0:
                message.action = 0;
                break;
            case "EA_CLOSE_CONNECTION":
            case 1:
                message.action = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Error
         * @static
         * @param {pb.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "EC_NONE" : 0;
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.action = options.enums === String ? "EA_NONE" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pb.ErrorCode[message.code] : message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.pb.ErrorAction[message.action] : message.action;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof pb.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    pb.game = (function() {

        /**
         * Namespace game.
         * @memberof pb
         * @namespace
         */
        var game = {};

        game.chinese_poker_13 = (function() {

            /**
             * Namespace chinese_poker_13.
             * @memberof pb.game
             * @namespace
             */
            var chinese_poker_13 = {};

            /**
             * CardNumber enum.
             * @name pb.game.chinese_poker_13.CardNumber
             * @enum {number}
             * @property {number} CN_NONE=0 CN_NONE value
             * @property {number} CN_ONE=1 CN_ONE value
             * @property {number} CN_TWO=2 CN_TWO value
             * @property {number} CN_THREE=3 CN_THREE value
             * @property {number} CN_FOUR=4 CN_FOUR value
             * @property {number} CN_FIVE=5 CN_FIVE value
             * @property {number} CN_SIX=6 CN_SIX value
             * @property {number} CN_SEVEN=7 CN_SEVEN value
             * @property {number} CN_EIGHT=8 CN_EIGHT value
             * @property {number} CN_NINE=9 CN_NINE value
             * @property {number} CN_TEN=10 CN_TEN value
             * @property {number} CN_JACK=11 CN_JACK value
             * @property {number} CN_QUEEN=12 CN_QUEEN value
             * @property {number} CN_KING=13 CN_KING value
             * @property {number} CN_ACE=14 CN_ACE value
             * @property {number} CN_JOKER_1=21 CN_JOKER_1 value
             * @property {number} CN_JOKER_2=22 CN_JOKER_2 value
             */
            chinese_poker_13.CardNumber = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CN_NONE"] = 0;
                values[valuesById[1] = "CN_ONE"] = 1;
                values[valuesById[2] = "CN_TWO"] = 2;
                values[valuesById[3] = "CN_THREE"] = 3;
                values[valuesById[4] = "CN_FOUR"] = 4;
                values[valuesById[5] = "CN_FIVE"] = 5;
                values[valuesById[6] = "CN_SIX"] = 6;
                values[valuesById[7] = "CN_SEVEN"] = 7;
                values[valuesById[8] = "CN_EIGHT"] = 8;
                values[valuesById[9] = "CN_NINE"] = 9;
                values[valuesById[10] = "CN_TEN"] = 10;
                values[valuesById[11] = "CN_JACK"] = 11;
                values[valuesById[12] = "CN_QUEEN"] = 12;
                values[valuesById[13] = "CN_KING"] = 13;
                values[valuesById[14] = "CN_ACE"] = 14;
                values[valuesById[21] = "CN_JOKER_1"] = 21;
                values[valuesById[22] = "CN_JOKER_2"] = 22;
                return values;
            })();

            /**
             * CardType enum.
             * @name pb.game.chinese_poker_13.CardType
             * @enum {number}
             * @property {number} CT_NONE=0 CT_NONE value
             * @property {number} CT_CLUB=1 CT_CLUB value
             * @property {number} CT_DIAMOND=2 CT_DIAMOND value
             * @property {number} CT_HEART=3 CT_HEART value
             * @property {number} CT_SPADE=4 CT_SPADE value
             * @property {number} CT_JOKER=9 CT_JOKER value
             */
            chinese_poker_13.CardType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CT_NONE"] = 0;
                values[valuesById[1] = "CT_CLUB"] = 1;
                values[valuesById[2] = "CT_DIAMOND"] = 2;
                values[valuesById[3] = "CT_HEART"] = 3;
                values[valuesById[4] = "CT_SPADE"] = 4;
                values[valuesById[9] = "CT_JOKER"] = 9;
                return values;
            })();

            chinese_poker_13.Card = (function() {

                /**
                 * Properties of a Card.
                 * @memberof pb.game.chinese_poker_13
                 * @interface ICard
                 * @property {pb.game.chinese_poker_13.CardType|null} [Type] Card Type
                 * @property {pb.game.chinese_poker_13.CardNumber|null} [Number] Card Number
                 * @property {number|Long|null} [Point] Card Point
                 */

                /**
                 * Constructs a new Card.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a Card.
                 * @implements ICard
                 * @constructor
                 * @param {pb.game.chinese_poker_13.ICard=} [properties] Properties to set
                 */
                function Card(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Card Type.
                 * @member {pb.game.chinese_poker_13.CardType} Type
                 * @memberof pb.game.chinese_poker_13.Card
                 * @instance
                 */
                Card.prototype.Type = 0;

                /**
                 * Card Number.
                 * @member {pb.game.chinese_poker_13.CardNumber} Number
                 * @memberof pb.game.chinese_poker_13.Card
                 * @instance
                 */
                Card.prototype.Number = 0;

                /**
                 * Card Point.
                 * @member {number|Long} Point
                 * @memberof pb.game.chinese_poker_13.Card
                 * @instance
                 */
                Card.prototype.Point = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new Card instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {pb.game.chinese_poker_13.ICard=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.Card} Card instance
                 */
                Card.create = function create(properties) {
                    return new Card(properties);
                };

                /**
                 * Encodes the specified Card message. Does not implicitly {@link pb.game.chinese_poker_13.Card.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {pb.game.chinese_poker_13.ICard} message Card message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Card.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                    if (message.Number != null && Object.hasOwnProperty.call(message, "Number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Number);
                    if (message.Point != null && Object.hasOwnProperty.call(message, "Point"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Point);
                    return writer;
                };

                /**
                 * Encodes the specified Card message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Card.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {pb.game.chinese_poker_13.ICard} message Card message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Card.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Card message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.Card} Card
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Card.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.Card();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.Type = reader.int32();
                            break;
                        case 2:
                            message.Number = reader.int32();
                            break;
                        case 3:
                            message.Point = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Card message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.Card} Card
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Card.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Card message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Card.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Type != null && message.hasOwnProperty("Type"))
                        switch (message.Type) {
                        default:
                            return "Type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 9:
                            break;
                        }
                    if (message.Number != null && message.hasOwnProperty("Number"))
                        switch (message.Number) {
                        default:
                            return "Number: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 21:
                        case 22:
                            break;
                        }
                    if (message.Point != null && message.hasOwnProperty("Point"))
                        if (!$util.isInteger(message.Point) && !(message.Point && $util.isInteger(message.Point.low) && $util.isInteger(message.Point.high)))
                            return "Point: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a Card message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.Card} Card
                 */
                Card.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.Card)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.Card();
                    switch (object.Type) {
                    case "CT_NONE":
                    case 0:
                        message.Type = 0;
                        break;
                    case "CT_CLUB":
                    case 1:
                        message.Type = 1;
                        break;
                    case "CT_DIAMOND":
                    case 2:
                        message.Type = 2;
                        break;
                    case "CT_HEART":
                    case 3:
                        message.Type = 3;
                        break;
                    case "CT_SPADE":
                    case 4:
                        message.Type = 4;
                        break;
                    case "CT_JOKER":
                    case 9:
                        message.Type = 9;
                        break;
                    }
                    switch (object.Number) {
                    case "CN_NONE":
                    case 0:
                        message.Number = 0;
                        break;
                    case "CN_ONE":
                    case 1:
                        message.Number = 1;
                        break;
                    case "CN_TWO":
                    case 2:
                        message.Number = 2;
                        break;
                    case "CN_THREE":
                    case 3:
                        message.Number = 3;
                        break;
                    case "CN_FOUR":
                    case 4:
                        message.Number = 4;
                        break;
                    case "CN_FIVE":
                    case 5:
                        message.Number = 5;
                        break;
                    case "CN_SIX":
                    case 6:
                        message.Number = 6;
                        break;
                    case "CN_SEVEN":
                    case 7:
                        message.Number = 7;
                        break;
                    case "CN_EIGHT":
                    case 8:
                        message.Number = 8;
                        break;
                    case "CN_NINE":
                    case 9:
                        message.Number = 9;
                        break;
                    case "CN_TEN":
                    case 10:
                        message.Number = 10;
                        break;
                    case "CN_JACK":
                    case 11:
                        message.Number = 11;
                        break;
                    case "CN_QUEEN":
                    case 12:
                        message.Number = 12;
                        break;
                    case "CN_KING":
                    case 13:
                        message.Number = 13;
                        break;
                    case "CN_ACE":
                    case 14:
                        message.Number = 14;
                        break;
                    case "CN_JOKER_1":
                    case 21:
                        message.Number = 21;
                        break;
                    case "CN_JOKER_2":
                    case 22:
                        message.Number = 22;
                        break;
                    }
                    if (object.Point != null)
                        if ($util.Long)
                            (message.Point = $util.Long.fromValue(object.Point)).unsigned = false;
                        else if (typeof object.Point === "string")
                            message.Point = parseInt(object.Point, 10);
                        else if (typeof object.Point === "number")
                            message.Point = object.Point;
                        else if (typeof object.Point === "object")
                            message.Point = new $util.LongBits(object.Point.low >>> 0, object.Point.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a Card message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.Card
                 * @static
                 * @param {pb.game.chinese_poker_13.Card} message Card
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Card.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.Type = options.enums === String ? "CT_NONE" : 0;
                        object.Number = options.enums === String ? "CN_NONE" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.Point = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.Point = options.longs === String ? "0" : 0;
                    }
                    if (message.Type != null && message.hasOwnProperty("Type"))
                        object.Type = options.enums === String ? $root.pb.game.chinese_poker_13.CardType[message.Type] : message.Type;
                    if (message.Number != null && message.hasOwnProperty("Number"))
                        object.Number = options.enums === String ? $root.pb.game.chinese_poker_13.CardNumber[message.Number] : message.Number;
                    if (message.Point != null && message.hasOwnProperty("Point"))
                        if (typeof message.Point === "number")
                            object.Point = options.longs === String ? String(message.Point) : message.Point;
                        else
                            object.Point = options.longs === String ? $util.Long.prototype.toString.call(message.Point) : options.longs === Number ? new $util.LongBits(message.Point.low >>> 0, message.Point.high >>> 0).toNumber() : message.Point;
                    return object;
                };

                /**
                 * Converts this Card to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.Card
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Card.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Card;
            })();

            chinese_poker_13.Game = (function() {

                /**
                 * Properties of a Game.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IGame
                 * @property {string|null} [id] Game id
                 * @property {pb.game.chinese_poker_13.IRound|null} [currentRound] Game currentRound
                 * @property {number|null} [roundCount] Game roundCount
                 */

                /**
                 * Constructs a new Game.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a Game.
                 * @implements IGame
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IGame=} [properties] Properties to set
                 */
                function Game(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Game id.
                 * @member {string} id
                 * @memberof pb.game.chinese_poker_13.Game
                 * @instance
                 */
                Game.prototype.id = "";

                /**
                 * Game currentRound.
                 * @member {pb.game.chinese_poker_13.IRound|null|undefined} currentRound
                 * @memberof pb.game.chinese_poker_13.Game
                 * @instance
                 */
                Game.prototype.currentRound = null;

                /**
                 * Game roundCount.
                 * @member {number} roundCount
                 * @memberof pb.game.chinese_poker_13.Game
                 * @instance
                 */
                Game.prototype.roundCount = 0;

                /**
                 * Creates a new Game instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {pb.game.chinese_poker_13.IGame=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.Game} Game instance
                 */
                Game.create = function create(properties) {
                    return new Game(properties);
                };

                /**
                 * Encodes the specified Game message. Does not implicitly {@link pb.game.chinese_poker_13.Game.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {pb.game.chinese_poker_13.IGame} message Game message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Game.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.currentRound != null && Object.hasOwnProperty.call(message, "currentRound"))
                        $root.pb.game.chinese_poker_13.Round.encode(message.currentRound, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.roundCount != null && Object.hasOwnProperty.call(message, "roundCount"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roundCount);
                    return writer;
                };

                /**
                 * Encodes the specified Game message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Game.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {pb.game.chinese_poker_13.IGame} message Game message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Game.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Game message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.Game} Game
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Game.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.Game();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.currentRound = $root.pb.game.chinese_poker_13.Round.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.roundCount = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Game message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.Game} Game
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Game.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Game message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Game.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.currentRound != null && message.hasOwnProperty("currentRound")) {
                        var error = $root.pb.game.chinese_poker_13.Round.verify(message.currentRound);
                        if (error)
                            return "currentRound." + error;
                    }
                    if (message.roundCount != null && message.hasOwnProperty("roundCount"))
                        if (!$util.isInteger(message.roundCount))
                            return "roundCount: integer expected";
                    return null;
                };

                /**
                 * Creates a Game message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.Game} Game
                 */
                Game.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.Game)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.Game();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.currentRound != null) {
                        if (typeof object.currentRound !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Game.currentRound: object expected");
                        message.currentRound = $root.pb.game.chinese_poker_13.Round.fromObject(object.currentRound);
                    }
                    if (object.roundCount != null)
                        message.roundCount = object.roundCount | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Game message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.Game
                 * @static
                 * @param {pb.game.chinese_poker_13.Game} message Game
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Game.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.currentRound = null;
                        object.roundCount = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                        object.currentRound = $root.pb.game.chinese_poker_13.Round.toObject(message.currentRound, options);
                    if (message.roundCount != null && message.hasOwnProperty("roundCount"))
                        object.roundCount = message.roundCount;
                    return object;
                };

                /**
                 * Converts this Game to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.Game
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Game.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Game;
            })();

            /**
             * PatternType enum.
             * @name pb.game.chinese_poker_13.PatternType
             * @enum {number}
             * @property {number} CARD_NONE=0 CARD_NONE value
             * @property {number} CARD_FAILED=1 CARD_FAILED value
             * @property {number} CARD_SEPERATE=2 CARD_SEPERATE value
             * @property {number} CARD_FAKE_ONE_PAIR=3 CARD_FAKE_ONE_PAIR value
             * @property {number} CARD_ONE_PAIR=4 CARD_ONE_PAIR value
             * @property {number} CARD_TWO_PAIR=6 CARD_TWO_PAIR value
             * @property {number} CARD_FAKE_THREE_A_KIND=7 CARD_FAKE_THREE_A_KIND value
             * @property {number} CARD_THREE_A_KIND=8 CARD_THREE_A_KIND value
             * @property {number} CARD_FAKE_STRAIGHT=9 CARD_FAKE_STRAIGHT value
             * @property {number} CARD_STRAIGHT=10 CARD_STRAIGHT value
             * @property {number} CARD_FAKE_FLUSH=11 CARD_FAKE_FLUSH value
             * @property {number} CARD_FLUSH=12 CARD_FLUSH value
             * @property {number} CARD_FAKE_FLUSH_ONE_PAIR=13 CARD_FAKE_FLUSH_ONE_PAIR value
             * @property {number} CARD_FLUSH_ONE_PAIR=14 CARD_FLUSH_ONE_PAIR value
             * @property {number} CARD_FLUSH_TWO_PAIR=16 CARD_FLUSH_TWO_PAIR value
             * @property {number} CARD_FAKE_FLUSH_THREE_A_KIND=17 CARD_FAKE_FLUSH_THREE_A_KIND value
             * @property {number} CARD_FAKE_FULL_HOUSE=19 CARD_FAKE_FULL_HOUSE value
             * @property {number} CARD_FULL_HOUSE=20 CARD_FULL_HOUSE value
             * @property {number} CARD_FAKE_FOUR_A_KIND=21 CARD_FAKE_FOUR_A_KIND value
             * @property {number} CARD_FOUR_A_KIND=22 CARD_FOUR_A_KIND value
             * @property {number} CARD_FAKE_FLUSH_STRAIGHT=23 CARD_FAKE_FLUSH_STRAIGHT value
             * @property {number} CARD_FLUSH_STRAIGHT=24 CARD_FLUSH_STRAIGHT value
             * @property {number} CARD_FAKE_FIVE_A_KIND=25 CARD_FAKE_FIVE_A_KIND value
             * @property {number} CARD_FIVE_A_KIND=26 CARD_FIVE_A_KIND value
             */
            chinese_poker_13.PatternType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CARD_NONE"] = 0;
                values[valuesById[1] = "CARD_FAILED"] = 1;
                values[valuesById[2] = "CARD_SEPERATE"] = 2;
                values[valuesById[3] = "CARD_FAKE_ONE_PAIR"] = 3;
                values[valuesById[4] = "CARD_ONE_PAIR"] = 4;
                values[valuesById[6] = "CARD_TWO_PAIR"] = 6;
                values[valuesById[7] = "CARD_FAKE_THREE_A_KIND"] = 7;
                values[valuesById[8] = "CARD_THREE_A_KIND"] = 8;
                values[valuesById[9] = "CARD_FAKE_STRAIGHT"] = 9;
                values[valuesById[10] = "CARD_STRAIGHT"] = 10;
                values[valuesById[11] = "CARD_FAKE_FLUSH"] = 11;
                values[valuesById[12] = "CARD_FLUSH"] = 12;
                values[valuesById[13] = "CARD_FAKE_FLUSH_ONE_PAIR"] = 13;
                values[valuesById[14] = "CARD_FLUSH_ONE_PAIR"] = 14;
                values[valuesById[16] = "CARD_FLUSH_TWO_PAIR"] = 16;
                values[valuesById[17] = "CARD_FAKE_FLUSH_THREE_A_KIND"] = 17;
                values[valuesById[19] = "CARD_FAKE_FULL_HOUSE"] = 19;
                values[valuesById[20] = "CARD_FULL_HOUSE"] = 20;
                values[valuesById[21] = "CARD_FAKE_FOUR_A_KIND"] = 21;
                values[valuesById[22] = "CARD_FOUR_A_KIND"] = 22;
                values[valuesById[23] = "CARD_FAKE_FLUSH_STRAIGHT"] = 23;
                values[valuesById[24] = "CARD_FLUSH_STRAIGHT"] = 24;
                values[valuesById[25] = "CARD_FAKE_FIVE_A_KIND"] = 25;
                values[valuesById[26] = "CARD_FIVE_A_KIND"] = 26;
                return values;
            })();

            /**
             * StraightFiveType enum.
             * @name pb.game.chinese_poker_13.StraightFiveType
             * @enum {number}
             * @property {number} STRAIGHT_FIVE_NONE=0 STRAIGHT_FIVE_NONE value
             * @property {number} STRAIGHT_FIVE_2_6=1 STRAIGHT_FIVE_2_6 value
             * @property {number} STRAIGHT_FIVE_3_7=2 STRAIGHT_FIVE_3_7 value
             * @property {number} STRAIGHT_FIVE_4_8=3 STRAIGHT_FIVE_4_8 value
             * @property {number} STRAIGHT_FIVE_5_9=4 STRAIGHT_FIVE_5_9 value
             * @property {number} STRAIGHT_FIVE_6_10=5 STRAIGHT_FIVE_6_10 value
             * @property {number} STRAIGHT_FIVE_7_11=6 STRAIGHT_FIVE_7_11 value
             * @property {number} STRAIGHT_FIVE_8_12=7 STRAIGHT_FIVE_8_12 value
             * @property {number} STRAIGHT_FIVE_9_13=8 STRAIGHT_FIVE_9_13 value
             * @property {number} STRAIGHT_FIVE_1_5=9 STRAIGHT_FIVE_1_5 value
             * @property {number} STRAIGHT_FIVE_10_14=10 STRAIGHT_FIVE_10_14 value
             */
            chinese_poker_13.StraightFiveType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRAIGHT_FIVE_NONE"] = 0;
                values[valuesById[1] = "STRAIGHT_FIVE_2_6"] = 1;
                values[valuesById[2] = "STRAIGHT_FIVE_3_7"] = 2;
                values[valuesById[3] = "STRAIGHT_FIVE_4_8"] = 3;
                values[valuesById[4] = "STRAIGHT_FIVE_5_9"] = 4;
                values[valuesById[5] = "STRAIGHT_FIVE_6_10"] = 5;
                values[valuesById[6] = "STRAIGHT_FIVE_7_11"] = 6;
                values[valuesById[7] = "STRAIGHT_FIVE_8_12"] = 7;
                values[valuesById[8] = "STRAIGHT_FIVE_9_13"] = 8;
                values[valuesById[9] = "STRAIGHT_FIVE_1_5"] = 9;
                values[valuesById[10] = "STRAIGHT_FIVE_10_14"] = 10;
                return values;
            })();

            chinese_poker_13.CardPattern = (function() {

                /**
                 * Properties of a CardPattern.
                 * @memberof pb.game.chinese_poker_13
                 * @interface ICardPattern
                 * @property {Array.<pb.game.chinese_poker_13.ICard>|null} [cardList] CardPattern cardList
                 * @property {pb.game.chinese_poker_13.PatternType|null} [patternType] CardPattern patternType
                 * @property {Array.<number|Long>|null} [patternPhaseList] CardPattern patternPhaseList
                 * @property {Array.<pb.game.chinese_poker_13.ICard>|null} [cardListNotInPattern] CardPattern cardListNotInPattern
                 * @property {Array.<pb.game.chinese_poker_13.ICard>|null} [cardListLeft] CardPattern cardListLeft
                 */

                /**
                 * Constructs a new CardPattern.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a CardPattern.
                 * @implements ICardPattern
                 * @constructor
                 * @param {pb.game.chinese_poker_13.ICardPattern=} [properties] Properties to set
                 */
                function CardPattern(properties) {
                    this.cardList = [];
                    this.patternPhaseList = [];
                    this.cardListNotInPattern = [];
                    this.cardListLeft = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CardPattern cardList.
                 * @member {Array.<pb.game.chinese_poker_13.ICard>} cardList
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @instance
                 */
                CardPattern.prototype.cardList = $util.emptyArray;

                /**
                 * CardPattern patternType.
                 * @member {pb.game.chinese_poker_13.PatternType} patternType
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @instance
                 */
                CardPattern.prototype.patternType = 0;

                /**
                 * CardPattern patternPhaseList.
                 * @member {Array.<number|Long>} patternPhaseList
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @instance
                 */
                CardPattern.prototype.patternPhaseList = $util.emptyArray;

                /**
                 * CardPattern cardListNotInPattern.
                 * @member {Array.<pb.game.chinese_poker_13.ICard>} cardListNotInPattern
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @instance
                 */
                CardPattern.prototype.cardListNotInPattern = $util.emptyArray;

                /**
                 * CardPattern cardListLeft.
                 * @member {Array.<pb.game.chinese_poker_13.ICard>} cardListLeft
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @instance
                 */
                CardPattern.prototype.cardListLeft = $util.emptyArray;

                /**
                 * Creates a new CardPattern instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {pb.game.chinese_poker_13.ICardPattern=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.CardPattern} CardPattern instance
                 */
                CardPattern.create = function create(properties) {
                    return new CardPattern(properties);
                };

                /**
                 * Encodes the specified CardPattern message. Does not implicitly {@link pb.game.chinese_poker_13.CardPattern.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {pb.game.chinese_poker_13.ICardPattern} message CardPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CardPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.pb.game.chinese_poker_13.Card.encode(message.cardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.patternType != null && Object.hasOwnProperty.call(message, "patternType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.patternType);
                    if (message.patternPhaseList != null && message.patternPhaseList.length) {
                        writer.uint32(/* id 3, wireType 2 =*/26).fork();
                        for (var i = 0; i < message.patternPhaseList.length; ++i)
                            writer.int64(message.patternPhaseList[i]);
                        writer.ldelim();
                    }
                    if (message.cardListNotInPattern != null && message.cardListNotInPattern.length)
                        for (var i = 0; i < message.cardListNotInPattern.length; ++i)
                            $root.pb.game.chinese_poker_13.Card.encode(message.cardListNotInPattern[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.cardListLeft != null && message.cardListLeft.length)
                        for (var i = 0; i < message.cardListLeft.length; ++i)
                            $root.pb.game.chinese_poker_13.Card.encode(message.cardListLeft[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CardPattern message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.CardPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {pb.game.chinese_poker_13.ICardPattern} message CardPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CardPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CardPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.CardPattern} CardPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CardPattern.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.CardPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.patternType = reader.int32();
                            break;
                        case 3:
                            if (!(message.patternPhaseList && message.patternPhaseList.length))
                                message.patternPhaseList = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.patternPhaseList.push(reader.int64());
                            } else
                                message.patternPhaseList.push(reader.int64());
                            break;
                        case 4:
                            if (!(message.cardListNotInPattern && message.cardListNotInPattern.length))
                                message.cardListNotInPattern = [];
                            message.cardListNotInPattern.push($root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.cardListLeft && message.cardListLeft.length))
                                message.cardListLeft = [];
                            message.cardListLeft.push($root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CardPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.CardPattern} CardPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CardPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CardPattern message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CardPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Card.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    if (message.patternType != null && message.hasOwnProperty("patternType"))
                        switch (message.patternType) {
                        default:
                            return "patternType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 16:
                        case 17:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                            break;
                        }
                    if (message.patternPhaseList != null && message.hasOwnProperty("patternPhaseList")) {
                        if (!Array.isArray(message.patternPhaseList))
                            return "patternPhaseList: array expected";
                        for (var i = 0; i < message.patternPhaseList.length; ++i)
                            if (!$util.isInteger(message.patternPhaseList[i]) && !(message.patternPhaseList[i] && $util.isInteger(message.patternPhaseList[i].low) && $util.isInteger(message.patternPhaseList[i].high)))
                                return "patternPhaseList: integer|Long[] expected";
                    }
                    if (message.cardListNotInPattern != null && message.hasOwnProperty("cardListNotInPattern")) {
                        if (!Array.isArray(message.cardListNotInPattern))
                            return "cardListNotInPattern: array expected";
                        for (var i = 0; i < message.cardListNotInPattern.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Card.verify(message.cardListNotInPattern[i]);
                            if (error)
                                return "cardListNotInPattern." + error;
                        }
                    }
                    if (message.cardListLeft != null && message.hasOwnProperty("cardListLeft")) {
                        if (!Array.isArray(message.cardListLeft))
                            return "cardListLeft: array expected";
                        for (var i = 0; i < message.cardListLeft.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Card.verify(message.cardListLeft[i]);
                            if (error)
                                return "cardListLeft." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a CardPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.CardPattern} CardPattern
                 */
                CardPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.CardPattern)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.CardPattern();
                    if (object.cardList) {
                        if (!Array.isArray(object.cardList))
                            throw TypeError(".pb.game.chinese_poker_13.CardPattern.cardList: array expected");
                        message.cardList = [];
                        for (var i = 0; i < object.cardList.length; ++i) {
                            if (typeof object.cardList[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.CardPattern.cardList: object expected");
                            message.cardList[i] = $root.pb.game.chinese_poker_13.Card.fromObject(object.cardList[i]);
                        }
                    }
                    switch (object.patternType) {
                    case "CARD_NONE":
                    case 0:
                        message.patternType = 0;
                        break;
                    case "CARD_FAILED":
                    case 1:
                        message.patternType = 1;
                        break;
                    case "CARD_SEPERATE":
                    case 2:
                        message.patternType = 2;
                        break;
                    case "CARD_FAKE_ONE_PAIR":
                    case 3:
                        message.patternType = 3;
                        break;
                    case "CARD_ONE_PAIR":
                    case 4:
                        message.patternType = 4;
                        break;
                    case "CARD_TWO_PAIR":
                    case 6:
                        message.patternType = 6;
                        break;
                    case "CARD_FAKE_THREE_A_KIND":
                    case 7:
                        message.patternType = 7;
                        break;
                    case "CARD_THREE_A_KIND":
                    case 8:
                        message.patternType = 8;
                        break;
                    case "CARD_FAKE_STRAIGHT":
                    case 9:
                        message.patternType = 9;
                        break;
                    case "CARD_STRAIGHT":
                    case 10:
                        message.patternType = 10;
                        break;
                    case "CARD_FAKE_FLUSH":
                    case 11:
                        message.patternType = 11;
                        break;
                    case "CARD_FLUSH":
                    case 12:
                        message.patternType = 12;
                        break;
                    case "CARD_FAKE_FLUSH_ONE_PAIR":
                    case 13:
                        message.patternType = 13;
                        break;
                    case "CARD_FLUSH_ONE_PAIR":
                    case 14:
                        message.patternType = 14;
                        break;
                    case "CARD_FLUSH_TWO_PAIR":
                    case 16:
                        message.patternType = 16;
                        break;
                    case "CARD_FAKE_FLUSH_THREE_A_KIND":
                    case 17:
                        message.patternType = 17;
                        break;
                    case "CARD_FAKE_FULL_HOUSE":
                    case 19:
                        message.patternType = 19;
                        break;
                    case "CARD_FULL_HOUSE":
                    case 20:
                        message.patternType = 20;
                        break;
                    case "CARD_FAKE_FOUR_A_KIND":
                    case 21:
                        message.patternType = 21;
                        break;
                    case "CARD_FOUR_A_KIND":
                    case 22:
                        message.patternType = 22;
                        break;
                    case "CARD_FAKE_FLUSH_STRAIGHT":
                    case 23:
                        message.patternType = 23;
                        break;
                    case "CARD_FLUSH_STRAIGHT":
                    case 24:
                        message.patternType = 24;
                        break;
                    case "CARD_FAKE_FIVE_A_KIND":
                    case 25:
                        message.patternType = 25;
                        break;
                    case "CARD_FIVE_A_KIND":
                    case 26:
                        message.patternType = 26;
                        break;
                    }
                    if (object.patternPhaseList) {
                        if (!Array.isArray(object.patternPhaseList))
                            throw TypeError(".pb.game.chinese_poker_13.CardPattern.patternPhaseList: array expected");
                        message.patternPhaseList = [];
                        for (var i = 0; i < object.patternPhaseList.length; ++i)
                            if ($util.Long)
                                (message.patternPhaseList[i] = $util.Long.fromValue(object.patternPhaseList[i])).unsigned = false;
                            else if (typeof object.patternPhaseList[i] === "string")
                                message.patternPhaseList[i] = parseInt(object.patternPhaseList[i], 10);
                            else if (typeof object.patternPhaseList[i] === "number")
                                message.patternPhaseList[i] = object.patternPhaseList[i];
                            else if (typeof object.patternPhaseList[i] === "object")
                                message.patternPhaseList[i] = new $util.LongBits(object.patternPhaseList[i].low >>> 0, object.patternPhaseList[i].high >>> 0).toNumber();
                    }
                    if (object.cardListNotInPattern) {
                        if (!Array.isArray(object.cardListNotInPattern))
                            throw TypeError(".pb.game.chinese_poker_13.CardPattern.cardListNotInPattern: array expected");
                        message.cardListNotInPattern = [];
                        for (var i = 0; i < object.cardListNotInPattern.length; ++i) {
                            if (typeof object.cardListNotInPattern[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.CardPattern.cardListNotInPattern: object expected");
                            message.cardListNotInPattern[i] = $root.pb.game.chinese_poker_13.Card.fromObject(object.cardListNotInPattern[i]);
                        }
                    }
                    if (object.cardListLeft) {
                        if (!Array.isArray(object.cardListLeft))
                            throw TypeError(".pb.game.chinese_poker_13.CardPattern.cardListLeft: array expected");
                        message.cardListLeft = [];
                        for (var i = 0; i < object.cardListLeft.length; ++i) {
                            if (typeof object.cardListLeft[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.CardPattern.cardListLeft: object expected");
                            message.cardListLeft[i] = $root.pb.game.chinese_poker_13.Card.fromObject(object.cardListLeft[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CardPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @static
                 * @param {pb.game.chinese_poker_13.CardPattern} message CardPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CardPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.cardList = [];
                        object.patternPhaseList = [];
                        object.cardListNotInPattern = [];
                        object.cardListLeft = [];
                    }
                    if (options.defaults)
                        object.patternType = options.enums === String ? "CARD_NONE" : 0;
                    if (message.cardList && message.cardList.length) {
                        object.cardList = [];
                        for (var j = 0; j < message.cardList.length; ++j)
                            object.cardList[j] = $root.pb.game.chinese_poker_13.Card.toObject(message.cardList[j], options);
                    }
                    if (message.patternType != null && message.hasOwnProperty("patternType"))
                        object.patternType = options.enums === String ? $root.pb.game.chinese_poker_13.PatternType[message.patternType] : message.patternType;
                    if (message.patternPhaseList && message.patternPhaseList.length) {
                        object.patternPhaseList = [];
                        for (var j = 0; j < message.patternPhaseList.length; ++j)
                            if (typeof message.patternPhaseList[j] === "number")
                                object.patternPhaseList[j] = options.longs === String ? String(message.patternPhaseList[j]) : message.patternPhaseList[j];
                            else
                                object.patternPhaseList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.patternPhaseList[j]) : options.longs === Number ? new $util.LongBits(message.patternPhaseList[j].low >>> 0, message.patternPhaseList[j].high >>> 0).toNumber() : message.patternPhaseList[j];
                    }
                    if (message.cardListNotInPattern && message.cardListNotInPattern.length) {
                        object.cardListNotInPattern = [];
                        for (var j = 0; j < message.cardListNotInPattern.length; ++j)
                            object.cardListNotInPattern[j] = $root.pb.game.chinese_poker_13.Card.toObject(message.cardListNotInPattern[j], options);
                    }
                    if (message.cardListLeft && message.cardListLeft.length) {
                        object.cardListLeft = [];
                        for (var j = 0; j < message.cardListLeft.length; ++j)
                            object.cardListLeft[j] = $root.pb.game.chinese_poker_13.Card.toObject(message.cardListLeft[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this CardPattern to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.CardPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CardPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CardPattern;
            })();

            chinese_poker_13.RecommendDeck = (function() {

                /**
                 * Properties of a RecommendDeck.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IRecommendDeck
                 * @property {pb.game.chinese_poker_13.ICardPattern|null} [front] RecommendDeck front
                 * @property {pb.game.chinese_poker_13.ICardPattern|null} [middle] RecommendDeck middle
                 * @property {pb.game.chinese_poker_13.ICardPattern|null} [back] RecommendDeck back
                 * @property {Array.<pb.game.chinese_poker_13.ICard>|null} [cardListLeft] RecommendDeck cardListLeft
                 */

                /**
                 * Constructs a new RecommendDeck.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a RecommendDeck.
                 * @implements IRecommendDeck
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IRecommendDeck=} [properties] Properties to set
                 */
                function RecommendDeck(properties) {
                    this.cardListLeft = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RecommendDeck front.
                 * @member {pb.game.chinese_poker_13.ICardPattern|null|undefined} front
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @instance
                 */
                RecommendDeck.prototype.front = null;

                /**
                 * RecommendDeck middle.
                 * @member {pb.game.chinese_poker_13.ICardPattern|null|undefined} middle
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @instance
                 */
                RecommendDeck.prototype.middle = null;

                /**
                 * RecommendDeck back.
                 * @member {pb.game.chinese_poker_13.ICardPattern|null|undefined} back
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @instance
                 */
                RecommendDeck.prototype.back = null;

                /**
                 * RecommendDeck cardListLeft.
                 * @member {Array.<pb.game.chinese_poker_13.ICard>} cardListLeft
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @instance
                 */
                RecommendDeck.prototype.cardListLeft = $util.emptyArray;

                /**
                 * Creates a new RecommendDeck instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.IRecommendDeck=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.RecommendDeck} RecommendDeck instance
                 */
                RecommendDeck.create = function create(properties) {
                    return new RecommendDeck(properties);
                };

                /**
                 * Encodes the specified RecommendDeck message. Does not implicitly {@link pb.game.chinese_poker_13.RecommendDeck.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.IRecommendDeck} message RecommendDeck message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RecommendDeck.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.front != null && Object.hasOwnProperty.call(message, "front"))
                        $root.pb.game.chinese_poker_13.CardPattern.encode(message.front, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.middle != null && Object.hasOwnProperty.call(message, "middle"))
                        $root.pb.game.chinese_poker_13.CardPattern.encode(message.middle, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.back != null && Object.hasOwnProperty.call(message, "back"))
                        $root.pb.game.chinese_poker_13.CardPattern.encode(message.back, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.cardListLeft != null && message.cardListLeft.length)
                        for (var i = 0; i < message.cardListLeft.length; ++i)
                            $root.pb.game.chinese_poker_13.Card.encode(message.cardListLeft[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RecommendDeck message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.RecommendDeck.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.IRecommendDeck} message RecommendDeck message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RecommendDeck.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RecommendDeck message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.RecommendDeck} RecommendDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RecommendDeck.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.RecommendDeck();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.front = $root.pb.game.chinese_poker_13.CardPattern.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.middle = $root.pb.game.chinese_poker_13.CardPattern.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.back = $root.pb.game.chinese_poker_13.CardPattern.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.cardListLeft && message.cardListLeft.length))
                                message.cardListLeft = [];
                            message.cardListLeft.push($root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RecommendDeck message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.RecommendDeck} RecommendDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RecommendDeck.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RecommendDeck message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RecommendDeck.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.front != null && message.hasOwnProperty("front")) {
                        var error = $root.pb.game.chinese_poker_13.CardPattern.verify(message.front);
                        if (error)
                            return "front." + error;
                    }
                    if (message.middle != null && message.hasOwnProperty("middle")) {
                        var error = $root.pb.game.chinese_poker_13.CardPattern.verify(message.middle);
                        if (error)
                            return "middle." + error;
                    }
                    if (message.back != null && message.hasOwnProperty("back")) {
                        var error = $root.pb.game.chinese_poker_13.CardPattern.verify(message.back);
                        if (error)
                            return "back." + error;
                    }
                    if (message.cardListLeft != null && message.hasOwnProperty("cardListLeft")) {
                        if (!Array.isArray(message.cardListLeft))
                            return "cardListLeft: array expected";
                        for (var i = 0; i < message.cardListLeft.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Card.verify(message.cardListLeft[i]);
                            if (error)
                                return "cardListLeft." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RecommendDeck message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.RecommendDeck} RecommendDeck
                 */
                RecommendDeck.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.RecommendDeck)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.RecommendDeck();
                    if (object.front != null) {
                        if (typeof object.front !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.RecommendDeck.front: object expected");
                        message.front = $root.pb.game.chinese_poker_13.CardPattern.fromObject(object.front);
                    }
                    if (object.middle != null) {
                        if (typeof object.middle !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.RecommendDeck.middle: object expected");
                        message.middle = $root.pb.game.chinese_poker_13.CardPattern.fromObject(object.middle);
                    }
                    if (object.back != null) {
                        if (typeof object.back !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.RecommendDeck.back: object expected");
                        message.back = $root.pb.game.chinese_poker_13.CardPattern.fromObject(object.back);
                    }
                    if (object.cardListLeft) {
                        if (!Array.isArray(object.cardListLeft))
                            throw TypeError(".pb.game.chinese_poker_13.RecommendDeck.cardListLeft: array expected");
                        message.cardListLeft = [];
                        for (var i = 0; i < object.cardListLeft.length; ++i) {
                            if (typeof object.cardListLeft[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.RecommendDeck.cardListLeft: object expected");
                            message.cardListLeft[i] = $root.pb.game.chinese_poker_13.Card.fromObject(object.cardListLeft[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RecommendDeck message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.RecommendDeck} message RecommendDeck
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RecommendDeck.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.cardListLeft = [];
                    if (options.defaults) {
                        object.front = null;
                        object.middle = null;
                        object.back = null;
                    }
                    if (message.front != null && message.hasOwnProperty("front"))
                        object.front = $root.pb.game.chinese_poker_13.CardPattern.toObject(message.front, options);
                    if (message.middle != null && message.hasOwnProperty("middle"))
                        object.middle = $root.pb.game.chinese_poker_13.CardPattern.toObject(message.middle, options);
                    if (message.back != null && message.hasOwnProperty("back"))
                        object.back = $root.pb.game.chinese_poker_13.CardPattern.toObject(message.back, options);
                    if (message.cardListLeft && message.cardListLeft.length) {
                        object.cardListLeft = [];
                        for (var j = 0; j < message.cardListLeft.length; ++j)
                            object.cardListLeft[j] = $root.pb.game.chinese_poker_13.Card.toObject(message.cardListLeft[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this RecommendDeck to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.RecommendDeck
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RecommendDeck.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RecommendDeck;
            })();

            chinese_poker_13.PlayerDeck = (function() {

                /**
                 * Properties of a PlayerDeck.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IPlayerDeck
                 * @property {Array.<pb.game.chinese_poker_13.ICard>|null} [cardList] PlayerDeck cardList
                 * @property {pb.game.chinese_poker_13.ICardPattern|null} [front] PlayerDeck front
                 * @property {pb.game.chinese_poker_13.ICardPattern|null} [middle] PlayerDeck middle
                 * @property {pb.game.chinese_poker_13.ICardPattern|null} [back] PlayerDeck back
                 * @property {Array.<pb.game.chinese_poker_13.ICard>|null} [cardListLeft] PlayerDeck cardListLeft
                 * @property {Array.<pb.game.chinese_poker_13.IRecommendDeck>|null} [recommendDeckList] PlayerDeck recommendDeckList
                 */

                /**
                 * Constructs a new PlayerDeck.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a PlayerDeck.
                 * @implements IPlayerDeck
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IPlayerDeck=} [properties] Properties to set
                 */
                function PlayerDeck(properties) {
                    this.cardList = [];
                    this.cardListLeft = [];
                    this.recommendDeckList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PlayerDeck cardList.
                 * @member {Array.<pb.game.chinese_poker_13.ICard>} cardList
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @instance
                 */
                PlayerDeck.prototype.cardList = $util.emptyArray;

                /**
                 * PlayerDeck front.
                 * @member {pb.game.chinese_poker_13.ICardPattern|null|undefined} front
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @instance
                 */
                PlayerDeck.prototype.front = null;

                /**
                 * PlayerDeck middle.
                 * @member {pb.game.chinese_poker_13.ICardPattern|null|undefined} middle
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @instance
                 */
                PlayerDeck.prototype.middle = null;

                /**
                 * PlayerDeck back.
                 * @member {pb.game.chinese_poker_13.ICardPattern|null|undefined} back
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @instance
                 */
                PlayerDeck.prototype.back = null;

                /**
                 * PlayerDeck cardListLeft.
                 * @member {Array.<pb.game.chinese_poker_13.ICard>} cardListLeft
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @instance
                 */
                PlayerDeck.prototype.cardListLeft = $util.emptyArray;

                /**
                 * PlayerDeck recommendDeckList.
                 * @member {Array.<pb.game.chinese_poker_13.IRecommendDeck>} recommendDeckList
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @instance
                 */
                PlayerDeck.prototype.recommendDeckList = $util.emptyArray;

                /**
                 * Creates a new PlayerDeck instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.IPlayerDeck=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.PlayerDeck} PlayerDeck instance
                 */
                PlayerDeck.create = function create(properties) {
                    return new PlayerDeck(properties);
                };

                /**
                 * Encodes the specified PlayerDeck message. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeck.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.IPlayerDeck} message PlayerDeck message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerDeck.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.pb.game.chinese_poker_13.Card.encode(message.cardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.front != null && Object.hasOwnProperty.call(message, "front"))
                        $root.pb.game.chinese_poker_13.CardPattern.encode(message.front, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.middle != null && Object.hasOwnProperty.call(message, "middle"))
                        $root.pb.game.chinese_poker_13.CardPattern.encode(message.middle, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.back != null && Object.hasOwnProperty.call(message, "back"))
                        $root.pb.game.chinese_poker_13.CardPattern.encode(message.back, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.cardListLeft != null && message.cardListLeft.length)
                        for (var i = 0; i < message.cardListLeft.length; ++i)
                            $root.pb.game.chinese_poker_13.Card.encode(message.cardListLeft[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.recommendDeckList != null && message.recommendDeckList.length)
                        for (var i = 0; i < message.recommendDeckList.length; ++i)
                            $root.pb.game.chinese_poker_13.RecommendDeck.encode(message.recommendDeckList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PlayerDeck message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeck.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.IPlayerDeck} message PlayerDeck message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerDeck.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PlayerDeck message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.PlayerDeck} PlayerDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerDeck.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.PlayerDeck();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.front = $root.pb.game.chinese_poker_13.CardPattern.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.middle = $root.pb.game.chinese_poker_13.CardPattern.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.back = $root.pb.game.chinese_poker_13.CardPattern.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.cardListLeft && message.cardListLeft.length))
                                message.cardListLeft = [];
                            message.cardListLeft.push($root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.recommendDeckList && message.recommendDeckList.length))
                                message.recommendDeckList = [];
                            message.recommendDeckList.push($root.pb.game.chinese_poker_13.RecommendDeck.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PlayerDeck message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.PlayerDeck} PlayerDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerDeck.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PlayerDeck message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlayerDeck.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Card.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    if (message.front != null && message.hasOwnProperty("front")) {
                        var error = $root.pb.game.chinese_poker_13.CardPattern.verify(message.front);
                        if (error)
                            return "front." + error;
                    }
                    if (message.middle != null && message.hasOwnProperty("middle")) {
                        var error = $root.pb.game.chinese_poker_13.CardPattern.verify(message.middle);
                        if (error)
                            return "middle." + error;
                    }
                    if (message.back != null && message.hasOwnProperty("back")) {
                        var error = $root.pb.game.chinese_poker_13.CardPattern.verify(message.back);
                        if (error)
                            return "back." + error;
                    }
                    if (message.cardListLeft != null && message.hasOwnProperty("cardListLeft")) {
                        if (!Array.isArray(message.cardListLeft))
                            return "cardListLeft: array expected";
                        for (var i = 0; i < message.cardListLeft.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Card.verify(message.cardListLeft[i]);
                            if (error)
                                return "cardListLeft." + error;
                        }
                    }
                    if (message.recommendDeckList != null && message.hasOwnProperty("recommendDeckList")) {
                        if (!Array.isArray(message.recommendDeckList))
                            return "recommendDeckList: array expected";
                        for (var i = 0; i < message.recommendDeckList.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.RecommendDeck.verify(message.recommendDeckList[i]);
                            if (error)
                                return "recommendDeckList." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a PlayerDeck message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.PlayerDeck} PlayerDeck
                 */
                PlayerDeck.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.PlayerDeck)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.PlayerDeck();
                    if (object.cardList) {
                        if (!Array.isArray(object.cardList))
                            throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.cardList: array expected");
                        message.cardList = [];
                        for (var i = 0; i < object.cardList.length; ++i) {
                            if (typeof object.cardList[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.cardList: object expected");
                            message.cardList[i] = $root.pb.game.chinese_poker_13.Card.fromObject(object.cardList[i]);
                        }
                    }
                    if (object.front != null) {
                        if (typeof object.front !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.front: object expected");
                        message.front = $root.pb.game.chinese_poker_13.CardPattern.fromObject(object.front);
                    }
                    if (object.middle != null) {
                        if (typeof object.middle !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.middle: object expected");
                        message.middle = $root.pb.game.chinese_poker_13.CardPattern.fromObject(object.middle);
                    }
                    if (object.back != null) {
                        if (typeof object.back !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.back: object expected");
                        message.back = $root.pb.game.chinese_poker_13.CardPattern.fromObject(object.back);
                    }
                    if (object.cardListLeft) {
                        if (!Array.isArray(object.cardListLeft))
                            throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.cardListLeft: array expected");
                        message.cardListLeft = [];
                        for (var i = 0; i < object.cardListLeft.length; ++i) {
                            if (typeof object.cardListLeft[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.cardListLeft: object expected");
                            message.cardListLeft[i] = $root.pb.game.chinese_poker_13.Card.fromObject(object.cardListLeft[i]);
                        }
                    }
                    if (object.recommendDeckList) {
                        if (!Array.isArray(object.recommendDeckList))
                            throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.recommendDeckList: array expected");
                        message.recommendDeckList = [];
                        for (var i = 0; i < object.recommendDeckList.length; ++i) {
                            if (typeof object.recommendDeckList[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.PlayerDeck.recommendDeckList: object expected");
                            message.recommendDeckList[i] = $root.pb.game.chinese_poker_13.RecommendDeck.fromObject(object.recommendDeckList[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PlayerDeck message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @static
                 * @param {pb.game.chinese_poker_13.PlayerDeck} message PlayerDeck
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlayerDeck.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.cardList = [];
                        object.cardListLeft = [];
                        object.recommendDeckList = [];
                    }
                    if (options.defaults) {
                        object.front = null;
                        object.middle = null;
                        object.back = null;
                    }
                    if (message.cardList && message.cardList.length) {
                        object.cardList = [];
                        for (var j = 0; j < message.cardList.length; ++j)
                            object.cardList[j] = $root.pb.game.chinese_poker_13.Card.toObject(message.cardList[j], options);
                    }
                    if (message.front != null && message.hasOwnProperty("front"))
                        object.front = $root.pb.game.chinese_poker_13.CardPattern.toObject(message.front, options);
                    if (message.middle != null && message.hasOwnProperty("middle"))
                        object.middle = $root.pb.game.chinese_poker_13.CardPattern.toObject(message.middle, options);
                    if (message.back != null && message.hasOwnProperty("back"))
                        object.back = $root.pb.game.chinese_poker_13.CardPattern.toObject(message.back, options);
                    if (message.cardListLeft && message.cardListLeft.length) {
                        object.cardListLeft = [];
                        for (var j = 0; j < message.cardListLeft.length; ++j)
                            object.cardListLeft[j] = $root.pb.game.chinese_poker_13.Card.toObject(message.cardListLeft[j], options);
                    }
                    if (message.recommendDeckList && message.recommendDeckList.length) {
                        object.recommendDeckList = [];
                        for (var j = 0; j < message.recommendDeckList.length; ++j)
                            object.recommendDeckList[j] = $root.pb.game.chinese_poker_13.RecommendDeck.toObject(message.recommendDeckList[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this PlayerDeck to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.PlayerDeck
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlayerDeck.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PlayerDeck;
            })();

            /**
             * RoomState enum.
             * @name pb.game.chinese_poker_13.RoomState
             * @enum {number}
             * @property {number} RS_NONE=0 RS_NONE value
             * @property {number} RS_FIRST_LAUNCH=101 RS_FIRST_LAUNCH value
             * @property {number} RS_FIRST_LAUNCH_COUNT_DOWN=102 RS_FIRST_LAUNCH_COUNT_DOWN value
             * @property {number} RS_WAIT_FOR_PLAYER_JOIN=103 RS_WAIT_FOR_PLAYER_JOIN value
             * @property {number} RS_WAIT_FOR_PLAYER_JOIN_COUNT_DOWN=104 RS_WAIT_FOR_PLAYER_JOIN_COUNT_DOWN value
             * @property {number} RS_PREPARE_TO_START_GAME=105 RS_PREPARE_TO_START_GAME value
             * @property {number} RS_PREPARE_TO_START_ROUND=106 RS_PREPARE_TO_START_ROUND value
             * @property {number} RS_START_ROUND=107 RS_START_ROUND value
             * @property {number} RS_SHUFFLE_CARD=108 RS_SHUFFLE_CARD value
             * @property {number} RS_SHUFFLE_CARD_COUNT_DOWN=109 RS_SHUFFLE_CARD_COUNT_DOWN value
             * @property {number} RS_DRAW_RANDOM_CARD=110 RS_DRAW_RANDOM_CARD value
             * @property {number} RS_DRAW_RANDOM_CARD_COUNT_DOWN=111 RS_DRAW_RANDOM_CARD_COUNT_DOWN value
             * @property {number} RS_DEAL_CARD=112 RS_DEAL_CARD value
             * @property {number} RS_DEAL_CARD_COUNT_DOWN=113 RS_DEAL_CARD_COUNT_DOWN value
             * @property {number} RS_WAIT_FOR_PLAYER_SORT_CARD=114 RS_WAIT_FOR_PLAYER_SORT_CARD value
             * @property {number} RS_WAIT_FOR_PLAYER_SORT_CARD_COUNT_DOWN=115 RS_WAIT_FOR_PLAYER_SORT_CARD_COUNT_DOWN value
             * @property {number} RS_WAIT_FOR_PLAYER_DECK=116 RS_WAIT_FOR_PLAYER_DECK value
             * @property {number} RS_WAIT_FOR_PLAYER_DECK_COUNT_DOWN=117 RS_WAIT_FOR_PLAYER_DECK_COUNT_DOWN value
             * @property {number} RS_CHECK_PLAYER_DECK=118 RS_CHECK_PLAYER_DECK value
             * @property {number} RS_COMPARE_PLAYER_DECK=119 RS_COMPARE_PLAYER_DECK value
             * @property {number} RS_WAIT_FOR_SHOW_RESULT_COUNT_DOWN=120 RS_WAIT_FOR_SHOW_RESULT_COUNT_DOWN value
             * @property {number} RS_END_ROUND=121 RS_END_ROUND value
             * @property {number} RS_SHOW_END_ROUND_SETTLE_RESULT=122 RS_SHOW_END_ROUND_SETTLE_RESULT value
             * @property {number} RS_SHOW_END_ROUND_SETTLE_RESULT_COUNT_DOWN=123 RS_SHOW_END_ROUND_SETTLE_RESULT_COUNT_DOWN value
             * @property {number} RS_CHECK_END_GAME=124 RS_CHECK_END_GAME value
             * @property {number} RS_END_GAME=125 RS_END_GAME value
             * @property {number} RS_SHOW_END_GAME_SETTLE_RESULT=126 RS_SHOW_END_GAME_SETTLE_RESULT value
             * @property {number} RS_SHOW_END_GAME_SETTLE_RESULT_COUNT_DOWN=127 RS_SHOW_END_GAME_SETTLE_RESULT_COUNT_DOWN value
             * @property {number} RS_WAIT_FOR_PLAYER_CONTINUE=128 RS_WAIT_FOR_PLAYER_CONTINUE value
             * @property {number} RS_WAIT_FOR_PLAYER_CONTINUE_COUNT_DOWN=129 RS_WAIT_FOR_PLAYER_CONTINUE_COUNT_DOWN value
             * @property {number} RS_REMOVE_ALL_PLAYER=130 RS_REMOVE_ALL_PLAYER value
             * @property {number} RS_RESET=131 RS_RESET value
             * @property {number} RS_JOIN_PLAYER_HAS_REGISTERD=132 RS_JOIN_PLAYER_HAS_REGISTERD value
             * @property {number} RS_PREPARE_TO_CLOSE=201 RS_PREPARE_TO_CLOSE value
             */
            chinese_poker_13.RoomState = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "RS_NONE"] = 0;
                values[valuesById[101] = "RS_FIRST_LAUNCH"] = 101;
                values[valuesById[102] = "RS_FIRST_LAUNCH_COUNT_DOWN"] = 102;
                values[valuesById[103] = "RS_WAIT_FOR_PLAYER_JOIN"] = 103;
                values[valuesById[104] = "RS_WAIT_FOR_PLAYER_JOIN_COUNT_DOWN"] = 104;
                values[valuesById[105] = "RS_PREPARE_TO_START_GAME"] = 105;
                values[valuesById[106] = "RS_PREPARE_TO_START_ROUND"] = 106;
                values[valuesById[107] = "RS_START_ROUND"] = 107;
                values[valuesById[108] = "RS_SHUFFLE_CARD"] = 108;
                values[valuesById[109] = "RS_SHUFFLE_CARD_COUNT_DOWN"] = 109;
                values[valuesById[110] = "RS_DRAW_RANDOM_CARD"] = 110;
                values[valuesById[111] = "RS_DRAW_RANDOM_CARD_COUNT_DOWN"] = 111;
                values[valuesById[112] = "RS_DEAL_CARD"] = 112;
                values[valuesById[113] = "RS_DEAL_CARD_COUNT_DOWN"] = 113;
                values[valuesById[114] = "RS_WAIT_FOR_PLAYER_SORT_CARD"] = 114;
                values[valuesById[115] = "RS_WAIT_FOR_PLAYER_SORT_CARD_COUNT_DOWN"] = 115;
                values[valuesById[116] = "RS_WAIT_FOR_PLAYER_DECK"] = 116;
                values[valuesById[117] = "RS_WAIT_FOR_PLAYER_DECK_COUNT_DOWN"] = 117;
                values[valuesById[118] = "RS_CHECK_PLAYER_DECK"] = 118;
                values[valuesById[119] = "RS_COMPARE_PLAYER_DECK"] = 119;
                values[valuesById[120] = "RS_WAIT_FOR_SHOW_RESULT_COUNT_DOWN"] = 120;
                values[valuesById[121] = "RS_END_ROUND"] = 121;
                values[valuesById[122] = "RS_SHOW_END_ROUND_SETTLE_RESULT"] = 122;
                values[valuesById[123] = "RS_SHOW_END_ROUND_SETTLE_RESULT_COUNT_DOWN"] = 123;
                values[valuesById[124] = "RS_CHECK_END_GAME"] = 124;
                values[valuesById[125] = "RS_END_GAME"] = 125;
                values[valuesById[126] = "RS_SHOW_END_GAME_SETTLE_RESULT"] = 126;
                values[valuesById[127] = "RS_SHOW_END_GAME_SETTLE_RESULT_COUNT_DOWN"] = 127;
                values[valuesById[128] = "RS_WAIT_FOR_PLAYER_CONTINUE"] = 128;
                values[valuesById[129] = "RS_WAIT_FOR_PLAYER_CONTINUE_COUNT_DOWN"] = 129;
                values[valuesById[130] = "RS_REMOVE_ALL_PLAYER"] = 130;
                values[valuesById[131] = "RS_RESET"] = 131;
                values[valuesById[132] = "RS_JOIN_PLAYER_HAS_REGISTERD"] = 132;
                values[valuesById[201] = "RS_PREPARE_TO_CLOSE"] = 201;
                return values;
            })();

            chinese_poker_13.Room = (function() {

                /**
                 * Properties of a Room.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IRoom
                 * @property {string|null} [id] Room id
                 * @property {string|null} [name] Room name
                 * @property {number|null} [type] Room type
                 * @property {number|null} [minCreditToEnter] Room minCreditToEnter
                 * @property {number|null} [minCreditToBet] Room minCreditToBet
                 * @property {number|null} [sort] Room sort
                 * @property {number|null} [status] Room status
                 * @property {pb.game.chinese_poker_13.RoomState|null} [state] Room state
                 * @property {number|null} [maxPlayer] Room maxPlayer
                 * @property {number|null} [minPlayer] Room minPlayer
                 * @property {number|null} [maxSpectator] Room maxSpectator
                 * @property {Object.<string,pb.IPlayer>|null} [playerInfoMapById] Room playerInfoMapById
                 * @property {Object.<string,pb.IPlayer>|null} [playerInfoMapByPos] Room playerInfoMapByPos
                 * @property {Object.<string,pb.IPlayer>|null} [spectatorInfoMapById] Room spectatorInfoMapById
                 * @property {pb.game.chinese_poker_13.IGame|null} [game] Room game
                 * @property {number|null} [countdown] Room countdown
                 * @property {boolean|null} [isTimeoutWaitForPlayerDeckExtended] Room isTimeoutWaitForPlayerDeckExtended
                 * @property {number|null} [maxRound] Room maxRound
                 */

                /**
                 * Constructs a new Room.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a Room.
                 * @implements IRoom
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IRoom=} [properties] Properties to set
                 */
                function Room(properties) {
                    this.playerInfoMapById = {};
                    this.playerInfoMapByPos = {};
                    this.spectatorInfoMapById = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Room id.
                 * @member {string} id
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.id = "";

                /**
                 * Room name.
                 * @member {string} name
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.name = "";

                /**
                 * Room type.
                 * @member {number} type
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.type = 0;

                /**
                 * Room minCreditToEnter.
                 * @member {number} minCreditToEnter
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.minCreditToEnter = 0;

                /**
                 * Room minCreditToBet.
                 * @member {number} minCreditToBet
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.minCreditToBet = 0;

                /**
                 * Room sort.
                 * @member {number} sort
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.sort = 0;

                /**
                 * Room status.
                 * @member {number} status
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.status = 0;

                /**
                 * Room state.
                 * @member {pb.game.chinese_poker_13.RoomState} state
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.state = 0;

                /**
                 * Room maxPlayer.
                 * @member {number} maxPlayer
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.maxPlayer = 0;

                /**
                 * Room minPlayer.
                 * @member {number} minPlayer
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.minPlayer = 0;

                /**
                 * Room maxSpectator.
                 * @member {number} maxSpectator
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.maxSpectator = 0;

                /**
                 * Room playerInfoMapById.
                 * @member {Object.<string,pb.IPlayer>} playerInfoMapById
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.playerInfoMapById = $util.emptyObject;

                /**
                 * Room playerInfoMapByPos.
                 * @member {Object.<string,pb.IPlayer>} playerInfoMapByPos
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.playerInfoMapByPos = $util.emptyObject;

                /**
                 * Room spectatorInfoMapById.
                 * @member {Object.<string,pb.IPlayer>} spectatorInfoMapById
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.spectatorInfoMapById = $util.emptyObject;

                /**
                 * Room game.
                 * @member {pb.game.chinese_poker_13.IGame|null|undefined} game
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.game = null;

                /**
                 * Room countdown.
                 * @member {number} countdown
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.countdown = 0;

                /**
                 * Room isTimeoutWaitForPlayerDeckExtended.
                 * @member {boolean} isTimeoutWaitForPlayerDeckExtended
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.isTimeoutWaitForPlayerDeckExtended = false;

                /**
                 * Room maxRound.
                 * @member {number} maxRound
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 */
                Room.prototype.maxRound = 0;

                /**
                 * Creates a new Room instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {pb.game.chinese_poker_13.IRoom=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.Room} Room instance
                 */
                Room.create = function create(properties) {
                    return new Room(properties);
                };

                /**
                 * Encodes the specified Room message. Does not implicitly {@link pb.game.chinese_poker_13.Room.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {pb.game.chinese_poker_13.IRoom} message Room message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Room.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                    if (message.minCreditToEnter != null && Object.hasOwnProperty.call(message, "minCreditToEnter"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.minCreditToEnter);
                    if (message.minCreditToBet != null && Object.hasOwnProperty.call(message, "minCreditToBet"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.minCreditToBet);
                    if (message.sort != null && Object.hasOwnProperty.call(message, "sort"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sort);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
                    if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.state);
                    if (message.maxPlayer != null && Object.hasOwnProperty.call(message, "maxPlayer"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.maxPlayer);
                    if (message.minPlayer != null && Object.hasOwnProperty.call(message, "minPlayer"))
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.minPlayer);
                    if (message.maxSpectator != null && Object.hasOwnProperty.call(message, "maxSpectator"))
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.maxSpectator);
                    if (message.playerInfoMapById != null && Object.hasOwnProperty.call(message, "playerInfoMapById"))
                        for (var keys = Object.keys(message.playerInfoMapById), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.pb.Player.encode(message.playerInfoMapById[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.playerInfoMapByPos != null && Object.hasOwnProperty.call(message, "playerInfoMapByPos"))
                        for (var keys = Object.keys(message.playerInfoMapByPos), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 13, wireType 2 =*/106).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                            $root.pb.Player.encode(message.playerInfoMapByPos[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.spectatorInfoMapById != null && Object.hasOwnProperty.call(message, "spectatorInfoMapById"))
                        for (var keys = Object.keys(message.spectatorInfoMapById), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 14, wireType 2 =*/114).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.pb.Player.encode(message.spectatorInfoMapById[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                        $root.pb.game.chinese_poker_13.Game.encode(message.game, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                    if (message.countdown != null && Object.hasOwnProperty.call(message, "countdown"))
                        writer.uint32(/* id 16, wireType 0 =*/128).int32(message.countdown);
                    if (message.isTimeoutWaitForPlayerDeckExtended != null && Object.hasOwnProperty.call(message, "isTimeoutWaitForPlayerDeckExtended"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.isTimeoutWaitForPlayerDeckExtended);
                    if (message.maxRound != null && Object.hasOwnProperty.call(message, "maxRound"))
                        writer.uint32(/* id 18, wireType 0 =*/144).int32(message.maxRound);
                    return writer;
                };

                /**
                 * Encodes the specified Room message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Room.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {pb.game.chinese_poker_13.IRoom} message Room message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Room.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Room message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.Room} Room
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Room.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.Room(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.type = reader.int32();
                            break;
                        case 4:
                            message.minCreditToEnter = reader.int32();
                            break;
                        case 5:
                            message.minCreditToBet = reader.int32();
                            break;
                        case 6:
                            message.sort = reader.int32();
                            break;
                        case 7:
                            message.status = reader.int32();
                            break;
                        case 8:
                            message.state = reader.int32();
                            break;
                        case 9:
                            message.maxPlayer = reader.int32();
                            break;
                        case 10:
                            message.minPlayer = reader.int32();
                            break;
                        case 11:
                            message.maxSpectator = reader.int32();
                            break;
                        case 12:
                            if (message.playerInfoMapById === $util.emptyObject)
                                message.playerInfoMapById = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.pb.Player.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.playerInfoMapById[key] = value;
                            break;
                        case 13:
                            if (message.playerInfoMapByPos === $util.emptyObject)
                                message.playerInfoMapByPos = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.int32();
                                    break;
                                case 2:
                                    value = $root.pb.Player.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.playerInfoMapByPos[key] = value;
                            break;
                        case 14:
                            if (message.spectatorInfoMapById === $util.emptyObject)
                                message.spectatorInfoMapById = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.pb.Player.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.spectatorInfoMapById[key] = value;
                            break;
                        case 15:
                            message.game = $root.pb.game.chinese_poker_13.Game.decode(reader, reader.uint32());
                            break;
                        case 16:
                            message.countdown = reader.int32();
                            break;
                        case 17:
                            message.isTimeoutWaitForPlayerDeckExtended = reader.bool();
                            break;
                        case 18:
                            message.maxRound = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Room message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.Room} Room
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Room.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Room message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Room.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isInteger(message.type))
                            return "type: integer expected";
                    if (message.minCreditToEnter != null && message.hasOwnProperty("minCreditToEnter"))
                        if (!$util.isInteger(message.minCreditToEnter))
                            return "minCreditToEnter: integer expected";
                    if (message.minCreditToBet != null && message.hasOwnProperty("minCreditToBet"))
                        if (!$util.isInteger(message.minCreditToBet))
                            return "minCreditToBet: integer expected";
                    if (message.sort != null && message.hasOwnProperty("sort"))
                        if (!$util.isInteger(message.sort))
                            return "sort: integer expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        if (!$util.isInteger(message.status))
                            return "status: integer expected";
                    if (message.state != null && message.hasOwnProperty("state"))
                        switch (message.state) {
                        default:
                            return "state: enum value expected";
                        case 0:
                        case 101:
                        case 102:
                        case 103:
                        case 104:
                        case 105:
                        case 106:
                        case 107:
                        case 108:
                        case 109:
                        case 110:
                        case 111:
                        case 112:
                        case 113:
                        case 114:
                        case 115:
                        case 116:
                        case 117:
                        case 118:
                        case 119:
                        case 120:
                        case 121:
                        case 122:
                        case 123:
                        case 124:
                        case 125:
                        case 126:
                        case 127:
                        case 128:
                        case 129:
                        case 130:
                        case 131:
                        case 132:
                        case 201:
                            break;
                        }
                    if (message.maxPlayer != null && message.hasOwnProperty("maxPlayer"))
                        if (!$util.isInteger(message.maxPlayer))
                            return "maxPlayer: integer expected";
                    if (message.minPlayer != null && message.hasOwnProperty("minPlayer"))
                        if (!$util.isInteger(message.minPlayer))
                            return "minPlayer: integer expected";
                    if (message.maxSpectator != null && message.hasOwnProperty("maxSpectator"))
                        if (!$util.isInteger(message.maxSpectator))
                            return "maxSpectator: integer expected";
                    if (message.playerInfoMapById != null && message.hasOwnProperty("playerInfoMapById")) {
                        if (!$util.isObject(message.playerInfoMapById))
                            return "playerInfoMapById: object expected";
                        var key = Object.keys(message.playerInfoMapById);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.pb.Player.verify(message.playerInfoMapById[key[i]]);
                            if (error)
                                return "playerInfoMapById." + error;
                        }
                    }
                    if (message.playerInfoMapByPos != null && message.hasOwnProperty("playerInfoMapByPos")) {
                        if (!$util.isObject(message.playerInfoMapByPos))
                            return "playerInfoMapByPos: object expected";
                        var key = Object.keys(message.playerInfoMapByPos);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "playerInfoMapByPos: integer key{k:int32} expected";
                            {
                                var error = $root.pb.Player.verify(message.playerInfoMapByPos[key[i]]);
                                if (error)
                                    return "playerInfoMapByPos." + error;
                            }
                        }
                    }
                    if (message.spectatorInfoMapById != null && message.hasOwnProperty("spectatorInfoMapById")) {
                        if (!$util.isObject(message.spectatorInfoMapById))
                            return "spectatorInfoMapById: object expected";
                        var key = Object.keys(message.spectatorInfoMapById);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.pb.Player.verify(message.spectatorInfoMapById[key[i]]);
                            if (error)
                                return "spectatorInfoMapById." + error;
                        }
                    }
                    if (message.game != null && message.hasOwnProperty("game")) {
                        var error = $root.pb.game.chinese_poker_13.Game.verify(message.game);
                        if (error)
                            return "game." + error;
                    }
                    if (message.countdown != null && message.hasOwnProperty("countdown"))
                        if (!$util.isInteger(message.countdown))
                            return "countdown: integer expected";
                    if (message.isTimeoutWaitForPlayerDeckExtended != null && message.hasOwnProperty("isTimeoutWaitForPlayerDeckExtended"))
                        if (typeof message.isTimeoutWaitForPlayerDeckExtended !== "boolean")
                            return "isTimeoutWaitForPlayerDeckExtended: boolean expected";
                    if (message.maxRound != null && message.hasOwnProperty("maxRound"))
                        if (!$util.isInteger(message.maxRound))
                            return "maxRound: integer expected";
                    return null;
                };

                /**
                 * Creates a Room message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.Room} Room
                 */
                Room.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.Room)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.Room();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.type != null)
                        message.type = object.type | 0;
                    if (object.minCreditToEnter != null)
                        message.minCreditToEnter = object.minCreditToEnter | 0;
                    if (object.minCreditToBet != null)
                        message.minCreditToBet = object.minCreditToBet | 0;
                    if (object.sort != null)
                        message.sort = object.sort | 0;
                    if (object.status != null)
                        message.status = object.status | 0;
                    switch (object.state) {
                    case "RS_NONE":
                    case 0:
                        message.state = 0;
                        break;
                    case "RS_FIRST_LAUNCH":
                    case 101:
                        message.state = 101;
                        break;
                    case "RS_FIRST_LAUNCH_COUNT_DOWN":
                    case 102:
                        message.state = 102;
                        break;
                    case "RS_WAIT_FOR_PLAYER_JOIN":
                    case 103:
                        message.state = 103;
                        break;
                    case "RS_WAIT_FOR_PLAYER_JOIN_COUNT_DOWN":
                    case 104:
                        message.state = 104;
                        break;
                    case "RS_PREPARE_TO_START_GAME":
                    case 105:
                        message.state = 105;
                        break;
                    case "RS_PREPARE_TO_START_ROUND":
                    case 106:
                        message.state = 106;
                        break;
                    case "RS_START_ROUND":
                    case 107:
                        message.state = 107;
                        break;
                    case "RS_SHUFFLE_CARD":
                    case 108:
                        message.state = 108;
                        break;
                    case "RS_SHUFFLE_CARD_COUNT_DOWN":
                    case 109:
                        message.state = 109;
                        break;
                    case "RS_DRAW_RANDOM_CARD":
                    case 110:
                        message.state = 110;
                        break;
                    case "RS_DRAW_RANDOM_CARD_COUNT_DOWN":
                    case 111:
                        message.state = 111;
                        break;
                    case "RS_DEAL_CARD":
                    case 112:
                        message.state = 112;
                        break;
                    case "RS_DEAL_CARD_COUNT_DOWN":
                    case 113:
                        message.state = 113;
                        break;
                    case "RS_WAIT_FOR_PLAYER_SORT_CARD":
                    case 114:
                        message.state = 114;
                        break;
                    case "RS_WAIT_FOR_PLAYER_SORT_CARD_COUNT_DOWN":
                    case 115:
                        message.state = 115;
                        break;
                    case "RS_WAIT_FOR_PLAYER_DECK":
                    case 116:
                        message.state = 116;
                        break;
                    case "RS_WAIT_FOR_PLAYER_DECK_COUNT_DOWN":
                    case 117:
                        message.state = 117;
                        break;
                    case "RS_CHECK_PLAYER_DECK":
                    case 118:
                        message.state = 118;
                        break;
                    case "RS_COMPARE_PLAYER_DECK":
                    case 119:
                        message.state = 119;
                        break;
                    case "RS_WAIT_FOR_SHOW_RESULT_COUNT_DOWN":
                    case 120:
                        message.state = 120;
                        break;
                    case "RS_END_ROUND":
                    case 121:
                        message.state = 121;
                        break;
                    case "RS_SHOW_END_ROUND_SETTLE_RESULT":
                    case 122:
                        message.state = 122;
                        break;
                    case "RS_SHOW_END_ROUND_SETTLE_RESULT_COUNT_DOWN":
                    case 123:
                        message.state = 123;
                        break;
                    case "RS_CHECK_END_GAME":
                    case 124:
                        message.state = 124;
                        break;
                    case "RS_END_GAME":
                    case 125:
                        message.state = 125;
                        break;
                    case "RS_SHOW_END_GAME_SETTLE_RESULT":
                    case 126:
                        message.state = 126;
                        break;
                    case "RS_SHOW_END_GAME_SETTLE_RESULT_COUNT_DOWN":
                    case 127:
                        message.state = 127;
                        break;
                    case "RS_WAIT_FOR_PLAYER_CONTINUE":
                    case 128:
                        message.state = 128;
                        break;
                    case "RS_WAIT_FOR_PLAYER_CONTINUE_COUNT_DOWN":
                    case 129:
                        message.state = 129;
                        break;
                    case "RS_REMOVE_ALL_PLAYER":
                    case 130:
                        message.state = 130;
                        break;
                    case "RS_RESET":
                    case 131:
                        message.state = 131;
                        break;
                    case "RS_JOIN_PLAYER_HAS_REGISTERD":
                    case 132:
                        message.state = 132;
                        break;
                    case "RS_PREPARE_TO_CLOSE":
                    case 201:
                        message.state = 201;
                        break;
                    }
                    if (object.maxPlayer != null)
                        message.maxPlayer = object.maxPlayer | 0;
                    if (object.minPlayer != null)
                        message.minPlayer = object.minPlayer | 0;
                    if (object.maxSpectator != null)
                        message.maxSpectator = object.maxSpectator | 0;
                    if (object.playerInfoMapById) {
                        if (typeof object.playerInfoMapById !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Room.playerInfoMapById: object expected");
                        message.playerInfoMapById = {};
                        for (var keys = Object.keys(object.playerInfoMapById), i = 0; i < keys.length; ++i) {
                            if (typeof object.playerInfoMapById[keys[i]] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.Room.playerInfoMapById: object expected");
                            message.playerInfoMapById[keys[i]] = $root.pb.Player.fromObject(object.playerInfoMapById[keys[i]]);
                        }
                    }
                    if (object.playerInfoMapByPos) {
                        if (typeof object.playerInfoMapByPos !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Room.playerInfoMapByPos: object expected");
                        message.playerInfoMapByPos = {};
                        for (var keys = Object.keys(object.playerInfoMapByPos), i = 0; i < keys.length; ++i) {
                            if (typeof object.playerInfoMapByPos[keys[i]] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.Room.playerInfoMapByPos: object expected");
                            message.playerInfoMapByPos[keys[i]] = $root.pb.Player.fromObject(object.playerInfoMapByPos[keys[i]]);
                        }
                    }
                    if (object.spectatorInfoMapById) {
                        if (typeof object.spectatorInfoMapById !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Room.spectatorInfoMapById: object expected");
                        message.spectatorInfoMapById = {};
                        for (var keys = Object.keys(object.spectatorInfoMapById), i = 0; i < keys.length; ++i) {
                            if (typeof object.spectatorInfoMapById[keys[i]] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.Room.spectatorInfoMapById: object expected");
                            message.spectatorInfoMapById[keys[i]] = $root.pb.Player.fromObject(object.spectatorInfoMapById[keys[i]]);
                        }
                    }
                    if (object.game != null) {
                        if (typeof object.game !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Room.game: object expected");
                        message.game = $root.pb.game.chinese_poker_13.Game.fromObject(object.game);
                    }
                    if (object.countdown != null)
                        message.countdown = object.countdown | 0;
                    if (object.isTimeoutWaitForPlayerDeckExtended != null)
                        message.isTimeoutWaitForPlayerDeckExtended = Boolean(object.isTimeoutWaitForPlayerDeckExtended);
                    if (object.maxRound != null)
                        message.maxRound = object.maxRound | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Room message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.Room
                 * @static
                 * @param {pb.game.chinese_poker_13.Room} message Room
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Room.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults) {
                        object.playerInfoMapById = {};
                        object.playerInfoMapByPos = {};
                        object.spectatorInfoMapById = {};
                    }
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.type = 0;
                        object.minCreditToEnter = 0;
                        object.minCreditToBet = 0;
                        object.sort = 0;
                        object.status = 0;
                        object.state = options.enums === String ? "RS_NONE" : 0;
                        object.maxPlayer = 0;
                        object.minPlayer = 0;
                        object.maxSpectator = 0;
                        object.game = null;
                        object.countdown = 0;
                        object.isTimeoutWaitForPlayerDeckExtended = false;
                        object.maxRound = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.minCreditToEnter != null && message.hasOwnProperty("minCreditToEnter"))
                        object.minCreditToEnter = message.minCreditToEnter;
                    if (message.minCreditToBet != null && message.hasOwnProperty("minCreditToBet"))
                        object.minCreditToBet = message.minCreditToBet;
                    if (message.sort != null && message.hasOwnProperty("sort"))
                        object.sort = message.sort;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = message.status;
                    if (message.state != null && message.hasOwnProperty("state"))
                        object.state = options.enums === String ? $root.pb.game.chinese_poker_13.RoomState[message.state] : message.state;
                    if (message.maxPlayer != null && message.hasOwnProperty("maxPlayer"))
                        object.maxPlayer = message.maxPlayer;
                    if (message.minPlayer != null && message.hasOwnProperty("minPlayer"))
                        object.minPlayer = message.minPlayer;
                    if (message.maxSpectator != null && message.hasOwnProperty("maxSpectator"))
                        object.maxSpectator = message.maxSpectator;
                    var keys2;
                    if (message.playerInfoMapById && (keys2 = Object.keys(message.playerInfoMapById)).length) {
                        object.playerInfoMapById = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.playerInfoMapById[keys2[j]] = $root.pb.Player.toObject(message.playerInfoMapById[keys2[j]], options);
                    }
                    if (message.playerInfoMapByPos && (keys2 = Object.keys(message.playerInfoMapByPos)).length) {
                        object.playerInfoMapByPos = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.playerInfoMapByPos[keys2[j]] = $root.pb.Player.toObject(message.playerInfoMapByPos[keys2[j]], options);
                    }
                    if (message.spectatorInfoMapById && (keys2 = Object.keys(message.spectatorInfoMapById)).length) {
                        object.spectatorInfoMapById = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.spectatorInfoMapById[keys2[j]] = $root.pb.Player.toObject(message.spectatorInfoMapById[keys2[j]], options);
                    }
                    if (message.game != null && message.hasOwnProperty("game"))
                        object.game = $root.pb.game.chinese_poker_13.Game.toObject(message.game, options);
                    if (message.countdown != null && message.hasOwnProperty("countdown"))
                        object.countdown = message.countdown;
                    if (message.isTimeoutWaitForPlayerDeckExtended != null && message.hasOwnProperty("isTimeoutWaitForPlayerDeckExtended"))
                        object.isTimeoutWaitForPlayerDeckExtended = message.isTimeoutWaitForPlayerDeckExtended;
                    if (message.maxRound != null && message.hasOwnProperty("maxRound"))
                        object.maxRound = message.maxRound;
                    return object;
                };

                /**
                 * Converts this Room to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.Room
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Room.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Room;
            })();

            chinese_poker_13.RoomMapById = (function() {

                /**
                 * Properties of a RoomMapById.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IRoomMapById
                 * @property {Object.<string,pb.game.chinese_poker_13.IRoom>|null} [Data] RoomMapById Data
                 */

                /**
                 * Constructs a new RoomMapById.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a RoomMapById.
                 * @implements IRoomMapById
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IRoomMapById=} [properties] Properties to set
                 */
                function RoomMapById(properties) {
                    this.Data = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RoomMapById Data.
                 * @member {Object.<string,pb.game.chinese_poker_13.IRoom>} Data
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @instance
                 */
                RoomMapById.prototype.Data = $util.emptyObject;

                /**
                 * Creates a new RoomMapById instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {pb.game.chinese_poker_13.IRoomMapById=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.RoomMapById} RoomMapById instance
                 */
                RoomMapById.create = function create(properties) {
                    return new RoomMapById(properties);
                };

                /**
                 * Encodes the specified RoomMapById message. Does not implicitly {@link pb.game.chinese_poker_13.RoomMapById.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {pb.game.chinese_poker_13.IRoomMapById} message RoomMapById message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoomMapById.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                        for (var keys = Object.keys(message.Data), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.pb.game.chinese_poker_13.Room.encode(message.Data[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified RoomMapById message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.RoomMapById.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {pb.game.chinese_poker_13.IRoomMapById} message RoomMapById message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoomMapById.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RoomMapById message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.RoomMapById} RoomMapById
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoomMapById.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.RoomMapById(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (message.Data === $util.emptyObject)
                                message.Data = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.pb.game.chinese_poker_13.Room.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.Data[key] = value;
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RoomMapById message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.RoomMapById} RoomMapById
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoomMapById.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RoomMapById message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoomMapById.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Data != null && message.hasOwnProperty("Data")) {
                        if (!$util.isObject(message.Data))
                            return "Data: object expected";
                        var key = Object.keys(message.Data);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Room.verify(message.Data[key[i]]);
                            if (error)
                                return "Data." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RoomMapById message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.RoomMapById} RoomMapById
                 */
                RoomMapById.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.RoomMapById)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.RoomMapById();
                    if (object.Data) {
                        if (typeof object.Data !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.RoomMapById.Data: object expected");
                        message.Data = {};
                        for (var keys = Object.keys(object.Data), i = 0; i < keys.length; ++i) {
                            if (typeof object.Data[keys[i]] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.RoomMapById.Data: object expected");
                            message.Data[keys[i]] = $root.pb.game.chinese_poker_13.Room.fromObject(object.Data[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RoomMapById message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @static
                 * @param {pb.game.chinese_poker_13.RoomMapById} message RoomMapById
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RoomMapById.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.Data = {};
                    var keys2;
                    if (message.Data && (keys2 = Object.keys(message.Data)).length) {
                        object.Data = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.Data[keys2[j]] = $root.pb.game.chinese_poker_13.Room.toObject(message.Data[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this RoomMapById to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.RoomMapById
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RoomMapById.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RoomMapById;
            })();

            chinese_poker_13.Round = (function() {

                /**
                 * Properties of a Round.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IRound
                 * @property {string|null} [id] Round id
                 * @property {number|Long|null} [number] Round number
                 * @property {Array.<pb.game.chinese_poker_13.ICard>|null} [cardList] Round cardList
                 * @property {pb.game.chinese_poker_13.ICard|null} [randomCard] Round randomCard
                 * @property {Object.<string,pb.game.chinese_poker_13.IPlayerDeck>|null} [playerDeckMapByPlayerId] Round playerDeckMapByPlayerId
                 * @property {Object.<string,pb.game.chinese_poker_13.IPlayerDeckCompareResult>|null} [playerDeckCompareResultByPlayerId] Round playerDeckCompareResultByPlayerId
                 * @property {Array.<string>|null} [playerIdListSortByFrontResult] Round playerIdListSortByFrontResult
                 * @property {Array.<string>|null} [playerIdListSortByMiddleResult] Round playerIdListSortByMiddleResult
                 * @property {Array.<string>|null} [playerIdListSortByBackResult] Round playerIdListSortByBackResult
                 */

                /**
                 * Constructs a new Round.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a Round.
                 * @implements IRound
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IRound=} [properties] Properties to set
                 */
                function Round(properties) {
                    this.cardList = [];
                    this.playerDeckMapByPlayerId = {};
                    this.playerDeckCompareResultByPlayerId = {};
                    this.playerIdListSortByFrontResult = [];
                    this.playerIdListSortByMiddleResult = [];
                    this.playerIdListSortByBackResult = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Round id.
                 * @member {string} id
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.id = "";

                /**
                 * Round number.
                 * @member {number|Long} number
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Round cardList.
                 * @member {Array.<pb.game.chinese_poker_13.ICard>} cardList
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.cardList = $util.emptyArray;

                /**
                 * Round randomCard.
                 * @member {pb.game.chinese_poker_13.ICard|null|undefined} randomCard
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.randomCard = null;

                /**
                 * Round playerDeckMapByPlayerId.
                 * @member {Object.<string,pb.game.chinese_poker_13.IPlayerDeck>} playerDeckMapByPlayerId
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.playerDeckMapByPlayerId = $util.emptyObject;

                /**
                 * Round playerDeckCompareResultByPlayerId.
                 * @member {Object.<string,pb.game.chinese_poker_13.IPlayerDeckCompareResult>} playerDeckCompareResultByPlayerId
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.playerDeckCompareResultByPlayerId = $util.emptyObject;

                /**
                 * Round playerIdListSortByFrontResult.
                 * @member {Array.<string>} playerIdListSortByFrontResult
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.playerIdListSortByFrontResult = $util.emptyArray;

                /**
                 * Round playerIdListSortByMiddleResult.
                 * @member {Array.<string>} playerIdListSortByMiddleResult
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.playerIdListSortByMiddleResult = $util.emptyArray;

                /**
                 * Round playerIdListSortByBackResult.
                 * @member {Array.<string>} playerIdListSortByBackResult
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 */
                Round.prototype.playerIdListSortByBackResult = $util.emptyArray;

                /**
                 * Creates a new Round instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {pb.game.chinese_poker_13.IRound=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.Round} Round instance
                 */
                Round.create = function create(properties) {
                    return new Round(properties);
                };

                /**
                 * Encodes the specified Round message. Does not implicitly {@link pb.game.chinese_poker_13.Round.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {pb.game.chinese_poker_13.IRound} message Round message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Round.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.number);
                    if (message.cardList != null && message.cardList.length)
                        for (var i = 0; i < message.cardList.length; ++i)
                            $root.pb.game.chinese_poker_13.Card.encode(message.cardList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.randomCard != null && Object.hasOwnProperty.call(message, "randomCard"))
                        $root.pb.game.chinese_poker_13.Card.encode(message.randomCard, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.playerDeckMapByPlayerId != null && Object.hasOwnProperty.call(message, "playerDeckMapByPlayerId"))
                        for (var keys = Object.keys(message.playerDeckMapByPlayerId), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.pb.game.chinese_poker_13.PlayerDeck.encode(message.playerDeckMapByPlayerId[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.playerDeckCompareResultByPlayerId != null && Object.hasOwnProperty.call(message, "playerDeckCompareResultByPlayerId"))
                        for (var keys = Object.keys(message.playerDeckCompareResultByPlayerId), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.pb.game.chinese_poker_13.PlayerDeckCompareResult.encode(message.playerDeckCompareResultByPlayerId[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.playerIdListSortByFrontResult != null && message.playerIdListSortByFrontResult.length)
                        for (var i = 0; i < message.playerIdListSortByFrontResult.length; ++i)
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.playerIdListSortByFrontResult[i]);
                    if (message.playerIdListSortByMiddleResult != null && message.playerIdListSortByMiddleResult.length)
                        for (var i = 0; i < message.playerIdListSortByMiddleResult.length; ++i)
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.playerIdListSortByMiddleResult[i]);
                    if (message.playerIdListSortByBackResult != null && message.playerIdListSortByBackResult.length)
                        for (var i = 0; i < message.playerIdListSortByBackResult.length; ++i)
                            writer.uint32(/* id 9, wireType 2 =*/74).string(message.playerIdListSortByBackResult[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Round message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Round.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {pb.game.chinese_poker_13.IRound} message Round message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Round.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Round message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.Round} Round
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Round.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.Round(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.number = reader.int64();
                            break;
                        case 3:
                            if (!(message.cardList && message.cardList.length))
                                message.cardList = [];
                            message.cardList.push($root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            message.randomCard = $root.pb.game.chinese_poker_13.Card.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (message.playerDeckMapByPlayerId === $util.emptyObject)
                                message.playerDeckMapByPlayerId = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.pb.game.chinese_poker_13.PlayerDeck.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.playerDeckMapByPlayerId[key] = value;
                            break;
                        case 6:
                            if (message.playerDeckCompareResultByPlayerId === $util.emptyObject)
                                message.playerDeckCompareResultByPlayerId = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.pb.game.chinese_poker_13.PlayerDeckCompareResult.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.playerDeckCompareResultByPlayerId[key] = value;
                            break;
                        case 7:
                            if (!(message.playerIdListSortByFrontResult && message.playerIdListSortByFrontResult.length))
                                message.playerIdListSortByFrontResult = [];
                            message.playerIdListSortByFrontResult.push(reader.string());
                            break;
                        case 8:
                            if (!(message.playerIdListSortByMiddleResult && message.playerIdListSortByMiddleResult.length))
                                message.playerIdListSortByMiddleResult = [];
                            message.playerIdListSortByMiddleResult.push(reader.string());
                            break;
                        case 9:
                            if (!(message.playerIdListSortByBackResult && message.playerIdListSortByBackResult.length))
                                message.playerIdListSortByBackResult = [];
                            message.playerIdListSortByBackResult.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Round message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.Round} Round
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Round.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Round message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Round.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isString(message.id))
                            return "id: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                            return "number: integer|Long expected";
                    if (message.cardList != null && message.hasOwnProperty("cardList")) {
                        if (!Array.isArray(message.cardList))
                            return "cardList: array expected";
                        for (var i = 0; i < message.cardList.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.Card.verify(message.cardList[i]);
                            if (error)
                                return "cardList." + error;
                        }
                    }
                    if (message.randomCard != null && message.hasOwnProperty("randomCard")) {
                        var error = $root.pb.game.chinese_poker_13.Card.verify(message.randomCard);
                        if (error)
                            return "randomCard." + error;
                    }
                    if (message.playerDeckMapByPlayerId != null && message.hasOwnProperty("playerDeckMapByPlayerId")) {
                        if (!$util.isObject(message.playerDeckMapByPlayerId))
                            return "playerDeckMapByPlayerId: object expected";
                        var key = Object.keys(message.playerDeckMapByPlayerId);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.PlayerDeck.verify(message.playerDeckMapByPlayerId[key[i]]);
                            if (error)
                                return "playerDeckMapByPlayerId." + error;
                        }
                    }
                    if (message.playerDeckCompareResultByPlayerId != null && message.hasOwnProperty("playerDeckCompareResultByPlayerId")) {
                        if (!$util.isObject(message.playerDeckCompareResultByPlayerId))
                            return "playerDeckCompareResultByPlayerId: object expected";
                        var key = Object.keys(message.playerDeckCompareResultByPlayerId);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.PlayerDeckCompareResult.verify(message.playerDeckCompareResultByPlayerId[key[i]]);
                            if (error)
                                return "playerDeckCompareResultByPlayerId." + error;
                        }
                    }
                    if (message.playerIdListSortByFrontResult != null && message.hasOwnProperty("playerIdListSortByFrontResult")) {
                        if (!Array.isArray(message.playerIdListSortByFrontResult))
                            return "playerIdListSortByFrontResult: array expected";
                        for (var i = 0; i < message.playerIdListSortByFrontResult.length; ++i)
                            if (!$util.isString(message.playerIdListSortByFrontResult[i]))
                                return "playerIdListSortByFrontResult: string[] expected";
                    }
                    if (message.playerIdListSortByMiddleResult != null && message.hasOwnProperty("playerIdListSortByMiddleResult")) {
                        if (!Array.isArray(message.playerIdListSortByMiddleResult))
                            return "playerIdListSortByMiddleResult: array expected";
                        for (var i = 0; i < message.playerIdListSortByMiddleResult.length; ++i)
                            if (!$util.isString(message.playerIdListSortByMiddleResult[i]))
                                return "playerIdListSortByMiddleResult: string[] expected";
                    }
                    if (message.playerIdListSortByBackResult != null && message.hasOwnProperty("playerIdListSortByBackResult")) {
                        if (!Array.isArray(message.playerIdListSortByBackResult))
                            return "playerIdListSortByBackResult: array expected";
                        for (var i = 0; i < message.playerIdListSortByBackResult.length; ++i)
                            if (!$util.isString(message.playerIdListSortByBackResult[i]))
                                return "playerIdListSortByBackResult: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Round message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.Round} Round
                 */
                Round.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.Round)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.Round();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.number != null)
                        if ($util.Long)
                            (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                        else if (typeof object.number === "string")
                            message.number = parseInt(object.number, 10);
                        else if (typeof object.number === "number")
                            message.number = object.number;
                        else if (typeof object.number === "object")
                            message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
                    if (object.cardList) {
                        if (!Array.isArray(object.cardList))
                            throw TypeError(".pb.game.chinese_poker_13.Round.cardList: array expected");
                        message.cardList = [];
                        for (var i = 0; i < object.cardList.length; ++i) {
                            if (typeof object.cardList[i] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.Round.cardList: object expected");
                            message.cardList[i] = $root.pb.game.chinese_poker_13.Card.fromObject(object.cardList[i]);
                        }
                    }
                    if (object.randomCard != null) {
                        if (typeof object.randomCard !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Round.randomCard: object expected");
                        message.randomCard = $root.pb.game.chinese_poker_13.Card.fromObject(object.randomCard);
                    }
                    if (object.playerDeckMapByPlayerId) {
                        if (typeof object.playerDeckMapByPlayerId !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Round.playerDeckMapByPlayerId: object expected");
                        message.playerDeckMapByPlayerId = {};
                        for (var keys = Object.keys(object.playerDeckMapByPlayerId), i = 0; i < keys.length; ++i) {
                            if (typeof object.playerDeckMapByPlayerId[keys[i]] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.Round.playerDeckMapByPlayerId: object expected");
                            message.playerDeckMapByPlayerId[keys[i]] = $root.pb.game.chinese_poker_13.PlayerDeck.fromObject(object.playerDeckMapByPlayerId[keys[i]]);
                        }
                    }
                    if (object.playerDeckCompareResultByPlayerId) {
                        if (typeof object.playerDeckCompareResultByPlayerId !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.Round.playerDeckCompareResultByPlayerId: object expected");
                        message.playerDeckCompareResultByPlayerId = {};
                        for (var keys = Object.keys(object.playerDeckCompareResultByPlayerId), i = 0; i < keys.length; ++i) {
                            if (typeof object.playerDeckCompareResultByPlayerId[keys[i]] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.Round.playerDeckCompareResultByPlayerId: object expected");
                            message.playerDeckCompareResultByPlayerId[keys[i]] = $root.pb.game.chinese_poker_13.PlayerDeckCompareResult.fromObject(object.playerDeckCompareResultByPlayerId[keys[i]]);
                        }
                    }
                    if (object.playerIdListSortByFrontResult) {
                        if (!Array.isArray(object.playerIdListSortByFrontResult))
                            throw TypeError(".pb.game.chinese_poker_13.Round.playerIdListSortByFrontResult: array expected");
                        message.playerIdListSortByFrontResult = [];
                        for (var i = 0; i < object.playerIdListSortByFrontResult.length; ++i)
                            message.playerIdListSortByFrontResult[i] = String(object.playerIdListSortByFrontResult[i]);
                    }
                    if (object.playerIdListSortByMiddleResult) {
                        if (!Array.isArray(object.playerIdListSortByMiddleResult))
                            throw TypeError(".pb.game.chinese_poker_13.Round.playerIdListSortByMiddleResult: array expected");
                        message.playerIdListSortByMiddleResult = [];
                        for (var i = 0; i < object.playerIdListSortByMiddleResult.length; ++i)
                            message.playerIdListSortByMiddleResult[i] = String(object.playerIdListSortByMiddleResult[i]);
                    }
                    if (object.playerIdListSortByBackResult) {
                        if (!Array.isArray(object.playerIdListSortByBackResult))
                            throw TypeError(".pb.game.chinese_poker_13.Round.playerIdListSortByBackResult: array expected");
                        message.playerIdListSortByBackResult = [];
                        for (var i = 0; i < object.playerIdListSortByBackResult.length; ++i)
                            message.playerIdListSortByBackResult[i] = String(object.playerIdListSortByBackResult[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Round message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.Round
                 * @static
                 * @param {pb.game.chinese_poker_13.Round} message Round
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Round.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.cardList = [];
                        object.playerIdListSortByFrontResult = [];
                        object.playerIdListSortByMiddleResult = [];
                        object.playerIdListSortByBackResult = [];
                    }
                    if (options.objects || options.defaults) {
                        object.playerDeckMapByPlayerId = {};
                        object.playerDeckCompareResultByPlayerId = {};
                    }
                    if (options.defaults) {
                        object.id = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.number = options.longs === String ? "0" : 0;
                        object.randomCard = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (typeof message.number === "number")
                            object.number = options.longs === String ? String(message.number) : message.number;
                        else
                            object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
                    if (message.cardList && message.cardList.length) {
                        object.cardList = [];
                        for (var j = 0; j < message.cardList.length; ++j)
                            object.cardList[j] = $root.pb.game.chinese_poker_13.Card.toObject(message.cardList[j], options);
                    }
                    if (message.randomCard != null && message.hasOwnProperty("randomCard"))
                        object.randomCard = $root.pb.game.chinese_poker_13.Card.toObject(message.randomCard, options);
                    var keys2;
                    if (message.playerDeckMapByPlayerId && (keys2 = Object.keys(message.playerDeckMapByPlayerId)).length) {
                        object.playerDeckMapByPlayerId = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.playerDeckMapByPlayerId[keys2[j]] = $root.pb.game.chinese_poker_13.PlayerDeck.toObject(message.playerDeckMapByPlayerId[keys2[j]], options);
                    }
                    if (message.playerDeckCompareResultByPlayerId && (keys2 = Object.keys(message.playerDeckCompareResultByPlayerId)).length) {
                        object.playerDeckCompareResultByPlayerId = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.playerDeckCompareResultByPlayerId[keys2[j]] = $root.pb.game.chinese_poker_13.PlayerDeckCompareResult.toObject(message.playerDeckCompareResultByPlayerId[keys2[j]], options);
                    }
                    if (message.playerIdListSortByFrontResult && message.playerIdListSortByFrontResult.length) {
                        object.playerIdListSortByFrontResult = [];
                        for (var j = 0; j < message.playerIdListSortByFrontResult.length; ++j)
                            object.playerIdListSortByFrontResult[j] = message.playerIdListSortByFrontResult[j];
                    }
                    if (message.playerIdListSortByMiddleResult && message.playerIdListSortByMiddleResult.length) {
                        object.playerIdListSortByMiddleResult = [];
                        for (var j = 0; j < message.playerIdListSortByMiddleResult.length; ++j)
                            object.playerIdListSortByMiddleResult[j] = message.playerIdListSortByMiddleResult[j];
                    }
                    if (message.playerIdListSortByBackResult && message.playerIdListSortByBackResult.length) {
                        object.playerIdListSortByBackResult = [];
                        for (var j = 0; j < message.playerIdListSortByBackResult.length; ++j)
                            object.playerIdListSortByBackResult[j] = message.playerIdListSortByBackResult[j];
                    }
                    return object;
                };

                /**
                 * Converts this Round to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.Round
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Round.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Round;
            })();

            chinese_poker_13.CompareResult = (function() {

                /**
                 * Properties of a CompareResult.
                 * @memberof pb.game.chinese_poker_13
                 * @interface ICompareResult
                 * @property {number|null} [originPoint] CompareResult originPoint
                 * @property {number|null} [extraPoint] CompareResult extraPoint
                 */

                /**
                 * Constructs a new CompareResult.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a CompareResult.
                 * @implements ICompareResult
                 * @constructor
                 * @param {pb.game.chinese_poker_13.ICompareResult=} [properties] Properties to set
                 */
                function CompareResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CompareResult originPoint.
                 * @member {number} originPoint
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @instance
                 */
                CompareResult.prototype.originPoint = 0;

                /**
                 * CompareResult extraPoint.
                 * @member {number} extraPoint
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @instance
                 */
                CompareResult.prototype.extraPoint = 0;

                /**
                 * Creates a new CompareResult instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.ICompareResult=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.CompareResult} CompareResult instance
                 */
                CompareResult.create = function create(properties) {
                    return new CompareResult(properties);
                };

                /**
                 * Encodes the specified CompareResult message. Does not implicitly {@link pb.game.chinese_poker_13.CompareResult.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.ICompareResult} message CompareResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CompareResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.originPoint != null && Object.hasOwnProperty.call(message, "originPoint"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.originPoint);
                    if (message.extraPoint != null && Object.hasOwnProperty.call(message, "extraPoint"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.extraPoint);
                    return writer;
                };

                /**
                 * Encodes the specified CompareResult message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.CompareResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.ICompareResult} message CompareResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CompareResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CompareResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.CompareResult} CompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CompareResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.CompareResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.originPoint = reader.int32();
                            break;
                        case 2:
                            message.extraPoint = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CompareResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.CompareResult} CompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CompareResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CompareResult message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CompareResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.originPoint != null && message.hasOwnProperty("originPoint"))
                        if (!$util.isInteger(message.originPoint))
                            return "originPoint: integer expected";
                    if (message.extraPoint != null && message.hasOwnProperty("extraPoint"))
                        if (!$util.isInteger(message.extraPoint))
                            return "extraPoint: integer expected";
                    return null;
                };

                /**
                 * Creates a CompareResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.CompareResult} CompareResult
                 */
                CompareResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.CompareResult)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.CompareResult();
                    if (object.originPoint != null)
                        message.originPoint = object.originPoint | 0;
                    if (object.extraPoint != null)
                        message.extraPoint = object.extraPoint | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a CompareResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.CompareResult} message CompareResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CompareResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.originPoint = 0;
                        object.extraPoint = 0;
                    }
                    if (message.originPoint != null && message.hasOwnProperty("originPoint"))
                        object.originPoint = message.originPoint;
                    if (message.extraPoint != null && message.hasOwnProperty("extraPoint"))
                        object.extraPoint = message.extraPoint;
                    return object;
                };

                /**
                 * Converts this CompareResult to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.CompareResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CompareResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CompareResult;
            })();

            chinese_poker_13.DeckCompareResult = (function() {

                /**
                 * Properties of a DeckCompareResult.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IDeckCompareResult
                 * @property {pb.game.chinese_poker_13.ICompareResult|null} [front] DeckCompareResult front
                 * @property {pb.game.chinese_poker_13.ICompareResult|null} [middle] DeckCompareResult middle
                 * @property {pb.game.chinese_poker_13.ICompareResult|null} [back] DeckCompareResult back
                 * @property {number|null} [allPatternWinExtraPoint] DeckCompareResult allPatternWinExtraPoint
                 * @property {number|null} [homeRundExtraPoint] DeckCompareResult homeRundExtraPoint
                 * @property {number|null} [totalPoint] DeckCompareResult totalPoint
                 */

                /**
                 * Constructs a new DeckCompareResult.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a DeckCompareResult.
                 * @implements IDeckCompareResult
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IDeckCompareResult=} [properties] Properties to set
                 */
                function DeckCompareResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeckCompareResult front.
                 * @member {pb.game.chinese_poker_13.ICompareResult|null|undefined} front
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @instance
                 */
                DeckCompareResult.prototype.front = null;

                /**
                 * DeckCompareResult middle.
                 * @member {pb.game.chinese_poker_13.ICompareResult|null|undefined} middle
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @instance
                 */
                DeckCompareResult.prototype.middle = null;

                /**
                 * DeckCompareResult back.
                 * @member {pb.game.chinese_poker_13.ICompareResult|null|undefined} back
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @instance
                 */
                DeckCompareResult.prototype.back = null;

                /**
                 * DeckCompareResult allPatternWinExtraPoint.
                 * @member {number} allPatternWinExtraPoint
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @instance
                 */
                DeckCompareResult.prototype.allPatternWinExtraPoint = 0;

                /**
                 * DeckCompareResult homeRundExtraPoint.
                 * @member {number} homeRundExtraPoint
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @instance
                 */
                DeckCompareResult.prototype.homeRundExtraPoint = 0;

                /**
                 * DeckCompareResult totalPoint.
                 * @member {number} totalPoint
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @instance
                 */
                DeckCompareResult.prototype.totalPoint = 0;

                /**
                 * Creates a new DeckCompareResult instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.IDeckCompareResult=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.DeckCompareResult} DeckCompareResult instance
                 */
                DeckCompareResult.create = function create(properties) {
                    return new DeckCompareResult(properties);
                };

                /**
                 * Encodes the specified DeckCompareResult message. Does not implicitly {@link pb.game.chinese_poker_13.DeckCompareResult.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.IDeckCompareResult} message DeckCompareResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeckCompareResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.front != null && Object.hasOwnProperty.call(message, "front"))
                        $root.pb.game.chinese_poker_13.CompareResult.encode(message.front, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.middle != null && Object.hasOwnProperty.call(message, "middle"))
                        $root.pb.game.chinese_poker_13.CompareResult.encode(message.middle, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.back != null && Object.hasOwnProperty.call(message, "back"))
                        $root.pb.game.chinese_poker_13.CompareResult.encode(message.back, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.allPatternWinExtraPoint != null && Object.hasOwnProperty.call(message, "allPatternWinExtraPoint"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.allPatternWinExtraPoint);
                    if (message.homeRundExtraPoint != null && Object.hasOwnProperty.call(message, "homeRundExtraPoint"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.homeRundExtraPoint);
                    if (message.totalPoint != null && Object.hasOwnProperty.call(message, "totalPoint"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalPoint);
                    return writer;
                };

                /**
                 * Encodes the specified DeckCompareResult message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.DeckCompareResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.IDeckCompareResult} message DeckCompareResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeckCompareResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeckCompareResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.DeckCompareResult} DeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeckCompareResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.DeckCompareResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.front = $root.pb.game.chinese_poker_13.CompareResult.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.middle = $root.pb.game.chinese_poker_13.CompareResult.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.back = $root.pb.game.chinese_poker_13.CompareResult.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.allPatternWinExtraPoint = reader.int32();
                            break;
                        case 5:
                            message.homeRundExtraPoint = reader.int32();
                            break;
                        case 6:
                            message.totalPoint = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DeckCompareResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.DeckCompareResult} DeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeckCompareResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeckCompareResult message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeckCompareResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.front != null && message.hasOwnProperty("front")) {
                        var error = $root.pb.game.chinese_poker_13.CompareResult.verify(message.front);
                        if (error)
                            return "front." + error;
                    }
                    if (message.middle != null && message.hasOwnProperty("middle")) {
                        var error = $root.pb.game.chinese_poker_13.CompareResult.verify(message.middle);
                        if (error)
                            return "middle." + error;
                    }
                    if (message.back != null && message.hasOwnProperty("back")) {
                        var error = $root.pb.game.chinese_poker_13.CompareResult.verify(message.back);
                        if (error)
                            return "back." + error;
                    }
                    if (message.allPatternWinExtraPoint != null && message.hasOwnProperty("allPatternWinExtraPoint"))
                        if (!$util.isInteger(message.allPatternWinExtraPoint))
                            return "allPatternWinExtraPoint: integer expected";
                    if (message.homeRundExtraPoint != null && message.hasOwnProperty("homeRundExtraPoint"))
                        if (!$util.isInteger(message.homeRundExtraPoint))
                            return "homeRundExtraPoint: integer expected";
                    if (message.totalPoint != null && message.hasOwnProperty("totalPoint"))
                        if (!$util.isInteger(message.totalPoint))
                            return "totalPoint: integer expected";
                    return null;
                };

                /**
                 * Creates a DeckCompareResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.DeckCompareResult} DeckCompareResult
                 */
                DeckCompareResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.DeckCompareResult)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.DeckCompareResult();
                    if (object.front != null) {
                        if (typeof object.front !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.DeckCompareResult.front: object expected");
                        message.front = $root.pb.game.chinese_poker_13.CompareResult.fromObject(object.front);
                    }
                    if (object.middle != null) {
                        if (typeof object.middle !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.DeckCompareResult.middle: object expected");
                        message.middle = $root.pb.game.chinese_poker_13.CompareResult.fromObject(object.middle);
                    }
                    if (object.back != null) {
                        if (typeof object.back !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.DeckCompareResult.back: object expected");
                        message.back = $root.pb.game.chinese_poker_13.CompareResult.fromObject(object.back);
                    }
                    if (object.allPatternWinExtraPoint != null)
                        message.allPatternWinExtraPoint = object.allPatternWinExtraPoint | 0;
                    if (object.homeRundExtraPoint != null)
                        message.homeRundExtraPoint = object.homeRundExtraPoint | 0;
                    if (object.totalPoint != null)
                        message.totalPoint = object.totalPoint | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a DeckCompareResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.DeckCompareResult} message DeckCompareResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeckCompareResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.front = null;
                        object.middle = null;
                        object.back = null;
                        object.allPatternWinExtraPoint = 0;
                        object.homeRundExtraPoint = 0;
                        object.totalPoint = 0;
                    }
                    if (message.front != null && message.hasOwnProperty("front"))
                        object.front = $root.pb.game.chinese_poker_13.CompareResult.toObject(message.front, options);
                    if (message.middle != null && message.hasOwnProperty("middle"))
                        object.middle = $root.pb.game.chinese_poker_13.CompareResult.toObject(message.middle, options);
                    if (message.back != null && message.hasOwnProperty("back"))
                        object.back = $root.pb.game.chinese_poker_13.CompareResult.toObject(message.back, options);
                    if (message.allPatternWinExtraPoint != null && message.hasOwnProperty("allPatternWinExtraPoint"))
                        object.allPatternWinExtraPoint = message.allPatternWinExtraPoint;
                    if (message.homeRundExtraPoint != null && message.hasOwnProperty("homeRundExtraPoint"))
                        object.homeRundExtraPoint = message.homeRundExtraPoint;
                    if (message.totalPoint != null && message.hasOwnProperty("totalPoint"))
                        object.totalPoint = message.totalPoint;
                    return object;
                };

                /**
                 * Converts this DeckCompareResult to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.DeckCompareResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeckCompareResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeckCompareResult;
            })();

            chinese_poker_13.PlayerDeckCompareResult = (function() {

                /**
                 * Properties of a PlayerDeckCompareResult.
                 * @memberof pb.game.chinese_poker_13
                 * @interface IPlayerDeckCompareResult
                 * @property {Object.<string,pb.game.chinese_poker_13.IDeckCompareResult>|null} [deckCompareResultByPlayerId] PlayerDeckCompareResult deckCompareResultByPlayerId
                 * @property {number|null} [countAllPatternWin] PlayerDeckCompareResult countAllPatternWin
                 */

                /**
                 * Constructs a new PlayerDeckCompareResult.
                 * @memberof pb.game.chinese_poker_13
                 * @classdesc Represents a PlayerDeckCompareResult.
                 * @implements IPlayerDeckCompareResult
                 * @constructor
                 * @param {pb.game.chinese_poker_13.IPlayerDeckCompareResult=} [properties] Properties to set
                 */
                function PlayerDeckCompareResult(properties) {
                    this.deckCompareResultByPlayerId = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PlayerDeckCompareResult deckCompareResultByPlayerId.
                 * @member {Object.<string,pb.game.chinese_poker_13.IDeckCompareResult>} deckCompareResultByPlayerId
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @instance
                 */
                PlayerDeckCompareResult.prototype.deckCompareResultByPlayerId = $util.emptyObject;

                /**
                 * PlayerDeckCompareResult countAllPatternWin.
                 * @member {number} countAllPatternWin
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @instance
                 */
                PlayerDeckCompareResult.prototype.countAllPatternWin = 0;

                /**
                 * Creates a new PlayerDeckCompareResult instance using the specified properties.
                 * @function create
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.IPlayerDeckCompareResult=} [properties] Properties to set
                 * @returns {pb.game.chinese_poker_13.PlayerDeckCompareResult} PlayerDeckCompareResult instance
                 */
                PlayerDeckCompareResult.create = function create(properties) {
                    return new PlayerDeckCompareResult(properties);
                };

                /**
                 * Encodes the specified PlayerDeckCompareResult message. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeckCompareResult.verify|verify} messages.
                 * @function encode
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.IPlayerDeckCompareResult} message PlayerDeckCompareResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerDeckCompareResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deckCompareResultByPlayerId != null && Object.hasOwnProperty.call(message, "deckCompareResultByPlayerId"))
                        for (var keys = Object.keys(message.deckCompareResultByPlayerId), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.pb.game.chinese_poker_13.DeckCompareResult.encode(message.deckCompareResultByPlayerId[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.countAllPatternWin != null && Object.hasOwnProperty.call(message, "countAllPatternWin"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.countAllPatternWin);
                    return writer;
                };

                /**
                 * Encodes the specified PlayerDeckCompareResult message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeckCompareResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.IPlayerDeckCompareResult} message PlayerDeckCompareResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlayerDeckCompareResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PlayerDeckCompareResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.game.chinese_poker_13.PlayerDeckCompareResult} PlayerDeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerDeckCompareResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.game.chinese_poker_13.PlayerDeckCompareResult(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (message.deckCompareResultByPlayerId === $util.emptyObject)
                                message.deckCompareResultByPlayerId = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.pb.game.chinese_poker_13.DeckCompareResult.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.deckCompareResultByPlayerId[key] = value;
                            break;
                        case 2:
                            message.countAllPatternWin = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PlayerDeckCompareResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.game.chinese_poker_13.PlayerDeckCompareResult} PlayerDeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlayerDeckCompareResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PlayerDeckCompareResult message.
                 * @function verify
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlayerDeckCompareResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deckCompareResultByPlayerId != null && message.hasOwnProperty("deckCompareResultByPlayerId")) {
                        if (!$util.isObject(message.deckCompareResultByPlayerId))
                            return "deckCompareResultByPlayerId: object expected";
                        var key = Object.keys(message.deckCompareResultByPlayerId);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.pb.game.chinese_poker_13.DeckCompareResult.verify(message.deckCompareResultByPlayerId[key[i]]);
                            if (error)
                                return "deckCompareResultByPlayerId." + error;
                        }
                    }
                    if (message.countAllPatternWin != null && message.hasOwnProperty("countAllPatternWin"))
                        if (!$util.isInteger(message.countAllPatternWin))
                            return "countAllPatternWin: integer expected";
                    return null;
                };

                /**
                 * Creates a PlayerDeckCompareResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.game.chinese_poker_13.PlayerDeckCompareResult} PlayerDeckCompareResult
                 */
                PlayerDeckCompareResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.game.chinese_poker_13.PlayerDeckCompareResult)
                        return object;
                    var message = new $root.pb.game.chinese_poker_13.PlayerDeckCompareResult();
                    if (object.deckCompareResultByPlayerId) {
                        if (typeof object.deckCompareResultByPlayerId !== "object")
                            throw TypeError(".pb.game.chinese_poker_13.PlayerDeckCompareResult.deckCompareResultByPlayerId: object expected");
                        message.deckCompareResultByPlayerId = {};
                        for (var keys = Object.keys(object.deckCompareResultByPlayerId), i = 0; i < keys.length; ++i) {
                            if (typeof object.deckCompareResultByPlayerId[keys[i]] !== "object")
                                throw TypeError(".pb.game.chinese_poker_13.PlayerDeckCompareResult.deckCompareResultByPlayerId: object expected");
                            message.deckCompareResultByPlayerId[keys[i]] = $root.pb.game.chinese_poker_13.DeckCompareResult.fromObject(object.deckCompareResultByPlayerId[keys[i]]);
                        }
                    }
                    if (object.countAllPatternWin != null)
                        message.countAllPatternWin = object.countAllPatternWin | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a PlayerDeckCompareResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @static
                 * @param {pb.game.chinese_poker_13.PlayerDeckCompareResult} message PlayerDeckCompareResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlayerDeckCompareResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.deckCompareResultByPlayerId = {};
                    if (options.defaults)
                        object.countAllPatternWin = 0;
                    var keys2;
                    if (message.deckCompareResultByPlayerId && (keys2 = Object.keys(message.deckCompareResultByPlayerId)).length) {
                        object.deckCompareResultByPlayerId = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.deckCompareResultByPlayerId[keys2[j]] = $root.pb.game.chinese_poker_13.DeckCompareResult.toObject(message.deckCompareResultByPlayerId[keys2[j]], options);
                    }
                    if (message.countAllPatternWin != null && message.hasOwnProperty("countAllPatternWin"))
                        object.countAllPatternWin = message.countAllPatternWin;
                    return object;
                };

                /**
                 * Converts this PlayerDeckCompareResult to JSON.
                 * @function toJSON
                 * @memberof pb.game.chinese_poker_13.PlayerDeckCompareResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlayerDeckCompareResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PlayerDeckCompareResult;
            })();

            return chinese_poker_13;
        })();

        /**
         * GameType enum.
         * @name pb.game.GameType
         * @enum {number}
         * @property {number} GT_NONE=0 GT_NONE value
         * @property {number} GT_EXAMPLE=1 GT_EXAMPLE value
         * @property {number} GT_CHINESE_POKER_13=1001 GT_CHINESE_POKER_13 value
         */
        game.GameType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GT_NONE"] = 0;
            values[valuesById[1] = "GT_EXAMPLE"] = 1;
            values[valuesById[1001] = "GT_CHINESE_POKER_13"] = 1001;
            return values;
        })();

        return game;
    })();

    /**
     * ThirdParty enum.
     * @name pb.ThirdParty
     * @enum {number}
     * @property {number} TP_NONE=0 TP_NONE value
     * @property {number} TP_FB=1 TP_FB value
     */
    pb.ThirdParty = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TP_NONE"] = 0;
        values[valuesById[1] = "TP_FB"] = 1;
        return values;
    })();

    pb.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof pb
         * @interface ILoginRequest
         * @property {string|null} [clientId] LoginRequest clientId
         * @property {string|null} [thirdPartyId] LoginRequest thirdPartyId
         * @property {pb.ThirdParty|null} [thirdParty] LoginRequest thirdParty
         * @property {string|null} [thirdPartyUserName] LoginRequest thirdPartyUserName
         * @property {string|null} [thirdPartyPictureUrl] LoginRequest thirdPartyPictureUrl
         * @property {string|null} [ipAddress] LoginRequest ipAddress
         * @property {string|null} [country] LoginRequest country
         * @property {string|null} [language] LoginRequest language
         * @property {string|null} [phoneModel] LoginRequest phoneModel
         * @property {string|null} [os] LoginRequest os
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof pb
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {pb.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest clientId.
         * @member {string} clientId
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.clientId = "";

        /**
         * LoginRequest thirdPartyId.
         * @member {string} thirdPartyId
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.thirdPartyId = "";

        /**
         * LoginRequest thirdParty.
         * @member {pb.ThirdParty} thirdParty
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.thirdParty = 0;

        /**
         * LoginRequest thirdPartyUserName.
         * @member {string} thirdPartyUserName
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.thirdPartyUserName = "";

        /**
         * LoginRequest thirdPartyPictureUrl.
         * @member {string} thirdPartyPictureUrl
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.thirdPartyPictureUrl = "";

        /**
         * LoginRequest ipAddress.
         * @member {string} ipAddress
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.ipAddress = "";

        /**
         * LoginRequest country.
         * @member {string} country
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.country = "";

        /**
         * LoginRequest language.
         * @member {string} language
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.language = "";

        /**
         * LoginRequest phoneModel.
         * @member {string} phoneModel
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.phoneModel = "";

        /**
         * LoginRequest os.
         * @member {string} os
         * @memberof pb.LoginRequest
         * @instance
         */
        LoginRequest.prototype.os = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof pb.LoginRequest
         * @static
         * @param {pb.ILoginRequest=} [properties] Properties to set
         * @returns {pb.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link pb.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginRequest
         * @static
         * @param {pb.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientId);
            if (message.thirdPartyId != null && Object.hasOwnProperty.call(message, "thirdPartyId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.thirdPartyId);
            if (message.thirdParty != null && Object.hasOwnProperty.call(message, "thirdParty"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.thirdParty);
            if (message.thirdPartyUserName != null && Object.hasOwnProperty.call(message, "thirdPartyUserName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.thirdPartyUserName);
            if (message.thirdPartyPictureUrl != null && Object.hasOwnProperty.call(message, "thirdPartyPictureUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.thirdPartyPictureUrl);
            if (message.ipAddress != null && Object.hasOwnProperty.call(message, "ipAddress"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ipAddress);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.country);
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.language);
            if (message.phoneModel != null && Object.hasOwnProperty.call(message, "phoneModel"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.phoneModel);
            if (message.os != null && Object.hasOwnProperty.call(message, "os"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.os);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link pb.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LoginRequest
         * @static
         * @param {pb.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.thirdPartyId = reader.string();
                    break;
                case 3:
                    message.thirdParty = reader.int32();
                    break;
                case 4:
                    message.thirdPartyUserName = reader.string();
                    break;
                case 5:
                    message.thirdPartyPictureUrl = reader.string();
                    break;
                case 6:
                    message.ipAddress = reader.string();
                    break;
                case 7:
                    message.country = reader.string();
                    break;
                case 8:
                    message.language = reader.string();
                    break;
                case 9:
                    message.phoneModel = reader.string();
                    break;
                case 10:
                    message.os = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof pb.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isString(message.clientId))
                    return "clientId: string expected";
            if (message.thirdPartyId != null && message.hasOwnProperty("thirdPartyId"))
                if (!$util.isString(message.thirdPartyId))
                    return "thirdPartyId: string expected";
            if (message.thirdParty != null && message.hasOwnProperty("thirdParty"))
                switch (message.thirdParty) {
                default:
                    return "thirdParty: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.thirdPartyUserName != null && message.hasOwnProperty("thirdPartyUserName"))
                if (!$util.isString(message.thirdPartyUserName))
                    return "thirdPartyUserName: string expected";
            if (message.thirdPartyPictureUrl != null && message.hasOwnProperty("thirdPartyPictureUrl"))
                if (!$util.isString(message.thirdPartyPictureUrl))
                    return "thirdPartyPictureUrl: string expected";
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                if (!$util.isString(message.ipAddress))
                    return "ipAddress: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.phoneModel != null && message.hasOwnProperty("phoneModel"))
                if (!$util.isString(message.phoneModel))
                    return "phoneModel: string expected";
            if (message.os != null && message.hasOwnProperty("os"))
                if (!$util.isString(message.os))
                    return "os: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginRequest)
                return object;
            var message = new $root.pb.LoginRequest();
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.thirdPartyId != null)
                message.thirdPartyId = String(object.thirdPartyId);
            switch (object.thirdParty) {
            case "TP_NONE":
            case 0:
                message.thirdParty = 0;
                break;
            case "TP_FB":
            case 1:
                message.thirdParty = 1;
                break;
            }
            if (object.thirdPartyUserName != null)
                message.thirdPartyUserName = String(object.thirdPartyUserName);
            if (object.thirdPartyPictureUrl != null)
                message.thirdPartyPictureUrl = String(object.thirdPartyPictureUrl);
            if (object.ipAddress != null)
                message.ipAddress = String(object.ipAddress);
            if (object.country != null)
                message.country = String(object.country);
            if (object.language != null)
                message.language = String(object.language);
            if (object.phoneModel != null)
                message.phoneModel = String(object.phoneModel);
            if (object.os != null)
                message.os = String(object.os);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginRequest
         * @static
         * @param {pb.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.clientId = "";
                object.thirdPartyId = "";
                object.thirdParty = options.enums === String ? "TP_NONE" : 0;
                object.thirdPartyUserName = "";
                object.thirdPartyPictureUrl = "";
                object.ipAddress = "";
                object.country = "";
                object.language = "";
                object.phoneModel = "";
                object.os = "";
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.thirdPartyId != null && message.hasOwnProperty("thirdPartyId"))
                object.thirdPartyId = message.thirdPartyId;
            if (message.thirdParty != null && message.hasOwnProperty("thirdParty"))
                object.thirdParty = options.enums === String ? $root.pb.ThirdParty[message.thirdParty] : message.thirdParty;
            if (message.thirdPartyUserName != null && message.hasOwnProperty("thirdPartyUserName"))
                object.thirdPartyUserName = message.thirdPartyUserName;
            if (message.thirdPartyPictureUrl != null && message.hasOwnProperty("thirdPartyPictureUrl"))
                object.thirdPartyPictureUrl = message.thirdPartyPictureUrl;
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                object.ipAddress = message.ipAddress;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.phoneModel != null && message.hasOwnProperty("phoneModel"))
                object.phoneModel = message.phoneModel;
            if (message.os != null && message.hasOwnProperty("os"))
                object.os = message.os;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof pb.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    pb.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof pb
         * @interface ILoginResponse
         * @property {string|null} [aesKey] LoginResponse aesKey
         * @property {string|null} [aesIv] LoginResponse aesIv
         * @property {string|null} [playerId] LoginResponse playerId
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof pb
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {pb.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse aesKey.
         * @member {string} aesKey
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.aesKey = "";

        /**
         * LoginResponse aesIv.
         * @member {string} aesIv
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.aesIv = "";

        /**
         * LoginResponse playerId.
         * @member {string} playerId
         * @memberof pb.LoginResponse
         * @instance
         */
        LoginResponse.prototype.playerId = "";

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof pb.LoginResponse
         * @static
         * @param {pb.ILoginResponse=} [properties] Properties to set
         * @returns {pb.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link pb.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof pb.LoginResponse
         * @static
         * @param {pb.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.aesKey != null && Object.hasOwnProperty.call(message, "aesKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.aesKey);
            if (message.aesIv != null && Object.hasOwnProperty.call(message, "aesIv"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.aesIv);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link pb.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.LoginResponse
         * @static
         * @param {pb.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pb.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.aesKey = reader.string();
                    break;
                case 2:
                    message.aesIv = reader.string();
                    break;
                case 3:
                    message.playerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof pb.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aesKey != null && message.hasOwnProperty("aesKey"))
                if (!$util.isString(message.aesKey))
                    return "aesKey: string expected";
            if (message.aesIv != null && message.hasOwnProperty("aesIv"))
                if (!$util.isString(message.aesIv))
                    return "aesIv: string expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.LoginResponse)
                return object;
            var message = new $root.pb.LoginResponse();
            if (object.aesKey != null)
                message.aesKey = String(object.aesKey);
            if (object.aesIv != null)
                message.aesIv = String(object.aesIv);
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.LoginResponse
         * @static
         * @param {pb.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.aesKey = "";
                object.aesIv = "";
                object.playerId = "";
            }
            if (message.aesKey != null && message.hasOwnProperty("aesKey"))
                object.aesKey = message.aesKey;
            if (message.aesIv != null && message.hasOwnProperty("aesIv"))
                object.aesIv = message.aesIv;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof pb.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    pb.PlatformPlayer = (function() {

        /**
         * Properties of a PlatformPlayer.
         * @memberof pb
         * @interface IPlatformPlayer
         * @property {string|null} [id] PlatformPlayer id
         * @property {number|Long|null} [sn] PlatformPlayer sn
         * @property {string|null} [name] PlatformPlayer name
         * @property {string|null} [currency] PlatformPlayer currency
         * @property {string|null} [language] PlatformPlayer language
         * @property {number|Long|null} [credit] PlatformPlayer credit
         * @property {number|null} [balance] PlatformPlayer balance
         * @property {string|null} [idAtPlatform] PlatformPlayer idAtPlatform
         * @property {string|null} [accessToken] PlatformPlayer accessToken
         * @property {string|null} [displayName] PlatformPlayer displayName
         * @property {string|null} [platform] PlatformPlayer platform
         */

        /**
         * Constructs a new PlatformPlayer.
         * @memberof pb
         * @classdesc Represents a PlatformPlayer.
         * @implements IPlatformPlayer
         * @constructor
         * @param {pb.IPlatformPlayer=} [properties] Properties to set
         */
        function PlatformPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlatformPlayer id.
         * @member {string} id
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.id = "";

        /**
         * PlatformPlayer sn.
         * @member {number|Long} sn
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.sn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlatformPlayer name.
         * @member {string} name
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.name = "";

        /**
         * PlatformPlayer currency.
         * @member {string} currency
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.currency = "";

        /**
         * PlatformPlayer language.
         * @member {string} language
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.language = "";

        /**
         * PlatformPlayer credit.
         * @member {number|Long} credit
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlatformPlayer balance.
         * @member {number} balance
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.balance = 0;

        /**
         * PlatformPlayer idAtPlatform.
         * @member {string} idAtPlatform
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.idAtPlatform = "";

        /**
         * PlatformPlayer accessToken.
         * @member {string} accessToken
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.accessToken = "";

        /**
         * PlatformPlayer displayName.
         * @member {string} displayName
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.displayName = "";

        /**
         * PlatformPlayer platform.
         * @member {string} platform
         * @memberof pb.PlatformPlayer
         * @instance
         */
        PlatformPlayer.prototype.platform = "";

        /**
         * Creates a new PlatformPlayer instance using the specified properties.
         * @function create
         * @memberof pb.PlatformPlayer
         * @static
         * @param {pb.IPlatformPlayer=} [properties] Properties to set
         * @returns {pb.PlatformPlayer} PlatformPlayer instance
         */
        PlatformPlayer.create = function create(properties) {
            return new PlatformPlayer(properties);
        };

        /**
         * Encodes the specified PlatformPlayer message. Does not implicitly {@link pb.PlatformPlayer.verify|verify} messages.
         * @function encode
         * @memberof pb.PlatformPlayer
         * @static
         * @param {pb.IPlatformPlayer} message PlatformPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.sn != null && Object.hasOwnProperty.call(message, "sn"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sn);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.currency);
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.language);
            if (message.credit != null && Object.hasOwnProperty.call(message, "credit"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.credit);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.balance);
            if (message.idAtPlatform != null && Object.hasOwnProperty.call(message, "idAtPlatform"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.idAtPlatform);
            if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.accessToken);
            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.displayName);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.platform);
            return writer;
        };

        /**
         * Encodes the specified PlatformPlayer message, length delimited. Does not implicitly {@link pb.PlatformPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PlatformPlayer
         * @static
         * @param {pb.IPlatformPlayer} message PlatformPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlatformPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlatformPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PlatformPlayer} PlatformPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PlatformPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sn = reader.int64();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.currency = reader.string();
                    break;
                case 5:
                    message.language = reader.string();
                    break;
                case 6:
                    message.credit = reader.int64();
                    break;
                case 7:
                    message.balance = reader.double();
                    break;
                case 8:
                    message.idAtPlatform = reader.string();
                    break;
                case 9:
                    message.accessToken = reader.string();
                    break;
                case 10:
                    message.displayName = reader.string();
                    break;
                case 11:
                    message.platform = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlatformPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PlatformPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PlatformPlayer} PlatformPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlatformPlayer message.
         * @function verify
         * @memberof pb.PlatformPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlatformPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.sn != null && message.hasOwnProperty("sn"))
                if (!$util.isInteger(message.sn) && !(message.sn && $util.isInteger(message.sn.low) && $util.isInteger(message.sn.high)))
                    return "sn: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.currency != null && message.hasOwnProperty("currency"))
                if (!$util.isString(message.currency))
                    return "currency: string expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.credit != null && message.hasOwnProperty("credit"))
                if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                    return "credit: integer|Long expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            if (message.idAtPlatform != null && message.hasOwnProperty("idAtPlatform"))
                if (!$util.isString(message.idAtPlatform))
                    return "idAtPlatform: string expected";
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                if (!$util.isString(message.accessToken))
                    return "accessToken: string expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            return null;
        };

        /**
         * Creates a PlatformPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PlatformPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PlatformPlayer} PlatformPlayer
         */
        PlatformPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PlatformPlayer)
                return object;
            var message = new $root.pb.PlatformPlayer();
            if (object.id != null)
                message.id = String(object.id);
            if (object.sn != null)
                if ($util.Long)
                    (message.sn = $util.Long.fromValue(object.sn)).unsigned = false;
                else if (typeof object.sn === "string")
                    message.sn = parseInt(object.sn, 10);
                else if (typeof object.sn === "number")
                    message.sn = object.sn;
                else if (typeof object.sn === "object")
                    message.sn = new $util.LongBits(object.sn.low >>> 0, object.sn.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.language != null)
                message.language = String(object.language);
            if (object.credit != null)
                if ($util.Long)
                    (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                else if (typeof object.credit === "string")
                    message.credit = parseInt(object.credit, 10);
                else if (typeof object.credit === "number")
                    message.credit = object.credit;
                else if (typeof object.credit === "object")
                    message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
            if (object.balance != null)
                message.balance = Number(object.balance);
            if (object.idAtPlatform != null)
                message.idAtPlatform = String(object.idAtPlatform);
            if (object.accessToken != null)
                message.accessToken = String(object.accessToken);
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.platform != null)
                message.platform = String(object.platform);
            return message;
        };

        /**
         * Creates a plain object from a PlatformPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PlatformPlayer
         * @static
         * @param {pb.PlatformPlayer} message PlatformPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlatformPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sn = options.longs === String ? "0" : 0;
                object.name = "";
                object.currency = "";
                object.language = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.credit = options.longs === String ? "0" : 0;
                object.balance = 0;
                object.idAtPlatform = "";
                object.accessToken = "";
                object.displayName = "";
                object.platform = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.sn != null && message.hasOwnProperty("sn"))
                if (typeof message.sn === "number")
                    object.sn = options.longs === String ? String(message.sn) : message.sn;
                else
                    object.sn = options.longs === String ? $util.Long.prototype.toString.call(message.sn) : options.longs === Number ? new $util.LongBits(message.sn.low >>> 0, message.sn.high >>> 0).toNumber() : message.sn;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.credit != null && message.hasOwnProperty("credit"))
                if (typeof message.credit === "number")
                    object.credit = options.longs === String ? String(message.credit) : message.credit;
                else
                    object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            if (message.idAtPlatform != null && message.hasOwnProperty("idAtPlatform"))
                object.idAtPlatform = message.idAtPlatform;
            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                object.accessToken = message.accessToken;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            return object;
        };

        /**
         * Converts this PlatformPlayer to JSON.
         * @function toJSON
         * @memberof pb.PlatformPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlatformPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlatformPlayer;
    })();

    pb.PlatformProvider = (function() {

        /**
         * Properties of a PlatformProvider.
         * @memberof pb
         * @interface IPlatformProvider
         * @property {string|null} [factoryName] PlatformProvider factoryName
         * @property {string|null} [name] PlatformProvider name
         * @property {string|null} [aesKey] PlatformProvider aesKey
         * @property {string|null} [aesIv] PlatformProvider aesIv
         * @property {string|null} [apiUrlBase] PlatformProvider apiUrlBase
         * @property {string|null} [publicIpAddress] PlatformProvider publicIpAddress
         * @property {string|null} [runMode] PlatformProvider runMode
         * @property {pb.IAuth|null} [auth] PlatformProvider auth
         */

        /**
         * Constructs a new PlatformProvider.
         * @memberof pb
         * @classdesc Represents a PlatformProvider.
         * @implements IPlatformProvider
         * @constructor
         * @param {pb.IPlatformProvider=} [properties] Properties to set
         */
        function PlatformProvider(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlatformProvider factoryName.
         * @member {string} factoryName
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.factoryName = "";

        /**
         * PlatformProvider name.
         * @member {string} name
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.name = "";

        /**
         * PlatformProvider aesKey.
         * @member {string} aesKey
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.aesKey = "";

        /**
         * PlatformProvider aesIv.
         * @member {string} aesIv
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.aesIv = "";

        /**
         * PlatformProvider apiUrlBase.
         * @member {string} apiUrlBase
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.apiUrlBase = "";

        /**
         * PlatformProvider publicIpAddress.
         * @member {string} publicIpAddress
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.publicIpAddress = "";

        /**
         * PlatformProvider runMode.
         * @member {string} runMode
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.runMode = "";

        /**
         * PlatformProvider auth.
         * @member {pb.IAuth|null|undefined} auth
         * @memberof pb.PlatformProvider
         * @instance
         */
        PlatformProvider.prototype.auth = null;

        /**
         * Creates a new PlatformProvider instance using the specified properties.
         * @function create
         * @memberof pb.PlatformProvider
         * @static
         * @param {pb.IPlatformProvider=} [properties] Properties to set
         * @returns {pb.PlatformProvider} PlatformProvider instance
         */
        PlatformProvider.create = function create(properties) {
            return new PlatformProvider(properties);
        };

        /**
         * Encodes the specified PlatformProvider message. Does not implicitly {@link pb.PlatformProvider.verify|verify} messages.
         * @function encode
         * @memberof pb.PlatformProvider
         * @static
         * @param {pb.IPlatformProvider} message PlatformProvider message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformProvider.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.factoryName != null && Object.hasOwnProperty.call(message, "factoryName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.factoryName);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.aesKey != null && Object.hasOwnProperty.call(message, "aesKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.aesKey);
            if (message.aesIv != null && Object.hasOwnProperty.call(message, "aesIv"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.aesIv);
            if (message.apiUrlBase != null && Object.hasOwnProperty.call(message, "apiUrlBase"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.apiUrlBase);
            if (message.publicIpAddress != null && Object.hasOwnProperty.call(message, "publicIpAddress"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.publicIpAddress);
            if (message.runMode != null && Object.hasOwnProperty.call(message, "runMode"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.runMode);
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                $root.pb.Auth.encode(message.auth, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlatformProvider message, length delimited. Does not implicitly {@link pb.PlatformProvider.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PlatformProvider
         * @static
         * @param {pb.IPlatformProvider} message PlatformProvider message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformProvider.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlatformProvider message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlatformProvider
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PlatformProvider} PlatformProvider
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformProvider.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PlatformProvider();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.factoryName = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.aesKey = reader.string();
                    break;
                case 4:
                    message.aesIv = reader.string();
                    break;
                case 5:
                    message.apiUrlBase = reader.string();
                    break;
                case 6:
                    message.publicIpAddress = reader.string();
                    break;
                case 7:
                    message.runMode = reader.string();
                    break;
                case 8:
                    message.auth = $root.pb.Auth.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlatformProvider message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PlatformProvider
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PlatformProvider} PlatformProvider
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformProvider.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlatformProvider message.
         * @function verify
         * @memberof pb.PlatformProvider
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlatformProvider.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.factoryName != null && message.hasOwnProperty("factoryName"))
                if (!$util.isString(message.factoryName))
                    return "factoryName: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.aesKey != null && message.hasOwnProperty("aesKey"))
                if (!$util.isString(message.aesKey))
                    return "aesKey: string expected";
            if (message.aesIv != null && message.hasOwnProperty("aesIv"))
                if (!$util.isString(message.aesIv))
                    return "aesIv: string expected";
            if (message.apiUrlBase != null && message.hasOwnProperty("apiUrlBase"))
                if (!$util.isString(message.apiUrlBase))
                    return "apiUrlBase: string expected";
            if (message.publicIpAddress != null && message.hasOwnProperty("publicIpAddress"))
                if (!$util.isString(message.publicIpAddress))
                    return "publicIpAddress: string expected";
            if (message.runMode != null && message.hasOwnProperty("runMode"))
                if (!$util.isString(message.runMode))
                    return "runMode: string expected";
            if (message.auth != null && message.hasOwnProperty("auth")) {
                var error = $root.pb.Auth.verify(message.auth);
                if (error)
                    return "auth." + error;
            }
            return null;
        };

        /**
         * Creates a PlatformProvider message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PlatformProvider
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PlatformProvider} PlatformProvider
         */
        PlatformProvider.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PlatformProvider)
                return object;
            var message = new $root.pb.PlatformProvider();
            if (object.factoryName != null)
                message.factoryName = String(object.factoryName);
            if (object.name != null)
                message.name = String(object.name);
            if (object.aesKey != null)
                message.aesKey = String(object.aesKey);
            if (object.aesIv != null)
                message.aesIv = String(object.aesIv);
            if (object.apiUrlBase != null)
                message.apiUrlBase = String(object.apiUrlBase);
            if (object.publicIpAddress != null)
                message.publicIpAddress = String(object.publicIpAddress);
            if (object.runMode != null)
                message.runMode = String(object.runMode);
            if (object.auth != null) {
                if (typeof object.auth !== "object")
                    throw TypeError(".pb.PlatformProvider.auth: object expected");
                message.auth = $root.pb.Auth.fromObject(object.auth);
            }
            return message;
        };

        /**
         * Creates a plain object from a PlatformProvider message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PlatformProvider
         * @static
         * @param {pb.PlatformProvider} message PlatformProvider
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlatformProvider.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.factoryName = "";
                object.name = "";
                object.aesKey = "";
                object.aesIv = "";
                object.apiUrlBase = "";
                object.publicIpAddress = "";
                object.runMode = "";
                object.auth = null;
            }
            if (message.factoryName != null && message.hasOwnProperty("factoryName"))
                object.factoryName = message.factoryName;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.aesKey != null && message.hasOwnProperty("aesKey"))
                object.aesKey = message.aesKey;
            if (message.aesIv != null && message.hasOwnProperty("aesIv"))
                object.aesIv = message.aesIv;
            if (message.apiUrlBase != null && message.hasOwnProperty("apiUrlBase"))
                object.apiUrlBase = message.apiUrlBase;
            if (message.publicIpAddress != null && message.hasOwnProperty("publicIpAddress"))
                object.publicIpAddress = message.publicIpAddress;
            if (message.runMode != null && message.hasOwnProperty("runMode"))
                object.runMode = message.runMode;
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = $root.pb.Auth.toObject(message.auth, options);
            return object;
        };

        /**
         * Converts this PlatformProvider to JSON.
         * @function toJSON
         * @memberof pb.PlatformProvider
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlatformProvider.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlatformProvider;
    })();

    pb.PlatformProviderAPIPath = (function() {

        /**
         * Properties of a PlatformProviderAPIPath.
         * @memberof pb
         * @interface IPlatformProviderAPIPath
         * @property {string|null} [oauthAccessToken] PlatformProviderAPIPath oauthAccessToken
         * @property {string|null} [playerTokenValidate] PlatformProviderAPIPath playerTokenValidate
         * @property {string|null} [playerInfo] PlatformProviderAPIPath playerInfo
         * @property {string|null} [playerBetPlace] PlatformProviderAPIPath playerBetPlace
         * @property {string|null} [playerBetSettle] PlatformProviderAPIPath playerBetSettle
         * @property {string|null} [playerTransactionLock] PlatformProviderAPIPath playerTransactionLock
         * @property {string|null} [playerTransactionCancel] PlatformProviderAPIPath playerTransactionCancel
         */

        /**
         * Constructs a new PlatformProviderAPIPath.
         * @memberof pb
         * @classdesc Represents a PlatformProviderAPIPath.
         * @implements IPlatformProviderAPIPath
         * @constructor
         * @param {pb.IPlatformProviderAPIPath=} [properties] Properties to set
         */
        function PlatformProviderAPIPath(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlatformProviderAPIPath oauthAccessToken.
         * @member {string} oauthAccessToken
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         */
        PlatformProviderAPIPath.prototype.oauthAccessToken = "";

        /**
         * PlatformProviderAPIPath playerTokenValidate.
         * @member {string} playerTokenValidate
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         */
        PlatformProviderAPIPath.prototype.playerTokenValidate = "";

        /**
         * PlatformProviderAPIPath playerInfo.
         * @member {string} playerInfo
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         */
        PlatformProviderAPIPath.prototype.playerInfo = "";

        /**
         * PlatformProviderAPIPath playerBetPlace.
         * @member {string} playerBetPlace
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         */
        PlatformProviderAPIPath.prototype.playerBetPlace = "";

        /**
         * PlatformProviderAPIPath playerBetSettle.
         * @member {string} playerBetSettle
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         */
        PlatformProviderAPIPath.prototype.playerBetSettle = "";

        /**
         * PlatformProviderAPIPath playerTransactionLock.
         * @member {string} playerTransactionLock
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         */
        PlatformProviderAPIPath.prototype.playerTransactionLock = "";

        /**
         * PlatformProviderAPIPath playerTransactionCancel.
         * @member {string} playerTransactionCancel
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         */
        PlatformProviderAPIPath.prototype.playerTransactionCancel = "";

        /**
         * Creates a new PlatformProviderAPIPath instance using the specified properties.
         * @function create
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {pb.IPlatformProviderAPIPath=} [properties] Properties to set
         * @returns {pb.PlatformProviderAPIPath} PlatformProviderAPIPath instance
         */
        PlatformProviderAPIPath.create = function create(properties) {
            return new PlatformProviderAPIPath(properties);
        };

        /**
         * Encodes the specified PlatformProviderAPIPath message. Does not implicitly {@link pb.PlatformProviderAPIPath.verify|verify} messages.
         * @function encode
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {pb.IPlatformProviderAPIPath} message PlatformProviderAPIPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformProviderAPIPath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oauthAccessToken != null && Object.hasOwnProperty.call(message, "oauthAccessToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.oauthAccessToken);
            if (message.playerTokenValidate != null && Object.hasOwnProperty.call(message, "playerTokenValidate"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerTokenValidate);
            if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerInfo);
            if (message.playerBetPlace != null && Object.hasOwnProperty.call(message, "playerBetPlace"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerBetPlace);
            if (message.playerBetSettle != null && Object.hasOwnProperty.call(message, "playerBetSettle"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.playerBetSettle);
            if (message.playerTransactionLock != null && Object.hasOwnProperty.call(message, "playerTransactionLock"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.playerTransactionLock);
            if (message.playerTransactionCancel != null && Object.hasOwnProperty.call(message, "playerTransactionCancel"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.playerTransactionCancel);
            return writer;
        };

        /**
         * Encodes the specified PlatformProviderAPIPath message, length delimited. Does not implicitly {@link pb.PlatformProviderAPIPath.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {pb.IPlatformProviderAPIPath} message PlatformProviderAPIPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformProviderAPIPath.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlatformProviderAPIPath message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PlatformProviderAPIPath} PlatformProviderAPIPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformProviderAPIPath.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PlatformProviderAPIPath();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.oauthAccessToken = reader.string();
                    break;
                case 2:
                    message.playerTokenValidate = reader.string();
                    break;
                case 3:
                    message.playerInfo = reader.string();
                    break;
                case 4:
                    message.playerBetPlace = reader.string();
                    break;
                case 5:
                    message.playerBetSettle = reader.string();
                    break;
                case 6:
                    message.playerTransactionLock = reader.string();
                    break;
                case 7:
                    message.playerTransactionCancel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlatformProviderAPIPath message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PlatformProviderAPIPath} PlatformProviderAPIPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformProviderAPIPath.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlatformProviderAPIPath message.
         * @function verify
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlatformProviderAPIPath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oauthAccessToken != null && message.hasOwnProperty("oauthAccessToken"))
                if (!$util.isString(message.oauthAccessToken))
                    return "oauthAccessToken: string expected";
            if (message.playerTokenValidate != null && message.hasOwnProperty("playerTokenValidate"))
                if (!$util.isString(message.playerTokenValidate))
                    return "playerTokenValidate: string expected";
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                if (!$util.isString(message.playerInfo))
                    return "playerInfo: string expected";
            if (message.playerBetPlace != null && message.hasOwnProperty("playerBetPlace"))
                if (!$util.isString(message.playerBetPlace))
                    return "playerBetPlace: string expected";
            if (message.playerBetSettle != null && message.hasOwnProperty("playerBetSettle"))
                if (!$util.isString(message.playerBetSettle))
                    return "playerBetSettle: string expected";
            if (message.playerTransactionLock != null && message.hasOwnProperty("playerTransactionLock"))
                if (!$util.isString(message.playerTransactionLock))
                    return "playerTransactionLock: string expected";
            if (message.playerTransactionCancel != null && message.hasOwnProperty("playerTransactionCancel"))
                if (!$util.isString(message.playerTransactionCancel))
                    return "playerTransactionCancel: string expected";
            return null;
        };

        /**
         * Creates a PlatformProviderAPIPath message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PlatformProviderAPIPath} PlatformProviderAPIPath
         */
        PlatformProviderAPIPath.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PlatformProviderAPIPath)
                return object;
            var message = new $root.pb.PlatformProviderAPIPath();
            if (object.oauthAccessToken != null)
                message.oauthAccessToken = String(object.oauthAccessToken);
            if (object.playerTokenValidate != null)
                message.playerTokenValidate = String(object.playerTokenValidate);
            if (object.playerInfo != null)
                message.playerInfo = String(object.playerInfo);
            if (object.playerBetPlace != null)
                message.playerBetPlace = String(object.playerBetPlace);
            if (object.playerBetSettle != null)
                message.playerBetSettle = String(object.playerBetSettle);
            if (object.playerTransactionLock != null)
                message.playerTransactionLock = String(object.playerTransactionLock);
            if (object.playerTransactionCancel != null)
                message.playerTransactionCancel = String(object.playerTransactionCancel);
            return message;
        };

        /**
         * Creates a plain object from a PlatformProviderAPIPath message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PlatformProviderAPIPath
         * @static
         * @param {pb.PlatformProviderAPIPath} message PlatformProviderAPIPath
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlatformProviderAPIPath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.oauthAccessToken = "";
                object.playerTokenValidate = "";
                object.playerInfo = "";
                object.playerBetPlace = "";
                object.playerBetSettle = "";
                object.playerTransactionLock = "";
                object.playerTransactionCancel = "";
            }
            if (message.oauthAccessToken != null && message.hasOwnProperty("oauthAccessToken"))
                object.oauthAccessToken = message.oauthAccessToken;
            if (message.playerTokenValidate != null && message.hasOwnProperty("playerTokenValidate"))
                object.playerTokenValidate = message.playerTokenValidate;
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                object.playerInfo = message.playerInfo;
            if (message.playerBetPlace != null && message.hasOwnProperty("playerBetPlace"))
                object.playerBetPlace = message.playerBetPlace;
            if (message.playerBetSettle != null && message.hasOwnProperty("playerBetSettle"))
                object.playerBetSettle = message.playerBetSettle;
            if (message.playerTransactionLock != null && message.hasOwnProperty("playerTransactionLock"))
                object.playerTransactionLock = message.playerTransactionLock;
            if (message.playerTransactionCancel != null && message.hasOwnProperty("playerTransactionCancel"))
                object.playerTransactionCancel = message.playerTransactionCancel;
            return object;
        };

        /**
         * Converts this PlatformProviderAPIPath to JSON.
         * @function toJSON
         * @memberof pb.PlatformProviderAPIPath
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlatformProviderAPIPath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlatformProviderAPIPath;
    })();

    pb.PlatformLog = (function() {

        /**
         * Properties of a PlatformLog.
         * @memberof pb
         * @interface IPlatformLog
         * @property {string|null} [transactionId] PlatformLog transactionId
         * @property {number|Long|null} [playerSn] PlatformLog playerSn
         * @property {string|null} [playerId] PlatformLog playerId
         * @property {string|null} [playerName] PlatformLog playerName
         * @property {string|null} [playerIdAtPlatform] PlatformLog playerIdAtPlatform
         * @property {string|null} [platform] PlatformLog platform
         * @property {number|Long|null} [action] PlatformLog action
         * @property {number|Long|null} [credit] PlatformLog credit
         * @property {string|null} [currency] PlatformLog currency
         * @property {number|null} [amount] PlatformLog amount
         * @property {number|null} [balance] PlatformLog balance
         * @property {number|Long|null} [status] PlatformLog status
         * @property {string|null} [errorMsg] PlatformLog errorMsg
         * @property {number|Long|null} [createdTime] PlatformLog createdTime
         */

        /**
         * Constructs a new PlatformLog.
         * @memberof pb
         * @classdesc Represents a PlatformLog.
         * @implements IPlatformLog
         * @constructor
         * @param {pb.IPlatformLog=} [properties] Properties to set
         */
        function PlatformLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlatformLog transactionId.
         * @member {string} transactionId
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.transactionId = "";

        /**
         * PlatformLog playerSn.
         * @member {number|Long} playerSn
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.playerSn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlatformLog playerId.
         * @member {string} playerId
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.playerId = "";

        /**
         * PlatformLog playerName.
         * @member {string} playerName
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.playerName = "";

        /**
         * PlatformLog playerIdAtPlatform.
         * @member {string} playerIdAtPlatform
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.playerIdAtPlatform = "";

        /**
         * PlatformLog platform.
         * @member {string} platform
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.platform = "";

        /**
         * PlatformLog action.
         * @member {number|Long} action
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.action = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlatformLog credit.
         * @member {number|Long} credit
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlatformLog currency.
         * @member {string} currency
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.currency = "";

        /**
         * PlatformLog amount.
         * @member {number} amount
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.amount = 0;

        /**
         * PlatformLog balance.
         * @member {number} balance
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.balance = 0;

        /**
         * PlatformLog status.
         * @member {number|Long} status
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlatformLog errorMsg.
         * @member {string} errorMsg
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.errorMsg = "";

        /**
         * PlatformLog createdTime.
         * @member {number|Long} createdTime
         * @memberof pb.PlatformLog
         * @instance
         */
        PlatformLog.prototype.createdTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PlatformLog instance using the specified properties.
         * @function create
         * @memberof pb.PlatformLog
         * @static
         * @param {pb.IPlatformLog=} [properties] Properties to set
         * @returns {pb.PlatformLog} PlatformLog instance
         */
        PlatformLog.create = function create(properties) {
            return new PlatformLog(properties);
        };

        /**
         * Encodes the specified PlatformLog message. Does not implicitly {@link pb.PlatformLog.verify|verify} messages.
         * @function encode
         * @memberof pb.PlatformLog
         * @static
         * @param {pb.IPlatformLog} message PlatformLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.transactionId);
            if (message.playerSn != null && Object.hasOwnProperty.call(message, "playerSn"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerSn);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerId);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerName);
            if (message.playerIdAtPlatform != null && Object.hasOwnProperty.call(message, "playerIdAtPlatform"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.playerIdAtPlatform);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.platform);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.action);
            if (message.credit != null && Object.hasOwnProperty.call(message, "credit"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.credit);
            if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.currency);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.amount);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.balance);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.status);
            if (message.errorMsg != null && Object.hasOwnProperty.call(message, "errorMsg"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.errorMsg);
            if (message.createdTime != null && Object.hasOwnProperty.call(message, "createdTime"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.createdTime);
            return writer;
        };

        /**
         * Encodes the specified PlatformLog message, length delimited. Does not implicitly {@link pb.PlatformLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PlatformLog
         * @static
         * @param {pb.IPlatformLog} message PlatformLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlatformLog message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlatformLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PlatformLog} PlatformLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PlatformLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.transactionId = reader.string();
                    break;
                case 2:
                    message.playerSn = reader.int64();
                    break;
                case 3:
                    message.playerId = reader.string();
                    break;
                case 4:
                    message.playerName = reader.string();
                    break;
                case 5:
                    message.playerIdAtPlatform = reader.string();
                    break;
                case 6:
                    message.platform = reader.string();
                    break;
                case 7:
                    message.action = reader.int64();
                    break;
                case 8:
                    message.credit = reader.int64();
                    break;
                case 9:
                    message.currency = reader.string();
                    break;
                case 10:
                    message.amount = reader.double();
                    break;
                case 11:
                    message.balance = reader.double();
                    break;
                case 12:
                    message.status = reader.int64();
                    break;
                case 13:
                    message.errorMsg = reader.string();
                    break;
                case 14:
                    message.createdTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlatformLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PlatformLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PlatformLog} PlatformLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlatformLog message.
         * @function verify
         * @memberof pb.PlatformLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlatformLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (!$util.isString(message.transactionId))
                    return "transactionId: string expected";
            if (message.playerSn != null && message.hasOwnProperty("playerSn"))
                if (!$util.isInteger(message.playerSn) && !(message.playerSn && $util.isInteger(message.playerSn.low) && $util.isInteger(message.playerSn.high)))
                    return "playerSn: integer|Long expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.playerIdAtPlatform != null && message.hasOwnProperty("playerIdAtPlatform"))
                if (!$util.isString(message.playerIdAtPlatform))
                    return "playerIdAtPlatform: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isInteger(message.action) && !(message.action && $util.isInteger(message.action.low) && $util.isInteger(message.action.high)))
                    return "action: integer|Long expected";
            if (message.credit != null && message.hasOwnProperty("credit"))
                if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                    return "credit: integer|Long expected";
            if (message.currency != null && message.hasOwnProperty("currency"))
                if (!$util.isString(message.currency))
                    return "currency: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                    return "status: integer|Long expected";
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                if (!$util.isString(message.errorMsg))
                    return "errorMsg: string expected";
            if (message.createdTime != null && message.hasOwnProperty("createdTime"))
                if (!$util.isInteger(message.createdTime) && !(message.createdTime && $util.isInteger(message.createdTime.low) && $util.isInteger(message.createdTime.high)))
                    return "createdTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a PlatformLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PlatformLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PlatformLog} PlatformLog
         */
        PlatformLog.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PlatformLog)
                return object;
            var message = new $root.pb.PlatformLog();
            if (object.transactionId != null)
                message.transactionId = String(object.transactionId);
            if (object.playerSn != null)
                if ($util.Long)
                    (message.playerSn = $util.Long.fromValue(object.playerSn)).unsigned = false;
                else if (typeof object.playerSn === "string")
                    message.playerSn = parseInt(object.playerSn, 10);
                else if (typeof object.playerSn === "number")
                    message.playerSn = object.playerSn;
                else if (typeof object.playerSn === "object")
                    message.playerSn = new $util.LongBits(object.playerSn.low >>> 0, object.playerSn.high >>> 0).toNumber();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.playerIdAtPlatform != null)
                message.playerIdAtPlatform = String(object.playerIdAtPlatform);
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.action != null)
                if ($util.Long)
                    (message.action = $util.Long.fromValue(object.action)).unsigned = false;
                else if (typeof object.action === "string")
                    message.action = parseInt(object.action, 10);
                else if (typeof object.action === "number")
                    message.action = object.action;
                else if (typeof object.action === "object")
                    message.action = new $util.LongBits(object.action.low >>> 0, object.action.high >>> 0).toNumber();
            if (object.credit != null)
                if ($util.Long)
                    (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                else if (typeof object.credit === "string")
                    message.credit = parseInt(object.credit, 10);
                else if (typeof object.credit === "number")
                    message.credit = object.credit;
                else if (typeof object.credit === "object")
                    message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.amount != null)
                message.amount = Number(object.amount);
            if (object.balance != null)
                message.balance = Number(object.balance);
            if (object.status != null)
                if ($util.Long)
                    (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                else if (typeof object.status === "string")
                    message.status = parseInt(object.status, 10);
                else if (typeof object.status === "number")
                    message.status = object.status;
                else if (typeof object.status === "object")
                    message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
            if (object.errorMsg != null)
                message.errorMsg = String(object.errorMsg);
            if (object.createdTime != null)
                if ($util.Long)
                    (message.createdTime = $util.Long.fromValue(object.createdTime)).unsigned = false;
                else if (typeof object.createdTime === "string")
                    message.createdTime = parseInt(object.createdTime, 10);
                else if (typeof object.createdTime === "number")
                    message.createdTime = object.createdTime;
                else if (typeof object.createdTime === "object")
                    message.createdTime = new $util.LongBits(object.createdTime.low >>> 0, object.createdTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PlatformLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PlatformLog
         * @static
         * @param {pb.PlatformLog} message PlatformLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlatformLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.transactionId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerSn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playerSn = options.longs === String ? "0" : 0;
                object.playerId = "";
                object.playerName = "";
                object.playerIdAtPlatform = "";
                object.platform = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.action = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.action = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.credit = options.longs === String ? "0" : 0;
                object.currency = "";
                object.amount = 0;
                object.balance = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.status = options.longs === String ? "0" : 0;
                object.errorMsg = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdTime = options.longs === String ? "0" : 0;
            }
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                object.transactionId = message.transactionId;
            if (message.playerSn != null && message.hasOwnProperty("playerSn"))
                if (typeof message.playerSn === "number")
                    object.playerSn = options.longs === String ? String(message.playerSn) : message.playerSn;
                else
                    object.playerSn = options.longs === String ? $util.Long.prototype.toString.call(message.playerSn) : options.longs === Number ? new $util.LongBits(message.playerSn.low >>> 0, message.playerSn.high >>> 0).toNumber() : message.playerSn;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.playerIdAtPlatform != null && message.hasOwnProperty("playerIdAtPlatform"))
                object.playerIdAtPlatform = message.playerIdAtPlatform;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.action != null && message.hasOwnProperty("action"))
                if (typeof message.action === "number")
                    object.action = options.longs === String ? String(message.action) : message.action;
                else
                    object.action = options.longs === String ? $util.Long.prototype.toString.call(message.action) : options.longs === Number ? new $util.LongBits(message.action.low >>> 0, message.action.high >>> 0).toNumber() : message.action;
            if (message.credit != null && message.hasOwnProperty("credit"))
                if (typeof message.credit === "number")
                    object.credit = options.longs === String ? String(message.credit) : message.credit;
                else
                    object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status === "number")
                    object.status = options.longs === String ? String(message.status) : message.status;
                else
                    object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                object.errorMsg = message.errorMsg;
            if (message.createdTime != null && message.hasOwnProperty("createdTime"))
                if (typeof message.createdTime === "number")
                    object.createdTime = options.longs === String ? String(message.createdTime) : message.createdTime;
                else
                    object.createdTime = options.longs === String ? $util.Long.prototype.toString.call(message.createdTime) : options.longs === Number ? new $util.LongBits(message.createdTime.low >>> 0, message.createdTime.high >>> 0).toNumber() : message.createdTime;
            return object;
        };

        /**
         * Converts this PlatformLog to JSON.
         * @function toJSON
         * @memberof pb.PlatformLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlatformLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlatformLog;
    })();

    pb.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof pb
         * @interface IPlayer
         * @property {string|null} [id] Player id
         * @property {number|Long|null} [sn] Player sn
         * @property {string|null} [name] Player name
         * @property {string|null} [displayName] Player displayName
         * @property {string|null} [platform] Player platform
         * @property {number|Long|null} [credit] Player credit
         * @property {number|null} [balance] Player balance
         * @property {string|null} [currency] Player currency
         */

        /**
         * Constructs a new Player.
         * @memberof pb
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {pb.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player id.
         * @member {string} id
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.id = "";

        /**
         * Player sn.
         * @member {number|Long} sn
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.sn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player name.
         * @member {string} name
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.name = "";

        /**
         * Player displayName.
         * @member {string} displayName
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.displayName = "";

        /**
         * Player platform.
         * @member {string} platform
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.platform = "";

        /**
         * Player credit.
         * @member {number|Long} credit
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.credit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player balance.
         * @member {number} balance
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.balance = 0;

        /**
         * Player currency.
         * @member {string} currency
         * @memberof pb.Player
         * @instance
         */
        Player.prototype.currency = "";

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof pb.Player
         * @static
         * @param {pb.IPlayer=} [properties] Properties to set
         * @returns {pb.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link pb.Player.verify|verify} messages.
         * @function encode
         * @memberof pb.Player
         * @static
         * @param {pb.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.sn != null && Object.hasOwnProperty.call(message, "sn"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sn);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.displayName);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.platform);
            if (message.credit != null && Object.hasOwnProperty.call(message, "credit"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.credit);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.balance);
            if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.currency);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link pb.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Player
         * @static
         * @param {pb.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sn = reader.int64();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.displayName = reader.string();
                    break;
                case 5:
                    message.platform = reader.string();
                    break;
                case 6:
                    message.credit = reader.int64();
                    break;
                case 7:
                    message.balance = reader.double();
                    break;
                case 8:
                    message.currency = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof pb.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.sn != null && message.hasOwnProperty("sn"))
                if (!$util.isInteger(message.sn) && !(message.sn && $util.isInteger(message.sn.low) && $util.isInteger(message.sn.high)))
                    return "sn: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            if (message.credit != null && message.hasOwnProperty("credit"))
                if (!$util.isInteger(message.credit) && !(message.credit && $util.isInteger(message.credit.low) && $util.isInteger(message.credit.high)))
                    return "credit: integer|Long expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            if (message.currency != null && message.hasOwnProperty("currency"))
                if (!$util.isString(message.currency))
                    return "currency: string expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Player)
                return object;
            var message = new $root.pb.Player();
            if (object.id != null)
                message.id = String(object.id);
            if (object.sn != null)
                if ($util.Long)
                    (message.sn = $util.Long.fromValue(object.sn)).unsigned = false;
                else if (typeof object.sn === "string")
                    message.sn = parseInt(object.sn, 10);
                else if (typeof object.sn === "number")
                    message.sn = object.sn;
                else if (typeof object.sn === "object")
                    message.sn = new $util.LongBits(object.sn.low >>> 0, object.sn.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.credit != null)
                if ($util.Long)
                    (message.credit = $util.Long.fromValue(object.credit)).unsigned = false;
                else if (typeof object.credit === "string")
                    message.credit = parseInt(object.credit, 10);
                else if (typeof object.credit === "number")
                    message.credit = object.credit;
                else if (typeof object.credit === "object")
                    message.credit = new $util.LongBits(object.credit.low >>> 0, object.credit.high >>> 0).toNumber();
            if (object.balance != null)
                message.balance = Number(object.balance);
            if (object.currency != null)
                message.currency = String(object.currency);
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Player
         * @static
         * @param {pb.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sn = options.longs === String ? "0" : 0;
                object.name = "";
                object.displayName = "";
                object.platform = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.credit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.credit = options.longs === String ? "0" : 0;
                object.balance = 0;
                object.currency = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.sn != null && message.hasOwnProperty("sn"))
                if (typeof message.sn === "number")
                    object.sn = options.longs === String ? String(message.sn) : message.sn;
                else
                    object.sn = options.longs === String ? $util.Long.prototype.toString.call(message.sn) : options.longs === Number ? new $util.LongBits(message.sn.low >>> 0, message.sn.high >>> 0).toNumber() : message.sn;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.credit != null && message.hasOwnProperty("credit"))
                if (typeof message.credit === "number")
                    object.credit = options.longs === String ? String(message.credit) : message.credit;
                else
                    object.credit = options.longs === String ? $util.Long.prototype.toString.call(message.credit) : options.longs === Number ? new $util.LongBits(message.credit.low >>> 0, message.credit.high >>> 0).toNumber() : message.credit;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof pb.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    /**
     * RequestCommand enum.
     * @name pb.RequestCommand
     * @enum {number}
     * @property {number} RC_NONE=0 RC_NONE value
     * @property {number} RC_ERROR=1001 RC_ERROR value
     * @property {number} RC_SERVER_INFO=10001 RC_SERVER_INFO value
     * @property {number} RC_SERVER_INFO_MAP_BY_NAME=10002 RC_SERVER_INFO_MAP_BY_NAME value
     * @property {number} RC_PLAYER_INFO=20001 RC_PLAYER_INFO value
     * @property {number} RC_PLAYER_DECK_INFO=20002 RC_PLAYER_DECK_INFO value
     * @property {number} RC_ROOM_INFO=30001 RC_ROOM_INFO value
     * @property {number} RC_ROOM_INFO_MAP_BY_ID=30002 RC_ROOM_INFO_MAP_BY_ID value
     * @property {number} RC_ROOM_JOIN=30003 RC_ROOM_JOIN value
     * @property {number} RC_ROOM_EXTEND_TIMEOUT_WAIT_FOR_PLAYER_DECK=30004 RC_ROOM_EXTEND_TIMEOUT_WAIT_FOR_PLAYER_DECK value
     */
    pb.RequestCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RC_NONE"] = 0;
        values[valuesById[1001] = "RC_ERROR"] = 1001;
        values[valuesById[10001] = "RC_SERVER_INFO"] = 10001;
        values[valuesById[10002] = "RC_SERVER_INFO_MAP_BY_NAME"] = 10002;
        values[valuesById[20001] = "RC_PLAYER_INFO"] = 20001;
        values[valuesById[20002] = "RC_PLAYER_DECK_INFO"] = 20002;
        values[valuesById[30001] = "RC_ROOM_INFO"] = 30001;
        values[valuesById[30002] = "RC_ROOM_INFO_MAP_BY_ID"] = 30002;
        values[valuesById[30003] = "RC_ROOM_JOIN"] = 30003;
        values[valuesById[30004] = "RC_ROOM_EXTEND_TIMEOUT_WAIT_FOR_PLAYER_DECK"] = 30004;
        return values;
    })();

    pb.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof pb
         * @interface IRequest
         * @property {pb.RequestCommand|null} [command] Request command
         * @property {Uint8Array|null} [data] Request data
         * @property {number|Long|null} [timestamp] Request timestamp
         * @property {pb.IError|null} [error] Request error
         */

        /**
         * Constructs a new Request.
         * @memberof pb
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {pb.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request command.
         * @member {pb.RequestCommand} command
         * @memberof pb.Request
         * @instance
         */
        Request.prototype.command = 0;

        /**
         * Request data.
         * @member {Uint8Array} data
         * @memberof pb.Request
         * @instance
         */
        Request.prototype.data = $util.newBuffer([]);

        /**
         * Request timestamp.
         * @member {number|Long} timestamp
         * @memberof pb.Request
         * @instance
         */
        Request.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Request error.
         * @member {pb.IError|null|undefined} error
         * @memberof pb.Request
         * @instance
         */
        Request.prototype.error = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof pb.Request
         * @static
         * @param {pb.IRequest=} [properties] Properties to set
         * @returns {pb.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link pb.Request.verify|verify} messages.
         * @function encode
         * @memberof pb.Request
         * @static
         * @param {pb.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.command);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.pb.Error.encode(message.error, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link pb.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Request
         * @static
         * @param {pb.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = reader.int32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                case 4:
                    message.error = $root.pb.Error.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof pb.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                switch (message.command) {
                default:
                    return "command: enum value expected";
                case 0:
                case 1001:
                case 10001:
                case 10002:
                case 20001:
                case 20002:
                case 30001:
                case 30002:
                case 30003:
                case 30004:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.pb.Error.verify(message.error);
                if (error)
                    return "error." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Request)
                return object;
            var message = new $root.pb.Request();
            switch (object.command) {
            case "RC_NONE":
            case 0:
                message.command = 0;
                break;
            case "RC_ERROR":
            case 1001:
                message.command = 1001;
                break;
            case "RC_SERVER_INFO":
            case 10001:
                message.command = 10001;
                break;
            case "RC_SERVER_INFO_MAP_BY_NAME":
            case 10002:
                message.command = 10002;
                break;
            case "RC_PLAYER_INFO":
            case 20001:
                message.command = 20001;
                break;
            case "RC_PLAYER_DECK_INFO":
            case 20002:
                message.command = 20002;
                break;
            case "RC_ROOM_INFO":
            case 30001:
                message.command = 30001;
                break;
            case "RC_ROOM_INFO_MAP_BY_ID":
            case 30002:
                message.command = 30002;
                break;
            case "RC_ROOM_JOIN":
            case 30003:
                message.command = 30003;
                break;
            case "RC_ROOM_EXTEND_TIMEOUT_WAIT_FOR_PLAYER_DECK":
            case 30004:
                message.command = 30004;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".pb.Request.error: object expected");
                message.error = $root.pb.Error.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Request
         * @static
         * @param {pb.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = options.enums === String ? "RC_NONE" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.error = null;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = options.enums === String ? $root.pb.RequestCommand[message.command] : message.command;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.pb.Error.toObject(message.error, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof pb.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    /**
     * RuntimeLogType enum.
     * @name pb.RuntimeLogType
     * @enum {number}
     * @property {number} RLT_NONE=0 RLT_NONE value
     * @property {number} RLT_INFO=1 RLT_INFO value
     * @property {number} RLT_WARNING=2 RLT_WARNING value
     * @property {number} RLT_ERROR=3 RLT_ERROR value
     */
    pb.RuntimeLogType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RLT_NONE"] = 0;
        values[valuesById[1] = "RLT_INFO"] = 1;
        values[valuesById[2] = "RLT_WARNING"] = 2;
        values[valuesById[3] = "RLT_ERROR"] = 3;
        return values;
    })();

    pb.RuntimeLog = (function() {

        /**
         * Properties of a RuntimeLog.
         * @memberof pb
         * @interface IRuntimeLog
         * @property {number|Long|null} [type] RuntimeLog type
         * @property {string|null} [file] RuntimeLog file
         * @property {number|Long|null} [line] RuntimeLog line
         * @property {string|null} [message] RuntimeLog message
         * @property {number|Long|null} [time] RuntimeLog time
         * @property {pb.IServerInfo|null} [serverInfo] RuntimeLog serverInfo
         */

        /**
         * Constructs a new RuntimeLog.
         * @memberof pb
         * @classdesc Represents a RuntimeLog.
         * @implements IRuntimeLog
         * @constructor
         * @param {pb.IRuntimeLog=} [properties] Properties to set
         */
        function RuntimeLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RuntimeLog type.
         * @member {number|Long} type
         * @memberof pb.RuntimeLog
         * @instance
         */
        RuntimeLog.prototype.type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RuntimeLog file.
         * @member {string} file
         * @memberof pb.RuntimeLog
         * @instance
         */
        RuntimeLog.prototype.file = "";

        /**
         * RuntimeLog line.
         * @member {number|Long} line
         * @memberof pb.RuntimeLog
         * @instance
         */
        RuntimeLog.prototype.line = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RuntimeLog message.
         * @member {string} message
         * @memberof pb.RuntimeLog
         * @instance
         */
        RuntimeLog.prototype.message = "";

        /**
         * RuntimeLog time.
         * @member {number|Long} time
         * @memberof pb.RuntimeLog
         * @instance
         */
        RuntimeLog.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RuntimeLog serverInfo.
         * @member {pb.IServerInfo|null|undefined} serverInfo
         * @memberof pb.RuntimeLog
         * @instance
         */
        RuntimeLog.prototype.serverInfo = null;

        /**
         * Creates a new RuntimeLog instance using the specified properties.
         * @function create
         * @memberof pb.RuntimeLog
         * @static
         * @param {pb.IRuntimeLog=} [properties] Properties to set
         * @returns {pb.RuntimeLog} RuntimeLog instance
         */
        RuntimeLog.create = function create(properties) {
            return new RuntimeLog(properties);
        };

        /**
         * Encodes the specified RuntimeLog message. Does not implicitly {@link pb.RuntimeLog.verify|verify} messages.
         * @function encode
         * @memberof pb.RuntimeLog
         * @static
         * @param {pb.IRuntimeLog} message RuntimeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RuntimeLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.type);
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.file);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.line);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.message);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.time);
            if (message.serverInfo != null && Object.hasOwnProperty.call(message, "serverInfo"))
                $root.pb.ServerInfo.encode(message.serverInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RuntimeLog message, length delimited. Does not implicitly {@link pb.RuntimeLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.RuntimeLog
         * @static
         * @param {pb.IRuntimeLog} message RuntimeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RuntimeLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RuntimeLog message from the specified reader or buffer.
         * @function decode
         * @memberof pb.RuntimeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.RuntimeLog} RuntimeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RuntimeLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.RuntimeLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int64();
                    break;
                case 2:
                    message.file = reader.string();
                    break;
                case 3:
                    message.line = reader.int64();
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                case 5:
                    message.time = reader.int64();
                    break;
                case 6:
                    message.serverInfo = $root.pb.ServerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RuntimeLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.RuntimeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.RuntimeLog} RuntimeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RuntimeLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RuntimeLog message.
         * @function verify
         * @memberof pb.RuntimeLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RuntimeLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type) && !(message.type && $util.isInteger(message.type.low) && $util.isInteger(message.type.high)))
                    return "type: integer|Long expected";
            if (message.file != null && message.hasOwnProperty("file"))
                if (!$util.isString(message.file))
                    return "file: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line) && !(message.line && $util.isInteger(message.line.low) && $util.isInteger(message.line.high)))
                    return "line: integer|Long expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.serverInfo != null && message.hasOwnProperty("serverInfo")) {
                var error = $root.pb.ServerInfo.verify(message.serverInfo);
                if (error)
                    return "serverInfo." + error;
            }
            return null;
        };

        /**
         * Creates a RuntimeLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.RuntimeLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.RuntimeLog} RuntimeLog
         */
        RuntimeLog.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.RuntimeLog)
                return object;
            var message = new $root.pb.RuntimeLog();
            if (object.type != null)
                if ($util.Long)
                    (message.type = $util.Long.fromValue(object.type)).unsigned = false;
                else if (typeof object.type === "string")
                    message.type = parseInt(object.type, 10);
                else if (typeof object.type === "number")
                    message.type = object.type;
                else if (typeof object.type === "object")
                    message.type = new $util.LongBits(object.type.low >>> 0, object.type.high >>> 0).toNumber();
            if (object.file != null)
                message.file = String(object.file);
            if (object.line != null)
                if ($util.Long)
                    (message.line = $util.Long.fromValue(object.line)).unsigned = false;
                else if (typeof object.line === "string")
                    message.line = parseInt(object.line, 10);
                else if (typeof object.line === "number")
                    message.line = object.line;
                else if (typeof object.line === "object")
                    message.line = new $util.LongBits(object.line.low >>> 0, object.line.high >>> 0).toNumber();
            if (object.message != null)
                message.message = String(object.message);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.serverInfo != null) {
                if (typeof object.serverInfo !== "object")
                    throw TypeError(".pb.RuntimeLog.serverInfo: object expected");
                message.serverInfo = $root.pb.ServerInfo.fromObject(object.serverInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a RuntimeLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.RuntimeLog
         * @static
         * @param {pb.RuntimeLog} message RuntimeLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RuntimeLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.type = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.type = options.longs === String ? "0" : 0;
                object.file = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.line = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.line = options.longs === String ? "0" : 0;
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.serverInfo = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                if (typeof message.type === "number")
                    object.type = options.longs === String ? String(message.type) : message.type;
                else
                    object.type = options.longs === String ? $util.Long.prototype.toString.call(message.type) : options.longs === Number ? new $util.LongBits(message.type.low >>> 0, message.type.high >>> 0).toNumber() : message.type;
            if (message.file != null && message.hasOwnProperty("file"))
                object.file = message.file;
            if (message.line != null && message.hasOwnProperty("line"))
                if (typeof message.line === "number")
                    object.line = options.longs === String ? String(message.line) : message.line;
                else
                    object.line = options.longs === String ? $util.Long.prototype.toString.call(message.line) : options.longs === Number ? new $util.LongBits(message.line.low >>> 0, message.line.high >>> 0).toNumber() : message.line;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.serverInfo != null && message.hasOwnProperty("serverInfo"))
                object.serverInfo = $root.pb.ServerInfo.toObject(message.serverInfo, options);
            return object;
        };

        /**
         * Converts this RuntimeLog to JSON.
         * @function toJSON
         * @memberof pb.RuntimeLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RuntimeLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RuntimeLog;
    })();

    /**
     * ServerType enum.
     * @name pb.ServerType
     * @enum {number}
     * @property {number} ST_NONE=0 ST_NONE value
     * @property {number} ST_GATEWAY=1 ST_GATEWAY value
     * @property {number} ST_GAME=2 ST_GAME value
     * @property {number} ST_FLUENTD=3 ST_FLUENTD value
     */
    pb.ServerType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ST_NONE"] = 0;
        values[valuesById[1] = "ST_GATEWAY"] = 1;
        values[valuesById[2] = "ST_GAME"] = 2;
        values[valuesById[3] = "ST_FLUENTD"] = 3;
        return values;
    })();

    pb.ServerInfo = (function() {

        /**
         * Properties of a ServerInfo.
         * @memberof pb
         * @interface IServerInfo
         * @property {string|null} [name] ServerInfo name
         * @property {string|null} [host] ServerInfo host
         * @property {number|Long|null} [port] ServerInfo port
         * @property {string|null} [serverInfoRoutePath] ServerInfo serverInfoRoutePath
         * @property {string|null} [websocketProtocol] ServerInfo websocketProtocol
         * @property {string|null} [websocketRoutePath] ServerInfo websocketRoutePath
         * @property {string|null} [group] ServerInfo group
         * @property {number|Long|null} [concurrentPlayer] ServerInfo concurrentPlayer
         * @property {number|null} [jackpot] ServerInfo jackpot
         * @property {boolean|null} [isOffline] ServerInfo isOffline
         * @property {pb.ServerType|null} [type] ServerInfo type
         * @property {string|null} [protocol] ServerInfo protocol
         * @property {string|null} [hostForClient] ServerInfo hostForClient
         * @property {number|Long|null} [portForClient] ServerInfo portForClient
         * @property {string|null} [websocketProtocolForClient] ServerInfo websocketProtocolForClient
         * @property {string|null} [WebsocketRoutePathForClient] ServerInfo WebsocketRoutePathForClient
         * @property {string|null} [PublicIPAddress] ServerInfo PublicIPAddress
         * @property {pb.game.GameType|null} [GameType] ServerInfo GameType
         * @property {number|Long|null} [LastRequestTime] ServerInfo LastRequestTime
         */

        /**
         * Constructs a new ServerInfo.
         * @memberof pb
         * @classdesc Represents a ServerInfo.
         * @implements IServerInfo
         * @constructor
         * @param {pb.IServerInfo=} [properties] Properties to set
         */
        function ServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfo name.
         * @member {string} name
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.name = "";

        /**
         * ServerInfo host.
         * @member {string} host
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.host = "";

        /**
         * ServerInfo port.
         * @member {number|Long} port
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.port = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ServerInfo serverInfoRoutePath.
         * @member {string} serverInfoRoutePath
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.serverInfoRoutePath = "";

        /**
         * ServerInfo websocketProtocol.
         * @member {string} websocketProtocol
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.websocketProtocol = "";

        /**
         * ServerInfo websocketRoutePath.
         * @member {string} websocketRoutePath
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.websocketRoutePath = "";

        /**
         * ServerInfo group.
         * @member {string} group
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.group = "";

        /**
         * ServerInfo concurrentPlayer.
         * @member {number|Long} concurrentPlayer
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.concurrentPlayer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ServerInfo jackpot.
         * @member {number} jackpot
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.jackpot = 0;

        /**
         * ServerInfo isOffline.
         * @member {boolean} isOffline
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.isOffline = false;

        /**
         * ServerInfo type.
         * @member {pb.ServerType} type
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.type = 0;

        /**
         * ServerInfo protocol.
         * @member {string} protocol
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.protocol = "";

        /**
         * ServerInfo hostForClient.
         * @member {string} hostForClient
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.hostForClient = "";

        /**
         * ServerInfo portForClient.
         * @member {number|Long} portForClient
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.portForClient = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ServerInfo websocketProtocolForClient.
         * @member {string} websocketProtocolForClient
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.websocketProtocolForClient = "";

        /**
         * ServerInfo WebsocketRoutePathForClient.
         * @member {string} WebsocketRoutePathForClient
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.WebsocketRoutePathForClient = "";

        /**
         * ServerInfo PublicIPAddress.
         * @member {string} PublicIPAddress
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.PublicIPAddress = "";

        /**
         * ServerInfo GameType.
         * @member {pb.game.GameType} GameType
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.GameType = 0;

        /**
         * ServerInfo LastRequestTime.
         * @member {number|Long} LastRequestTime
         * @memberof pb.ServerInfo
         * @instance
         */
        ServerInfo.prototype.LastRequestTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @function create
         * @memberof pb.ServerInfo
         * @static
         * @param {pb.IServerInfo=} [properties] Properties to set
         * @returns {pb.ServerInfo} ServerInfo instance
         */
        ServerInfo.create = function create(properties) {
            return new ServerInfo(properties);
        };

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link pb.ServerInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerInfo
         * @static
         * @param {pb.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.port);
            if (message.serverInfoRoutePath != null && Object.hasOwnProperty.call(message, "serverInfoRoutePath"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.serverInfoRoutePath);
            if (message.websocketProtocol != null && Object.hasOwnProperty.call(message, "websocketProtocol"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.websocketProtocol);
            if (message.websocketRoutePath != null && Object.hasOwnProperty.call(message, "websocketRoutePath"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.websocketRoutePath);
            if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.group);
            if (message.concurrentPlayer != null && Object.hasOwnProperty.call(message, "concurrentPlayer"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.concurrentPlayer);
            if (message.jackpot != null && Object.hasOwnProperty.call(message, "jackpot"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.jackpot);
            if (message.isOffline != null && Object.hasOwnProperty.call(message, "isOffline"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isOffline);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.type);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.protocol);
            if (message.hostForClient != null && Object.hasOwnProperty.call(message, "hostForClient"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.hostForClient);
            if (message.portForClient != null && Object.hasOwnProperty.call(message, "portForClient"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.portForClient);
            if (message.websocketProtocolForClient != null && Object.hasOwnProperty.call(message, "websocketProtocolForClient"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.websocketProtocolForClient);
            if (message.WebsocketRoutePathForClient != null && Object.hasOwnProperty.call(message, "WebsocketRoutePathForClient"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.WebsocketRoutePathForClient);
            if (message.PublicIPAddress != null && Object.hasOwnProperty.call(message, "PublicIPAddress"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.PublicIPAddress);
            if (message.GameType != null && Object.hasOwnProperty.call(message, "GameType"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.GameType);
            if (message.LastRequestTime != null && Object.hasOwnProperty.call(message, "LastRequestTime"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.LastRequestTime);
            return writer;
        };

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link pb.ServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ServerInfo
         * @static
         * @param {pb.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.host = reader.string();
                    break;
                case 3:
                    message.port = reader.int64();
                    break;
                case 4:
                    message.serverInfoRoutePath = reader.string();
                    break;
                case 5:
                    message.websocketProtocol = reader.string();
                    break;
                case 6:
                    message.websocketRoutePath = reader.string();
                    break;
                case 7:
                    message.group = reader.string();
                    break;
                case 8:
                    message.concurrentPlayer = reader.int64();
                    break;
                case 9:
                    message.jackpot = reader.double();
                    break;
                case 10:
                    message.isOffline = reader.bool();
                    break;
                case 11:
                    message.type = reader.int32();
                    break;
                case 12:
                    message.protocol = reader.string();
                    break;
                case 13:
                    message.hostForClient = reader.string();
                    break;
                case 14:
                    message.portForClient = reader.int64();
                    break;
                case 15:
                    message.websocketProtocolForClient = reader.string();
                    break;
                case 16:
                    message.WebsocketRoutePathForClient = reader.string();
                    break;
                case 17:
                    message.PublicIPAddress = reader.string();
                    break;
                case 18:
                    message.GameType = reader.int32();
                    break;
                case 19:
                    message.LastRequestTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerInfo message.
         * @function verify
         * @memberof pb.ServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port) && !(message.port && $util.isInteger(message.port.low) && $util.isInteger(message.port.high)))
                    return "port: integer|Long expected";
            if (message.serverInfoRoutePath != null && message.hasOwnProperty("serverInfoRoutePath"))
                if (!$util.isString(message.serverInfoRoutePath))
                    return "serverInfoRoutePath: string expected";
            if (message.websocketProtocol != null && message.hasOwnProperty("websocketProtocol"))
                if (!$util.isString(message.websocketProtocol))
                    return "websocketProtocol: string expected";
            if (message.websocketRoutePath != null && message.hasOwnProperty("websocketRoutePath"))
                if (!$util.isString(message.websocketRoutePath))
                    return "websocketRoutePath: string expected";
            if (message.group != null && message.hasOwnProperty("group"))
                if (!$util.isString(message.group))
                    return "group: string expected";
            if (message.concurrentPlayer != null && message.hasOwnProperty("concurrentPlayer"))
                if (!$util.isInteger(message.concurrentPlayer) && !(message.concurrentPlayer && $util.isInteger(message.concurrentPlayer.low) && $util.isInteger(message.concurrentPlayer.high)))
                    return "concurrentPlayer: integer|Long expected";
            if (message.jackpot != null && message.hasOwnProperty("jackpot"))
                if (typeof message.jackpot !== "number")
                    return "jackpot: number expected";
            if (message.isOffline != null && message.hasOwnProperty("isOffline"))
                if (typeof message.isOffline !== "boolean")
                    return "isOffline: boolean expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isString(message.protocol))
                    return "protocol: string expected";
            if (message.hostForClient != null && message.hasOwnProperty("hostForClient"))
                if (!$util.isString(message.hostForClient))
                    return "hostForClient: string expected";
            if (message.portForClient != null && message.hasOwnProperty("portForClient"))
                if (!$util.isInteger(message.portForClient) && !(message.portForClient && $util.isInteger(message.portForClient.low) && $util.isInteger(message.portForClient.high)))
                    return "portForClient: integer|Long expected";
            if (message.websocketProtocolForClient != null && message.hasOwnProperty("websocketProtocolForClient"))
                if (!$util.isString(message.websocketProtocolForClient))
                    return "websocketProtocolForClient: string expected";
            if (message.WebsocketRoutePathForClient != null && message.hasOwnProperty("WebsocketRoutePathForClient"))
                if (!$util.isString(message.WebsocketRoutePathForClient))
                    return "WebsocketRoutePathForClient: string expected";
            if (message.PublicIPAddress != null && message.hasOwnProperty("PublicIPAddress"))
                if (!$util.isString(message.PublicIPAddress))
                    return "PublicIPAddress: string expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                switch (message.GameType) {
                default:
                    return "GameType: enum value expected";
                case 0:
                case 1:
                case 1001:
                    break;
                }
            if (message.LastRequestTime != null && message.hasOwnProperty("LastRequestTime"))
                if (!$util.isInteger(message.LastRequestTime) && !(message.LastRequestTime && $util.isInteger(message.LastRequestTime.low) && $util.isInteger(message.LastRequestTime.high)))
                    return "LastRequestTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ServerInfo} ServerInfo
         */
        ServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ServerInfo)
                return object;
            var message = new $root.pb.ServerInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.host != null)
                message.host = String(object.host);
            if (object.port != null)
                if ($util.Long)
                    (message.port = $util.Long.fromValue(object.port)).unsigned = false;
                else if (typeof object.port === "string")
                    message.port = parseInt(object.port, 10);
                else if (typeof object.port === "number")
                    message.port = object.port;
                else if (typeof object.port === "object")
                    message.port = new $util.LongBits(object.port.low >>> 0, object.port.high >>> 0).toNumber();
            if (object.serverInfoRoutePath != null)
                message.serverInfoRoutePath = String(object.serverInfoRoutePath);
            if (object.websocketProtocol != null)
                message.websocketProtocol = String(object.websocketProtocol);
            if (object.websocketRoutePath != null)
                message.websocketRoutePath = String(object.websocketRoutePath);
            if (object.group != null)
                message.group = String(object.group);
            if (object.concurrentPlayer != null)
                if ($util.Long)
                    (message.concurrentPlayer = $util.Long.fromValue(object.concurrentPlayer)).unsigned = false;
                else if (typeof object.concurrentPlayer === "string")
                    message.concurrentPlayer = parseInt(object.concurrentPlayer, 10);
                else if (typeof object.concurrentPlayer === "number")
                    message.concurrentPlayer = object.concurrentPlayer;
                else if (typeof object.concurrentPlayer === "object")
                    message.concurrentPlayer = new $util.LongBits(object.concurrentPlayer.low >>> 0, object.concurrentPlayer.high >>> 0).toNumber();
            if (object.jackpot != null)
                message.jackpot = Number(object.jackpot);
            if (object.isOffline != null)
                message.isOffline = Boolean(object.isOffline);
            switch (object.type) {
            case "ST_NONE":
            case 0:
                message.type = 0;
                break;
            case "ST_GATEWAY":
            case 1:
                message.type = 1;
                break;
            case "ST_GAME":
            case 2:
                message.type = 2;
                break;
            case "ST_FLUENTD":
            case 3:
                message.type = 3;
                break;
            }
            if (object.protocol != null)
                message.protocol = String(object.protocol);
            if (object.hostForClient != null)
                message.hostForClient = String(object.hostForClient);
            if (object.portForClient != null)
                if ($util.Long)
                    (message.portForClient = $util.Long.fromValue(object.portForClient)).unsigned = false;
                else if (typeof object.portForClient === "string")
                    message.portForClient = parseInt(object.portForClient, 10);
                else if (typeof object.portForClient === "number")
                    message.portForClient = object.portForClient;
                else if (typeof object.portForClient === "object")
                    message.portForClient = new $util.LongBits(object.portForClient.low >>> 0, object.portForClient.high >>> 0).toNumber();
            if (object.websocketProtocolForClient != null)
                message.websocketProtocolForClient = String(object.websocketProtocolForClient);
            if (object.WebsocketRoutePathForClient != null)
                message.WebsocketRoutePathForClient = String(object.WebsocketRoutePathForClient);
            if (object.PublicIPAddress != null)
                message.PublicIPAddress = String(object.PublicIPAddress);
            switch (object.GameType) {
            case "GT_NONE":
            case 0:
                message.GameType = 0;
                break;
            case "GT_EXAMPLE":
            case 1:
                message.GameType = 1;
                break;
            case "GT_CHINESE_POKER_13":
            case 1001:
                message.GameType = 1001;
                break;
            }
            if (object.LastRequestTime != null)
                if ($util.Long)
                    (message.LastRequestTime = $util.Long.fromValue(object.LastRequestTime)).unsigned = false;
                else if (typeof object.LastRequestTime === "string")
                    message.LastRequestTime = parseInt(object.LastRequestTime, 10);
                else if (typeof object.LastRequestTime === "number")
                    message.LastRequestTime = object.LastRequestTime;
                else if (typeof object.LastRequestTime === "object")
                    message.LastRequestTime = new $util.LongBits(object.LastRequestTime.low >>> 0, object.LastRequestTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ServerInfo
         * @static
         * @param {pb.ServerInfo} message ServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.host = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.port = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.port = options.longs === String ? "0" : 0;
                object.serverInfoRoutePath = "";
                object.websocketProtocol = "";
                object.websocketRoutePath = "";
                object.group = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.concurrentPlayer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.concurrentPlayer = options.longs === String ? "0" : 0;
                object.jackpot = 0;
                object.isOffline = false;
                object.type = options.enums === String ? "ST_NONE" : 0;
                object.protocol = "";
                object.hostForClient = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.portForClient = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.portForClient = options.longs === String ? "0" : 0;
                object.websocketProtocolForClient = "";
                object.WebsocketRoutePathForClient = "";
                object.PublicIPAddress = "";
                object.GameType = options.enums === String ? "GT_NONE" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.LastRequestTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.LastRequestTime = options.longs === String ? "0" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.port != null && message.hasOwnProperty("port"))
                if (typeof message.port === "number")
                    object.port = options.longs === String ? String(message.port) : message.port;
                else
                    object.port = options.longs === String ? $util.Long.prototype.toString.call(message.port) : options.longs === Number ? new $util.LongBits(message.port.low >>> 0, message.port.high >>> 0).toNumber() : message.port;
            if (message.serverInfoRoutePath != null && message.hasOwnProperty("serverInfoRoutePath"))
                object.serverInfoRoutePath = message.serverInfoRoutePath;
            if (message.websocketProtocol != null && message.hasOwnProperty("websocketProtocol"))
                object.websocketProtocol = message.websocketProtocol;
            if (message.websocketRoutePath != null && message.hasOwnProperty("websocketRoutePath"))
                object.websocketRoutePath = message.websocketRoutePath;
            if (message.group != null && message.hasOwnProperty("group"))
                object.group = message.group;
            if (message.concurrentPlayer != null && message.hasOwnProperty("concurrentPlayer"))
                if (typeof message.concurrentPlayer === "number")
                    object.concurrentPlayer = options.longs === String ? String(message.concurrentPlayer) : message.concurrentPlayer;
                else
                    object.concurrentPlayer = options.longs === String ? $util.Long.prototype.toString.call(message.concurrentPlayer) : options.longs === Number ? new $util.LongBits(message.concurrentPlayer.low >>> 0, message.concurrentPlayer.high >>> 0).toNumber() : message.concurrentPlayer;
            if (message.jackpot != null && message.hasOwnProperty("jackpot"))
                object.jackpot = options.json && !isFinite(message.jackpot) ? String(message.jackpot) : message.jackpot;
            if (message.isOffline != null && message.hasOwnProperty("isOffline"))
                object.isOffline = message.isOffline;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pb.ServerType[message.type] : message.type;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.hostForClient != null && message.hasOwnProperty("hostForClient"))
                object.hostForClient = message.hostForClient;
            if (message.portForClient != null && message.hasOwnProperty("portForClient"))
                if (typeof message.portForClient === "number")
                    object.portForClient = options.longs === String ? String(message.portForClient) : message.portForClient;
                else
                    object.portForClient = options.longs === String ? $util.Long.prototype.toString.call(message.portForClient) : options.longs === Number ? new $util.LongBits(message.portForClient.low >>> 0, message.portForClient.high >>> 0).toNumber() : message.portForClient;
            if (message.websocketProtocolForClient != null && message.hasOwnProperty("websocketProtocolForClient"))
                object.websocketProtocolForClient = message.websocketProtocolForClient;
            if (message.WebsocketRoutePathForClient != null && message.hasOwnProperty("WebsocketRoutePathForClient"))
                object.WebsocketRoutePathForClient = message.WebsocketRoutePathForClient;
            if (message.PublicIPAddress != null && message.hasOwnProperty("PublicIPAddress"))
                object.PublicIPAddress = message.PublicIPAddress;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = options.enums === String ? $root.pb.game.GameType[message.GameType] : message.GameType;
            if (message.LastRequestTime != null && message.hasOwnProperty("LastRequestTime"))
                if (typeof message.LastRequestTime === "number")
                    object.LastRequestTime = options.longs === String ? String(message.LastRequestTime) : message.LastRequestTime;
                else
                    object.LastRequestTime = options.longs === String ? $util.Long.prototype.toString.call(message.LastRequestTime) : options.longs === Number ? new $util.LongBits(message.LastRequestTime.low >>> 0, message.LastRequestTime.high >>> 0).toNumber() : message.LastRequestTime;
            return object;
        };

        /**
         * Converts this ServerInfo to JSON.
         * @function toJSON
         * @memberof pb.ServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfo;
    })();

    pb.ServerInfoList = (function() {

        /**
         * Properties of a ServerInfoList.
         * @memberof pb
         * @interface IServerInfoList
         * @property {Array.<pb.IServerInfo>|null} [Data] ServerInfoList Data
         */

        /**
         * Constructs a new ServerInfoList.
         * @memberof pb
         * @classdesc Represents a ServerInfoList.
         * @implements IServerInfoList
         * @constructor
         * @param {pb.IServerInfoList=} [properties] Properties to set
         */
        function ServerInfoList(properties) {
            this.Data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfoList Data.
         * @member {Array.<pb.IServerInfo>} Data
         * @memberof pb.ServerInfoList
         * @instance
         */
        ServerInfoList.prototype.Data = $util.emptyArray;

        /**
         * Creates a new ServerInfoList instance using the specified properties.
         * @function create
         * @memberof pb.ServerInfoList
         * @static
         * @param {pb.IServerInfoList=} [properties] Properties to set
         * @returns {pb.ServerInfoList} ServerInfoList instance
         */
        ServerInfoList.create = function create(properties) {
            return new ServerInfoList(properties);
        };

        /**
         * Encodes the specified ServerInfoList message. Does not implicitly {@link pb.ServerInfoList.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerInfoList
         * @static
         * @param {pb.IServerInfoList} message ServerInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && message.Data.length)
                for (var i = 0; i < message.Data.length; ++i)
                    $root.pb.ServerInfo.encode(message.Data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerInfoList message, length delimited. Does not implicitly {@link pb.ServerInfoList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ServerInfoList
         * @static
         * @param {pb.IServerInfoList} message ServerInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerInfoList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ServerInfoList} ServerInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ServerInfoList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Data && message.Data.length))
                        message.Data = [];
                    message.Data.push($root.pb.ServerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerInfoList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ServerInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ServerInfoList} ServerInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerInfoList message.
         * @function verify
         * @memberof pb.ServerInfoList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerInfoList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data")) {
                if (!Array.isArray(message.Data))
                    return "Data: array expected";
                for (var i = 0; i < message.Data.length; ++i) {
                    var error = $root.pb.ServerInfo.verify(message.Data[i]);
                    if (error)
                        return "Data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerInfoList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ServerInfoList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ServerInfoList} ServerInfoList
         */
        ServerInfoList.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ServerInfoList)
                return object;
            var message = new $root.pb.ServerInfoList();
            if (object.Data) {
                if (!Array.isArray(object.Data))
                    throw TypeError(".pb.ServerInfoList.Data: array expected");
                message.Data = [];
                for (var i = 0; i < object.Data.length; ++i) {
                    if (typeof object.Data[i] !== "object")
                        throw TypeError(".pb.ServerInfoList.Data: object expected");
                    message.Data[i] = $root.pb.ServerInfo.fromObject(object.Data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerInfoList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ServerInfoList
         * @static
         * @param {pb.ServerInfoList} message ServerInfoList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfoList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Data = [];
            if (message.Data && message.Data.length) {
                object.Data = [];
                for (var j = 0; j < message.Data.length; ++j)
                    object.Data[j] = $root.pb.ServerInfo.toObject(message.Data[j], options);
            }
            return object;
        };

        /**
         * Converts this ServerInfoList to JSON.
         * @function toJSON
         * @memberof pb.ServerInfoList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfoList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfoList;
    })();

    pb.ServerInfoMapByName = (function() {

        /**
         * Properties of a ServerInfoMapByName.
         * @memberof pb
         * @interface IServerInfoMapByName
         * @property {Object.<string,pb.IServerInfo>|null} [Data] ServerInfoMapByName Data
         */

        /**
         * Constructs a new ServerInfoMapByName.
         * @memberof pb
         * @classdesc Represents a ServerInfoMapByName.
         * @implements IServerInfoMapByName
         * @constructor
         * @param {pb.IServerInfoMapByName=} [properties] Properties to set
         */
        function ServerInfoMapByName(properties) {
            this.Data = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfoMapByName Data.
         * @member {Object.<string,pb.IServerInfo>} Data
         * @memberof pb.ServerInfoMapByName
         * @instance
         */
        ServerInfoMapByName.prototype.Data = $util.emptyObject;

        /**
         * Creates a new ServerInfoMapByName instance using the specified properties.
         * @function create
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {pb.IServerInfoMapByName=} [properties] Properties to set
         * @returns {pb.ServerInfoMapByName} ServerInfoMapByName instance
         */
        ServerInfoMapByName.create = function create(properties) {
            return new ServerInfoMapByName(properties);
        };

        /**
         * Encodes the specified ServerInfoMapByName message. Does not implicitly {@link pb.ServerInfoMapByName.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {pb.IServerInfoMapByName} message ServerInfoMapByName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoMapByName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                for (var keys = Object.keys(message.Data), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.pb.ServerInfo.encode(message.Data[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified ServerInfoMapByName message, length delimited. Does not implicitly {@link pb.ServerInfoMapByName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {pb.IServerInfoMapByName} message ServerInfoMapByName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoMapByName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerInfoMapByName message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ServerInfoMapByName} ServerInfoMapByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoMapByName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ServerInfoMapByName(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.Data === $util.emptyObject)
                        message.Data = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = $root.pb.ServerInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.Data[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerInfoMapByName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ServerInfoMapByName} ServerInfoMapByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoMapByName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerInfoMapByName message.
         * @function verify
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerInfoMapByName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data")) {
                if (!$util.isObject(message.Data))
                    return "Data: object expected";
                var key = Object.keys(message.Data);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.pb.ServerInfo.verify(message.Data[key[i]]);
                    if (error)
                        return "Data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerInfoMapByName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ServerInfoMapByName} ServerInfoMapByName
         */
        ServerInfoMapByName.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ServerInfoMapByName)
                return object;
            var message = new $root.pb.ServerInfoMapByName();
            if (object.Data) {
                if (typeof object.Data !== "object")
                    throw TypeError(".pb.ServerInfoMapByName.Data: object expected");
                message.Data = {};
                for (var keys = Object.keys(object.Data), i = 0; i < keys.length; ++i) {
                    if (typeof object.Data[keys[i]] !== "object")
                        throw TypeError(".pb.ServerInfoMapByName.Data: object expected");
                    message.Data[keys[i]] = $root.pb.ServerInfo.fromObject(object.Data[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerInfoMapByName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ServerInfoMapByName
         * @static
         * @param {pb.ServerInfoMapByName} message ServerInfoMapByName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfoMapByName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.Data = {};
            var keys2;
            if (message.Data && (keys2 = Object.keys(message.Data)).length) {
                object.Data = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.Data[keys2[j]] = $root.pb.ServerInfo.toObject(message.Data[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this ServerInfoMapByName to JSON.
         * @function toJSON
         * @memberof pb.ServerInfoMapByName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfoMapByName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfoMapByName;
    })();

    pb.ServerInfoMapByType = (function() {

        /**
         * Properties of a ServerInfoMapByType.
         * @memberof pb
         * @interface IServerInfoMapByType
         * @property {Object.<string,pb.IServerInfoMapByName>|null} [Data] ServerInfoMapByType Data
         */

        /**
         * Constructs a new ServerInfoMapByType.
         * @memberof pb
         * @classdesc Represents a ServerInfoMapByType.
         * @implements IServerInfoMapByType
         * @constructor
         * @param {pb.IServerInfoMapByType=} [properties] Properties to set
         */
        function ServerInfoMapByType(properties) {
            this.Data = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfoMapByType Data.
         * @member {Object.<string,pb.IServerInfoMapByName>} Data
         * @memberof pb.ServerInfoMapByType
         * @instance
         */
        ServerInfoMapByType.prototype.Data = $util.emptyObject;

        /**
         * Creates a new ServerInfoMapByType instance using the specified properties.
         * @function create
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {pb.IServerInfoMapByType=} [properties] Properties to set
         * @returns {pb.ServerInfoMapByType} ServerInfoMapByType instance
         */
        ServerInfoMapByType.create = function create(properties) {
            return new ServerInfoMapByType(properties);
        };

        /**
         * Encodes the specified ServerInfoMapByType message. Does not implicitly {@link pb.ServerInfoMapByType.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {pb.IServerInfoMapByType} message ServerInfoMapByType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoMapByType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                for (var keys = Object.keys(message.Data), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.pb.ServerInfoMapByName.encode(message.Data[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified ServerInfoMapByType message, length delimited. Does not implicitly {@link pb.ServerInfoMapByType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {pb.IServerInfoMapByType} message ServerInfoMapByType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoMapByType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerInfoMapByType message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ServerInfoMapByType} ServerInfoMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoMapByType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ServerInfoMapByType(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.Data === $util.emptyObject)
                        message.Data = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.pb.ServerInfoMapByName.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.Data[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerInfoMapByType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ServerInfoMapByType} ServerInfoMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoMapByType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerInfoMapByType message.
         * @function verify
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerInfoMapByType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data")) {
                if (!$util.isObject(message.Data))
                    return "Data: object expected";
                var key = Object.keys(message.Data);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "Data: integer|Long key{k:int64} expected";
                    {
                        var error = $root.pb.ServerInfoMapByName.verify(message.Data[key[i]]);
                        if (error)
                            return "Data." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a ServerInfoMapByType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ServerInfoMapByType} ServerInfoMapByType
         */
        ServerInfoMapByType.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ServerInfoMapByType)
                return object;
            var message = new $root.pb.ServerInfoMapByType();
            if (object.Data) {
                if (typeof object.Data !== "object")
                    throw TypeError(".pb.ServerInfoMapByType.Data: object expected");
                message.Data = {};
                for (var keys = Object.keys(object.Data), i = 0; i < keys.length; ++i) {
                    if (typeof object.Data[keys[i]] !== "object")
                        throw TypeError(".pb.ServerInfoMapByType.Data: object expected");
                    message.Data[keys[i]] = $root.pb.ServerInfoMapByName.fromObject(object.Data[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerInfoMapByType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ServerInfoMapByType
         * @static
         * @param {pb.ServerInfoMapByType} message ServerInfoMapByType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfoMapByType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.Data = {};
            var keys2;
            if (message.Data && (keys2 = Object.keys(message.Data)).length) {
                object.Data = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.Data[keys2[j]] = $root.pb.ServerInfoMapByName.toObject(message.Data[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this ServerInfoMapByType to JSON.
         * @function toJSON
         * @memberof pb.ServerInfoMapByType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfoMapByType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfoMapByType;
    })();

    pb.ServerInfoListMapByType = (function() {

        /**
         * Properties of a ServerInfoListMapByType.
         * @memberof pb
         * @interface IServerInfoListMapByType
         * @property {Object.<string,pb.IServerInfoList>|null} [Data] ServerInfoListMapByType Data
         */

        /**
         * Constructs a new ServerInfoListMapByType.
         * @memberof pb
         * @classdesc Represents a ServerInfoListMapByType.
         * @implements IServerInfoListMapByType
         * @constructor
         * @param {pb.IServerInfoListMapByType=} [properties] Properties to set
         */
        function ServerInfoListMapByType(properties) {
            this.Data = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfoListMapByType Data.
         * @member {Object.<string,pb.IServerInfoList>} Data
         * @memberof pb.ServerInfoListMapByType
         * @instance
         */
        ServerInfoListMapByType.prototype.Data = $util.emptyObject;

        /**
         * Creates a new ServerInfoListMapByType instance using the specified properties.
         * @function create
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {pb.IServerInfoListMapByType=} [properties] Properties to set
         * @returns {pb.ServerInfoListMapByType} ServerInfoListMapByType instance
         */
        ServerInfoListMapByType.create = function create(properties) {
            return new ServerInfoListMapByType(properties);
        };

        /**
         * Encodes the specified ServerInfoListMapByType message. Does not implicitly {@link pb.ServerInfoListMapByType.verify|verify} messages.
         * @function encode
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {pb.IServerInfoListMapByType} message ServerInfoListMapByType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoListMapByType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                for (var keys = Object.keys(message.Data), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]);
                    $root.pb.ServerInfoList.encode(message.Data[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified ServerInfoListMapByType message, length delimited. Does not implicitly {@link pb.ServerInfoListMapByType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {pb.IServerInfoListMapByType} message ServerInfoListMapByType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfoListMapByType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerInfoListMapByType message from the specified reader or buffer.
         * @function decode
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.ServerInfoListMapByType} ServerInfoListMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoListMapByType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.ServerInfoListMapByType(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (message.Data === $util.emptyObject)
                        message.Data = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = 0;
                    value = null;
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.int64();
                            break;
                        case 2:
                            value = $root.pb.ServerInfoList.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.Data[typeof key === "object" ? $util.longToHash(key) : key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerInfoListMapByType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.ServerInfoListMapByType} ServerInfoListMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfoListMapByType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerInfoListMapByType message.
         * @function verify
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerInfoListMapByType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data")) {
                if (!$util.isObject(message.Data))
                    return "Data: object expected";
                var key = Object.keys(message.Data);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "Data: integer|Long key{k:int64} expected";
                    {
                        var error = $root.pb.ServerInfoList.verify(message.Data[key[i]]);
                        if (error)
                            return "Data." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a ServerInfoListMapByType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.ServerInfoListMapByType} ServerInfoListMapByType
         */
        ServerInfoListMapByType.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.ServerInfoListMapByType)
                return object;
            var message = new $root.pb.ServerInfoListMapByType();
            if (object.Data) {
                if (typeof object.Data !== "object")
                    throw TypeError(".pb.ServerInfoListMapByType.Data: object expected");
                message.Data = {};
                for (var keys = Object.keys(object.Data), i = 0; i < keys.length; ++i) {
                    if (typeof object.Data[keys[i]] !== "object")
                        throw TypeError(".pb.ServerInfoListMapByType.Data: object expected");
                    message.Data[keys[i]] = $root.pb.ServerInfoList.fromObject(object.Data[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerInfoListMapByType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.ServerInfoListMapByType
         * @static
         * @param {pb.ServerInfoListMapByType} message ServerInfoListMapByType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfoListMapByType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.Data = {};
            var keys2;
            if (message.Data && (keys2 = Object.keys(message.Data)).length) {
                object.Data = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.Data[keys2[j]] = $root.pb.ServerInfoList.toObject(message.Data[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this ServerInfoListMapByType to JSON.
         * @function toJSON
         * @memberof pb.ServerInfoListMapByType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfoListMapByType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfoListMapByType;
    })();

    /**
     * StoreDriver enum.
     * @name pb.StoreDriver
     * @enum {number}
     * @property {number} SD_NONE=0 SD_NONE value
     * @property {number} SD_DATABASE=1 SD_DATABASE value
     */
    pb.StoreDriver = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SD_NONE"] = 0;
        values[valuesById[1] = "SD_DATABASE"] = 1;
        return values;
    })();

    pb.StoreConnection = (function() {

        /**
         * Properties of a StoreConnection.
         * @memberof pb
         * @interface IStoreConnection
         * @property {pb.StoreDriver|null} [driver] StoreConnection driver
         * @property {string|null} [host] StoreConnection host
         * @property {number|Long|null} [port] StoreConnection port
         * @property {string|null} [user] StoreConnection user
         * @property {string|null} [password] StoreConnection password
         * @property {string|null} [schema] StoreConnection schema
         * @property {string|null} [schemaGame] StoreConnection schemaGame
         * @property {number|Long|null} [maxConnection] StoreConnection maxConnection
         */

        /**
         * Constructs a new StoreConnection.
         * @memberof pb
         * @classdesc Represents a StoreConnection.
         * @implements IStoreConnection
         * @constructor
         * @param {pb.IStoreConnection=} [properties] Properties to set
         */
        function StoreConnection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StoreConnection driver.
         * @member {pb.StoreDriver} driver
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.driver = 0;

        /**
         * StoreConnection host.
         * @member {string} host
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.host = "";

        /**
         * StoreConnection port.
         * @member {number|Long} port
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.port = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StoreConnection user.
         * @member {string} user
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.user = "";

        /**
         * StoreConnection password.
         * @member {string} password
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.password = "";

        /**
         * StoreConnection schema.
         * @member {string} schema
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.schema = "";

        /**
         * StoreConnection schemaGame.
         * @member {string} schemaGame
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.schemaGame = "";

        /**
         * StoreConnection maxConnection.
         * @member {number|Long} maxConnection
         * @memberof pb.StoreConnection
         * @instance
         */
        StoreConnection.prototype.maxConnection = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new StoreConnection instance using the specified properties.
         * @function create
         * @memberof pb.StoreConnection
         * @static
         * @param {pb.IStoreConnection=} [properties] Properties to set
         * @returns {pb.StoreConnection} StoreConnection instance
         */
        StoreConnection.create = function create(properties) {
            return new StoreConnection(properties);
        };

        /**
         * Encodes the specified StoreConnection message. Does not implicitly {@link pb.StoreConnection.verify|verify} messages.
         * @function encode
         * @memberof pb.StoreConnection
         * @static
         * @param {pb.IStoreConnection} message StoreConnection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoreConnection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.driver != null && Object.hasOwnProperty.call(message, "driver"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.driver);
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.port);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.user);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.password);
            if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.schema);
            if (message.schemaGame != null && Object.hasOwnProperty.call(message, "schemaGame"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.schemaGame);
            if (message.maxConnection != null && Object.hasOwnProperty.call(message, "maxConnection"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.maxConnection);
            return writer;
        };

        /**
         * Encodes the specified StoreConnection message, length delimited. Does not implicitly {@link pb.StoreConnection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.StoreConnection
         * @static
         * @param {pb.IStoreConnection} message StoreConnection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoreConnection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StoreConnection message from the specified reader or buffer.
         * @function decode
         * @memberof pb.StoreConnection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.StoreConnection} StoreConnection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoreConnection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.StoreConnection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.driver = reader.int32();
                    break;
                case 2:
                    message.host = reader.string();
                    break;
                case 3:
                    message.port = reader.int64();
                    break;
                case 4:
                    message.user = reader.string();
                    break;
                case 5:
                    message.password = reader.string();
                    break;
                case 6:
                    message.schema = reader.string();
                    break;
                case 7:
                    message.schemaGame = reader.string();
                    break;
                case 8:
                    message.maxConnection = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StoreConnection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.StoreConnection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.StoreConnection} StoreConnection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoreConnection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StoreConnection message.
         * @function verify
         * @memberof pb.StoreConnection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StoreConnection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.driver != null && message.hasOwnProperty("driver"))
                switch (message.driver) {
                default:
                    return "driver: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port) && !(message.port && $util.isInteger(message.port.low) && $util.isInteger(message.port.high)))
                    return "port: integer|Long expected";
            if (message.user != null && message.hasOwnProperty("user"))
                if (!$util.isString(message.user))
                    return "user: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.schema != null && message.hasOwnProperty("schema"))
                if (!$util.isString(message.schema))
                    return "schema: string expected";
            if (message.schemaGame != null && message.hasOwnProperty("schemaGame"))
                if (!$util.isString(message.schemaGame))
                    return "schemaGame: string expected";
            if (message.maxConnection != null && message.hasOwnProperty("maxConnection"))
                if (!$util.isInteger(message.maxConnection) && !(message.maxConnection && $util.isInteger(message.maxConnection.low) && $util.isInteger(message.maxConnection.high)))
                    return "maxConnection: integer|Long expected";
            return null;
        };

        /**
         * Creates a StoreConnection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.StoreConnection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.StoreConnection} StoreConnection
         */
        StoreConnection.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.StoreConnection)
                return object;
            var message = new $root.pb.StoreConnection();
            switch (object.driver) {
            case "SD_NONE":
            case 0:
                message.driver = 0;
                break;
            case "SD_DATABASE":
            case 1:
                message.driver = 1;
                break;
            }
            if (object.host != null)
                message.host = String(object.host);
            if (object.port != null)
                if ($util.Long)
                    (message.port = $util.Long.fromValue(object.port)).unsigned = false;
                else if (typeof object.port === "string")
                    message.port = parseInt(object.port, 10);
                else if (typeof object.port === "number")
                    message.port = object.port;
                else if (typeof object.port === "object")
                    message.port = new $util.LongBits(object.port.low >>> 0, object.port.high >>> 0).toNumber();
            if (object.user != null)
                message.user = String(object.user);
            if (object.password != null)
                message.password = String(object.password);
            if (object.schema != null)
                message.schema = String(object.schema);
            if (object.schemaGame != null)
                message.schemaGame = String(object.schemaGame);
            if (object.maxConnection != null)
                if ($util.Long)
                    (message.maxConnection = $util.Long.fromValue(object.maxConnection)).unsigned = false;
                else if (typeof object.maxConnection === "string")
                    message.maxConnection = parseInt(object.maxConnection, 10);
                else if (typeof object.maxConnection === "number")
                    message.maxConnection = object.maxConnection;
                else if (typeof object.maxConnection === "object")
                    message.maxConnection = new $util.LongBits(object.maxConnection.low >>> 0, object.maxConnection.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a StoreConnection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.StoreConnection
         * @static
         * @param {pb.StoreConnection} message StoreConnection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StoreConnection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.driver = options.enums === String ? "SD_NONE" : 0;
                object.host = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.port = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.port = options.longs === String ? "0" : 0;
                object.user = "";
                object.password = "";
                object.schema = "";
                object.schemaGame = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxConnection = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxConnection = options.longs === String ? "0" : 0;
            }
            if (message.driver != null && message.hasOwnProperty("driver"))
                object.driver = options.enums === String ? $root.pb.StoreDriver[message.driver] : message.driver;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.port != null && message.hasOwnProperty("port"))
                if (typeof message.port === "number")
                    object.port = options.longs === String ? String(message.port) : message.port;
                else
                    object.port = options.longs === String ? $util.Long.prototype.toString.call(message.port) : options.longs === Number ? new $util.LongBits(message.port.low >>> 0, message.port.high >>> 0).toNumber() : message.port;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.schema != null && message.hasOwnProperty("schema"))
                object.schema = message.schema;
            if (message.schemaGame != null && message.hasOwnProperty("schemaGame"))
                object.schemaGame = message.schemaGame;
            if (message.maxConnection != null && message.hasOwnProperty("maxConnection"))
                if (typeof message.maxConnection === "number")
                    object.maxConnection = options.longs === String ? String(message.maxConnection) : message.maxConnection;
                else
                    object.maxConnection = options.longs === String ? $util.Long.prototype.toString.call(message.maxConnection) : options.longs === Number ? new $util.LongBits(message.maxConnection.low >>> 0, message.maxConnection.high >>> 0).toNumber() : message.maxConnection;
            return object;
        };

        /**
         * Converts this StoreConnection to JSON.
         * @function toJSON
         * @memberof pb.StoreConnection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StoreConnection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StoreConnection;
    })();

    return pb;
})();

module.exports = $root;
