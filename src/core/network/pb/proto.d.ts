import * as $protobuf from "protobufjs";
/** Namespace pb. */
export namespace pb {

    /** AuthType enum. */
    enum AuthType {
        AT_NONE = 0,
        AT_JWT = 1,
        AT_OAUTH = 2
    }

    /** Properties of an Auth. */
    interface IAuth {

        /** Auth type */
        type?: (pb.AuthType|null);

        /** Auth id */
        id?: (string|null);

        /** Auth secret */
        secret?: (string|null);

        /** Auth grantType */
        grantType?: (string|null);

        /** Auth scope */
        scope?: (string|null);
    }

    /** Represents an Auth. */
    class Auth implements IAuth {

        /**
         * Constructs a new Auth.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAuth);

        /** Auth type. */
        public type: pb.AuthType;

        /** Auth id. */
        public id: string;

        /** Auth secret. */
        public secret: string;

        /** Auth grantType. */
        public grantType: string;

        /** Auth scope. */
        public scope: string;

        /**
         * Creates a new Auth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Auth instance
         */
        public static create(properties?: pb.IAuth): pb.Auth;

        /**
         * Encodes the specified Auth message. Does not implicitly {@link pb.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Auth message, length delimited. Does not implicitly {@link pb.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Auth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Auth;

        /**
         * Decodes an Auth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Auth;

        /**
         * Verifies an Auth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Auth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Auth
         */
        public static fromObject(object: { [k: string]: any }): pb.Auth;

        /**
         * Creates a plain object from an Auth message. Also converts values to other types if specified.
         * @param message Auth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Auth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Auth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Currency. */
    interface ICurrency {

        /** Currency name */
        name?: (string|null);

        /** Currency multiplyToCredit */
        multiplyToCredit?: (number|null);
    }

    /** Represents a Currency. */
    class Currency implements ICurrency {

        /**
         * Constructs a new Currency.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ICurrency);

        /** Currency name. */
        public name: string;

        /** Currency multiplyToCredit. */
        public multiplyToCredit: number;

        /**
         * Creates a new Currency instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Currency instance
         */
        public static create(properties?: pb.ICurrency): pb.Currency;

        /**
         * Encodes the specified Currency message. Does not implicitly {@link pb.Currency.verify|verify} messages.
         * @param message Currency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ICurrency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Currency message, length delimited. Does not implicitly {@link pb.Currency.verify|verify} messages.
         * @param message Currency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ICurrency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Currency message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Currency;

        /**
         * Decodes a Currency message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Currency;

        /**
         * Verifies a Currency message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Currency message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Currency
         */
        public static fromObject(object: { [k: string]: any }): pb.Currency;

        /**
         * Creates a plain object from a Currency message. Also converts values to other types if specified.
         * @param message Currency
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Currency, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Currency to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        EC_NONE = 0,
        EC_SERVER_INTERNAL = 1,
        EC_LOGIN_FAILED = 10001,
        EC_ROOM_JOIN_FAILED_NOT_ENOUGH_CREDIT = 30001,
        EC_ROOM_JOIN_FAILED_NOT_ALLOW = 30002,
        EC_ROOM_JOIN_FAILED_FULL = 30003,
        EC_ROOM_JOIN_FAILED_EXISTS = 30004
    }

    /** ErrorAction enum. */
    enum ErrorAction {
        EA_NONE = 0,
        EA_CLOSE_CONNECTION = 1
    }

    /** Properties of an Error. */
    interface IError {

        /** Error code */
        code?: (pb.ErrorCode|null);

        /** Error message */
        message?: (string|null);

        /** Error timestamp */
        timestamp?: (number|Long|null);

        /** Error action */
        action?: (pb.ErrorAction|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IError);

        /** Error code. */
        public code: pb.ErrorCode;

        /** Error message. */
        public message: string;

        /** Error timestamp. */
        public timestamp: (number|Long);

        /** Error action. */
        public action: pb.ErrorAction;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: pb.IError): pb.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): pb.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Namespace game. */
    namespace game {

        /** Namespace chinese_poker_13. */
        namespace chinese_poker_13 {

            /** CardNumber enum. */
            enum CardNumber {
                CN_NONE = 0,
                CN_ONE = 1,
                CN_TWO = 2,
                CN_THREE = 3,
                CN_FOUR = 4,
                CN_FIVE = 5,
                CN_SIX = 6,
                CN_SEVEN = 7,
                CN_EIGHT = 8,
                CN_NINE = 9,
                CN_TEN = 10,
                CN_JACK = 11,
                CN_QUEEN = 12,
                CN_KING = 13,
                CN_ACE = 14,
                CN_JOKER_1 = 21,
                CN_JOKER_2 = 22
            }

            /** CardType enum. */
            enum CardType {
                CT_NONE = 0,
                CT_CLUB = 1,
                CT_DIAMOND = 2,
                CT_HEART = 3,
                CT_SPADE = 4,
                CT_JOKER = 9
            }

            /** Properties of a Card. */
            interface ICard {

                /** Card Type */
                Type?: (pb.game.chinese_poker_13.CardType|null);

                /** Card Number */
                Number?: (pb.game.chinese_poker_13.CardNumber|null);

                /** Card Point */
                Point?: (number|Long|null);
            }

            /** Represents a Card. */
            class Card implements ICard {

                /**
                 * Constructs a new Card.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.ICard);

                /** Card Type. */
                public Type: pb.game.chinese_poker_13.CardType;

                /** Card Number. */
                public Number: pb.game.chinese_poker_13.CardNumber;

                /** Card Point. */
                public Point: (number|Long);

                /**
                 * Creates a new Card instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Card instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.ICard): pb.game.chinese_poker_13.Card;

                /**
                 * Encodes the specified Card message. Does not implicitly {@link pb.game.chinese_poker_13.Card.verify|verify} messages.
                 * @param message Card message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Card message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Card.verify|verify} messages.
                 * @param message Card message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Card message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Card
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.Card;

                /**
                 * Decodes a Card message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Card
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.Card;

                /**
                 * Verifies a Card message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Card message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Card
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.Card;

                /**
                 * Creates a plain object from a Card message. Also converts values to other types if specified.
                 * @param message Card
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Card to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Game. */
            interface IGame {

                /** Game id */
                id?: (string|null);

                /** Game currentRound */
                currentRound?: (pb.game.chinese_poker_13.IRound|null);

                /** Game roundCount */
                roundCount?: (number|null);
            }

            /** Represents a Game. */
            class Game implements IGame {

                /**
                 * Constructs a new Game.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IGame);

                /** Game id. */
                public id: string;

                /** Game currentRound. */
                public currentRound?: (pb.game.chinese_poker_13.IRound|null);

                /** Game roundCount. */
                public roundCount: number;

                /**
                 * Creates a new Game instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Game instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IGame): pb.game.chinese_poker_13.Game;

                /**
                 * Encodes the specified Game message. Does not implicitly {@link pb.game.chinese_poker_13.Game.verify|verify} messages.
                 * @param message Game message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Game message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Game.verify|verify} messages.
                 * @param message Game message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Game message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Game
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.Game;

                /**
                 * Decodes a Game message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Game
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.Game;

                /**
                 * Verifies a Game message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Game message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Game
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.Game;

                /**
                 * Creates a plain object from a Game message. Also converts values to other types if specified.
                 * @param message Game
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.Game, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Game to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** PatternType enum. */
            enum PatternType {
                CARD_NONE = 0,
                CARD_FAILED = 1,
                CARD_SEPERATE = 2,
                CARD_FAKE_ONE_PAIR = 3,
                CARD_ONE_PAIR = 4,
                CARD_TWO_PAIR = 6,
                CARD_FAKE_THREE_A_KIND = 7,
                CARD_THREE_A_KIND = 8,
                CARD_FAKE_STRAIGHT = 9,
                CARD_STRAIGHT = 10,
                CARD_FAKE_FLUSH = 11,
                CARD_FLUSH = 12,
                CARD_FAKE_FLUSH_ONE_PAIR = 13,
                CARD_FLUSH_ONE_PAIR = 14,
                CARD_FLUSH_TWO_PAIR = 16,
                CARD_FAKE_FLUSH_THREE_A_KIND = 17,
                CARD_FAKE_FULL_HOUSE = 19,
                CARD_FULL_HOUSE = 20,
                CARD_FAKE_FOUR_A_KIND = 21,
                CARD_FOUR_A_KIND = 22,
                CARD_FAKE_FLUSH_STRAIGHT = 23,
                CARD_FLUSH_STRAIGHT = 24,
                CARD_FAKE_FIVE_A_KIND = 25,
                CARD_FIVE_A_KIND = 26
            }

            /** StraightFiveType enum. */
            enum StraightFiveType {
                STRAIGHT_FIVE_NONE = 0,
                STRAIGHT_FIVE_2_6 = 1,
                STRAIGHT_FIVE_3_7 = 2,
                STRAIGHT_FIVE_4_8 = 3,
                STRAIGHT_FIVE_5_9 = 4,
                STRAIGHT_FIVE_6_10 = 5,
                STRAIGHT_FIVE_7_11 = 6,
                STRAIGHT_FIVE_8_12 = 7,
                STRAIGHT_FIVE_9_13 = 8,
                STRAIGHT_FIVE_1_5 = 9,
                STRAIGHT_FIVE_10_14 = 10
            }

            /** Properties of a CardPattern. */
            interface ICardPattern {

                /** CardPattern cardList */
                cardList?: (pb.game.chinese_poker_13.ICard[]|null);

                /** CardPattern patternType */
                patternType?: (pb.game.chinese_poker_13.PatternType|null);

                /** CardPattern patternPhaseList */
                patternPhaseList?: ((number|Long)[]|null);

                /** CardPattern cardListNotInPattern */
                cardListNotInPattern?: (pb.game.chinese_poker_13.ICard[]|null);

                /** CardPattern cardListLeft */
                cardListLeft?: (pb.game.chinese_poker_13.ICard[]|null);
            }

            /** Represents a CardPattern. */
            class CardPattern implements ICardPattern {

                /**
                 * Constructs a new CardPattern.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.ICardPattern);

                /** CardPattern cardList. */
                public cardList: pb.game.chinese_poker_13.ICard[];

                /** CardPattern patternType. */
                public patternType: pb.game.chinese_poker_13.PatternType;

                /** CardPattern patternPhaseList. */
                public patternPhaseList: (number|Long)[];

                /** CardPattern cardListNotInPattern. */
                public cardListNotInPattern: pb.game.chinese_poker_13.ICard[];

                /** CardPattern cardListLeft. */
                public cardListLeft: pb.game.chinese_poker_13.ICard[];

                /**
                 * Creates a new CardPattern instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CardPattern instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.ICardPattern): pb.game.chinese_poker_13.CardPattern;

                /**
                 * Encodes the specified CardPattern message. Does not implicitly {@link pb.game.chinese_poker_13.CardPattern.verify|verify} messages.
                 * @param message CardPattern message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.ICardPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CardPattern message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.CardPattern.verify|verify} messages.
                 * @param message CardPattern message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.ICardPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CardPattern message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CardPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.CardPattern;

                /**
                 * Decodes a CardPattern message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CardPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.CardPattern;

                /**
                 * Verifies a CardPattern message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CardPattern message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CardPattern
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.CardPattern;

                /**
                 * Creates a plain object from a CardPattern message. Also converts values to other types if specified.
                 * @param message CardPattern
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.CardPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CardPattern to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RecommendDeck. */
            interface IRecommendDeck {

                /** RecommendDeck front */
                front?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** RecommendDeck middle */
                middle?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** RecommendDeck back */
                back?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** RecommendDeck cardListLeft */
                cardListLeft?: (pb.game.chinese_poker_13.ICard[]|null);
            }

            /** Represents a RecommendDeck. */
            class RecommendDeck implements IRecommendDeck {

                /**
                 * Constructs a new RecommendDeck.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IRecommendDeck);

                /** RecommendDeck front. */
                public front?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** RecommendDeck middle. */
                public middle?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** RecommendDeck back. */
                public back?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** RecommendDeck cardListLeft. */
                public cardListLeft: pb.game.chinese_poker_13.ICard[];

                /**
                 * Creates a new RecommendDeck instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RecommendDeck instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IRecommendDeck): pb.game.chinese_poker_13.RecommendDeck;

                /**
                 * Encodes the specified RecommendDeck message. Does not implicitly {@link pb.game.chinese_poker_13.RecommendDeck.verify|verify} messages.
                 * @param message RecommendDeck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IRecommendDeck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RecommendDeck message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.RecommendDeck.verify|verify} messages.
                 * @param message RecommendDeck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IRecommendDeck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RecommendDeck message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RecommendDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.RecommendDeck;

                /**
                 * Decodes a RecommendDeck message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RecommendDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.RecommendDeck;

                /**
                 * Verifies a RecommendDeck message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RecommendDeck message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RecommendDeck
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.RecommendDeck;

                /**
                 * Creates a plain object from a RecommendDeck message. Also converts values to other types if specified.
                 * @param message RecommendDeck
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.RecommendDeck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RecommendDeck to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PlayerDeck. */
            interface IPlayerDeck {

                /** PlayerDeck cardList */
                cardList?: (pb.game.chinese_poker_13.ICard[]|null);

                /** PlayerDeck front */
                front?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** PlayerDeck middle */
                middle?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** PlayerDeck back */
                back?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** PlayerDeck cardListLeft */
                cardListLeft?: (pb.game.chinese_poker_13.ICard[]|null);

                /** PlayerDeck recommendDeckList */
                recommendDeckList?: (pb.game.chinese_poker_13.IRecommendDeck[]|null);
            }

            /** Represents a PlayerDeck. */
            class PlayerDeck implements IPlayerDeck {

                /**
                 * Constructs a new PlayerDeck.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IPlayerDeck);

                /** PlayerDeck cardList. */
                public cardList: pb.game.chinese_poker_13.ICard[];

                /** PlayerDeck front. */
                public front?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** PlayerDeck middle. */
                public middle?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** PlayerDeck back. */
                public back?: (pb.game.chinese_poker_13.ICardPattern|null);

                /** PlayerDeck cardListLeft. */
                public cardListLeft: pb.game.chinese_poker_13.ICard[];

                /** PlayerDeck recommendDeckList. */
                public recommendDeckList: pb.game.chinese_poker_13.IRecommendDeck[];

                /**
                 * Creates a new PlayerDeck instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlayerDeck instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IPlayerDeck): pb.game.chinese_poker_13.PlayerDeck;

                /**
                 * Encodes the specified PlayerDeck message. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeck.verify|verify} messages.
                 * @param message PlayerDeck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IPlayerDeck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlayerDeck message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeck.verify|verify} messages.
                 * @param message PlayerDeck message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IPlayerDeck, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlayerDeck message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlayerDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.PlayerDeck;

                /**
                 * Decodes a PlayerDeck message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlayerDeck
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.PlayerDeck;

                /**
                 * Verifies a PlayerDeck message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlayerDeck message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlayerDeck
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.PlayerDeck;

                /**
                 * Creates a plain object from a PlayerDeck message. Also converts values to other types if specified.
                 * @param message PlayerDeck
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.PlayerDeck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlayerDeck to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** RoomState enum. */
            enum RoomState {
                RS_NONE = 0,
                RS_FIRST_LAUNCH = 101,
                RS_FIRST_LAUNCH_COUNT_DOWN = 102,
                RS_WAIT_FOR_PLAYER_JOIN = 103,
                RS_WAIT_FOR_PLAYER_JOIN_COUNT_DOWN = 104,
                RS_PREPARE_TO_START_GAME = 105,
                RS_PREPARE_TO_START_ROUND = 106,
                RS_START_ROUND = 107,
                RS_SHUFFLE_CARD = 108,
                RS_SHUFFLE_CARD_COUNT_DOWN = 109,
                RS_DRAW_RANDOM_CARD = 110,
                RS_DRAW_RANDOM_CARD_COUNT_DOWN = 111,
                RS_DEAL_CARD = 112,
                RS_DEAL_CARD_COUNT_DOWN = 113,
                RS_WAIT_FOR_PLAYER_SORT_CARD = 114,
                RS_WAIT_FOR_PLAYER_SORT_CARD_COUNT_DOWN = 115,
                RS_WAIT_FOR_PLAYER_DECK = 116,
                RS_WAIT_FOR_PLAYER_DECK_COUNT_DOWN = 117,
                RS_CHECK_PLAYER_DECK = 118,
                RS_COMPARE_PLAYER_DECK = 119,
                RS_WAIT_FOR_SHOW_RESULT_COUNT_DOWN = 120,
                RS_END_ROUND = 121,
                RS_SHOW_END_ROUND_SETTLE_RESULT = 122,
                RS_SHOW_END_ROUND_SETTLE_RESULT_COUNT_DOWN = 123,
                RS_CHECK_END_GAME = 124,
                RS_END_GAME = 125,
                RS_SHOW_END_GAME_SETTLE_RESULT = 126,
                RS_SHOW_END_GAME_SETTLE_RESULT_COUNT_DOWN = 127,
                RS_WAIT_FOR_PLAYER_CONTINUE = 128,
                RS_WAIT_FOR_PLAYER_CONTINUE_COUNT_DOWN = 129,
                RS_REMOVE_ALL_PLAYER = 130,
                RS_RESET = 131,
                RS_JOIN_PLAYER_HAS_REGISTERD = 132,
                RS_PREPARE_TO_CLOSE = 201
            }

            /** Properties of a Room. */
            interface IRoom {

                /** Room id */
                id?: (string|null);

                /** Room name */
                name?: (string|null);

                /** Room type */
                type?: (number|null);

                /** Room minCreditToEnter */
                minCreditToEnter?: (number|null);

                /** Room minCreditToBet */
                minCreditToBet?: (number|null);

                /** Room sort */
                sort?: (number|null);

                /** Room status */
                status?: (number|null);

                /** Room state */
                state?: (pb.game.chinese_poker_13.RoomState|null);

                /** Room maxPlayer */
                maxPlayer?: (number|null);

                /** Room minPlayer */
                minPlayer?: (number|null);

                /** Room maxSpectator */
                maxSpectator?: (number|null);

                /** Room playerInfoMapById */
                playerInfoMapById?: ({ [k: string]: pb.IPlayer }|null);

                /** Room playerInfoMapByPos */
                playerInfoMapByPos?: ({ [k: string]: pb.IPlayer }|null);

                /** Room spectatorInfoMapById */
                spectatorInfoMapById?: ({ [k: string]: pb.IPlayer }|null);

                /** Room game */
                game?: (pb.game.chinese_poker_13.IGame|null);

                /** Room countdown */
                countdown?: (number|null);

                /** Room isTimeoutWaitForPlayerDeckExtended */
                isTimeoutWaitForPlayerDeckExtended?: (boolean|null);

                /** Room maxRound */
                maxRound?: (number|null);
            }

            /** Represents a Room. */
            class Room implements IRoom {

                /**
                 * Constructs a new Room.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IRoom);

                /** Room id. */
                public id: string;

                /** Room name. */
                public name: string;

                /** Room type. */
                public type: number;

                /** Room minCreditToEnter. */
                public minCreditToEnter: number;

                /** Room minCreditToBet. */
                public minCreditToBet: number;

                /** Room sort. */
                public sort: number;

                /** Room status. */
                public status: number;

                /** Room state. */
                public state: pb.game.chinese_poker_13.RoomState;

                /** Room maxPlayer. */
                public maxPlayer: number;

                /** Room minPlayer. */
                public minPlayer: number;

                /** Room maxSpectator. */
                public maxSpectator: number;

                /** Room playerInfoMapById. */
                public playerInfoMapById: { [k: string]: pb.IPlayer };

                /** Room playerInfoMapByPos. */
                public playerInfoMapByPos: { [k: string]: pb.IPlayer };

                /** Room spectatorInfoMapById. */
                public spectatorInfoMapById: { [k: string]: pb.IPlayer };

                /** Room game. */
                public game?: (pb.game.chinese_poker_13.IGame|null);

                /** Room countdown. */
                public countdown: number;

                /** Room isTimeoutWaitForPlayerDeckExtended. */
                public isTimeoutWaitForPlayerDeckExtended: boolean;

                /** Room maxRound. */
                public maxRound: number;

                /**
                 * Creates a new Room instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Room instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IRoom): pb.game.chinese_poker_13.Room;

                /**
                 * Encodes the specified Room message. Does not implicitly {@link pb.game.chinese_poker_13.Room.verify|verify} messages.
                 * @param message Room message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Room message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Room.verify|verify} messages.
                 * @param message Room message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Room message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Room
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.Room;

                /**
                 * Decodes a Room message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Room
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.Room;

                /**
                 * Verifies a Room message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Room message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Room
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.Room;

                /**
                 * Creates a plain object from a Room message. Also converts values to other types if specified.
                 * @param message Room
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Room to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RoomMapById. */
            interface IRoomMapById {

                /** RoomMapById Data */
                Data?: ({ [k: string]: pb.game.chinese_poker_13.IRoom }|null);
            }

            /** Represents a RoomMapById. */
            class RoomMapById implements IRoomMapById {

                /**
                 * Constructs a new RoomMapById.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IRoomMapById);

                /** RoomMapById Data. */
                public Data: { [k: string]: pb.game.chinese_poker_13.IRoom };

                /**
                 * Creates a new RoomMapById instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RoomMapById instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IRoomMapById): pb.game.chinese_poker_13.RoomMapById;

                /**
                 * Encodes the specified RoomMapById message. Does not implicitly {@link pb.game.chinese_poker_13.RoomMapById.verify|verify} messages.
                 * @param message RoomMapById message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IRoomMapById, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RoomMapById message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.RoomMapById.verify|verify} messages.
                 * @param message RoomMapById message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IRoomMapById, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RoomMapById message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RoomMapById
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.RoomMapById;

                /**
                 * Decodes a RoomMapById message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RoomMapById
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.RoomMapById;

                /**
                 * Verifies a RoomMapById message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RoomMapById message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RoomMapById
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.RoomMapById;

                /**
                 * Creates a plain object from a RoomMapById message. Also converts values to other types if specified.
                 * @param message RoomMapById
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.RoomMapById, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RoomMapById to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Round. */
            interface IRound {

                /** Round id */
                id?: (string|null);

                /** Round number */
                number?: (number|Long|null);

                /** Round cardList */
                cardList?: (pb.game.chinese_poker_13.ICard[]|null);

                /** Round randomCard */
                randomCard?: (pb.game.chinese_poker_13.ICard|null);

                /** Round playerDeckMapByPlayerId */
                playerDeckMapByPlayerId?: ({ [k: string]: pb.game.chinese_poker_13.IPlayerDeck }|null);

                /** Round playerDeckCompareResultByPlayerId */
                playerDeckCompareResultByPlayerId?: ({ [k: string]: pb.game.chinese_poker_13.IPlayerDeckCompareResult }|null);

                /** Round playerIdListSortByFrontResult */
                playerIdListSortByFrontResult?: (string[]|null);

                /** Round playerIdListSortByMiddleResult */
                playerIdListSortByMiddleResult?: (string[]|null);

                /** Round playerIdListSortByBackResult */
                playerIdListSortByBackResult?: (string[]|null);
            }

            /** Represents a Round. */
            class Round implements IRound {

                /**
                 * Constructs a new Round.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IRound);

                /** Round id. */
                public id: string;

                /** Round number. */
                public number: (number|Long);

                /** Round cardList. */
                public cardList: pb.game.chinese_poker_13.ICard[];

                /** Round randomCard. */
                public randomCard?: (pb.game.chinese_poker_13.ICard|null);

                /** Round playerDeckMapByPlayerId. */
                public playerDeckMapByPlayerId: { [k: string]: pb.game.chinese_poker_13.IPlayerDeck };

                /** Round playerDeckCompareResultByPlayerId. */
                public playerDeckCompareResultByPlayerId: { [k: string]: pb.game.chinese_poker_13.IPlayerDeckCompareResult };

                /** Round playerIdListSortByFrontResult. */
                public playerIdListSortByFrontResult: string[];

                /** Round playerIdListSortByMiddleResult. */
                public playerIdListSortByMiddleResult: string[];

                /** Round playerIdListSortByBackResult. */
                public playerIdListSortByBackResult: string[];

                /**
                 * Creates a new Round instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Round instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IRound): pb.game.chinese_poker_13.Round;

                /**
                 * Encodes the specified Round message. Does not implicitly {@link pb.game.chinese_poker_13.Round.verify|verify} messages.
                 * @param message Round message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IRound, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Round message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.Round.verify|verify} messages.
                 * @param message Round message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IRound, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Round message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Round
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.Round;

                /**
                 * Decodes a Round message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Round
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.Round;

                /**
                 * Verifies a Round message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Round message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Round
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.Round;

                /**
                 * Creates a plain object from a Round message. Also converts values to other types if specified.
                 * @param message Round
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.Round, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Round to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CompareResult. */
            interface ICompareResult {

                /** CompareResult originPoint */
                originPoint?: (number|null);

                /** CompareResult extraPoint */
                extraPoint?: (number|null);
            }

            /** Represents a CompareResult. */
            class CompareResult implements ICompareResult {

                /**
                 * Constructs a new CompareResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.ICompareResult);

                /** CompareResult originPoint. */
                public originPoint: number;

                /** CompareResult extraPoint. */
                public extraPoint: number;

                /**
                 * Creates a new CompareResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CompareResult instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.ICompareResult): pb.game.chinese_poker_13.CompareResult;

                /**
                 * Encodes the specified CompareResult message. Does not implicitly {@link pb.game.chinese_poker_13.CompareResult.verify|verify} messages.
                 * @param message CompareResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.ICompareResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CompareResult message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.CompareResult.verify|verify} messages.
                 * @param message CompareResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.ICompareResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CompareResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.CompareResult;

                /**
                 * Decodes a CompareResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.CompareResult;

                /**
                 * Verifies a CompareResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CompareResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CompareResult
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.CompareResult;

                /**
                 * Creates a plain object from a CompareResult message. Also converts values to other types if specified.
                 * @param message CompareResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.CompareResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CompareResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeckCompareResult. */
            interface IDeckCompareResult {

                /** DeckCompareResult front */
                front?: (pb.game.chinese_poker_13.ICompareResult|null);

                /** DeckCompareResult middle */
                middle?: (pb.game.chinese_poker_13.ICompareResult|null);

                /** DeckCompareResult back */
                back?: (pb.game.chinese_poker_13.ICompareResult|null);

                /** DeckCompareResult allPatternWinExtraPoint */
                allPatternWinExtraPoint?: (number|null);

                /** DeckCompareResult homeRundExtraPoint */
                homeRundExtraPoint?: (number|null);

                /** DeckCompareResult totalPoint */
                totalPoint?: (number|null);
            }

            /** Represents a DeckCompareResult. */
            class DeckCompareResult implements IDeckCompareResult {

                /**
                 * Constructs a new DeckCompareResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IDeckCompareResult);

                /** DeckCompareResult front. */
                public front?: (pb.game.chinese_poker_13.ICompareResult|null);

                /** DeckCompareResult middle. */
                public middle?: (pb.game.chinese_poker_13.ICompareResult|null);

                /** DeckCompareResult back. */
                public back?: (pb.game.chinese_poker_13.ICompareResult|null);

                /** DeckCompareResult allPatternWinExtraPoint. */
                public allPatternWinExtraPoint: number;

                /** DeckCompareResult homeRundExtraPoint. */
                public homeRundExtraPoint: number;

                /** DeckCompareResult totalPoint. */
                public totalPoint: number;

                /**
                 * Creates a new DeckCompareResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeckCompareResult instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IDeckCompareResult): pb.game.chinese_poker_13.DeckCompareResult;

                /**
                 * Encodes the specified DeckCompareResult message. Does not implicitly {@link pb.game.chinese_poker_13.DeckCompareResult.verify|verify} messages.
                 * @param message DeckCompareResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IDeckCompareResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeckCompareResult message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.DeckCompareResult.verify|verify} messages.
                 * @param message DeckCompareResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IDeckCompareResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeckCompareResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.DeckCompareResult;

                /**
                 * Decodes a DeckCompareResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.DeckCompareResult;

                /**
                 * Verifies a DeckCompareResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeckCompareResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeckCompareResult
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.DeckCompareResult;

                /**
                 * Creates a plain object from a DeckCompareResult message. Also converts values to other types if specified.
                 * @param message DeckCompareResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.DeckCompareResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeckCompareResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PlayerDeckCompareResult. */
            interface IPlayerDeckCompareResult {

                /** PlayerDeckCompareResult deckCompareResultByPlayerId */
                deckCompareResultByPlayerId?: ({ [k: string]: pb.game.chinese_poker_13.IDeckCompareResult }|null);

                /** PlayerDeckCompareResult countAllPatternWin */
                countAllPatternWin?: (number|null);
            }

            /** Represents a PlayerDeckCompareResult. */
            class PlayerDeckCompareResult implements IPlayerDeckCompareResult {

                /**
                 * Constructs a new PlayerDeckCompareResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.game.chinese_poker_13.IPlayerDeckCompareResult);

                /** PlayerDeckCompareResult deckCompareResultByPlayerId. */
                public deckCompareResultByPlayerId: { [k: string]: pb.game.chinese_poker_13.IDeckCompareResult };

                /** PlayerDeckCompareResult countAllPatternWin. */
                public countAllPatternWin: number;

                /**
                 * Creates a new PlayerDeckCompareResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlayerDeckCompareResult instance
                 */
                public static create(properties?: pb.game.chinese_poker_13.IPlayerDeckCompareResult): pb.game.chinese_poker_13.PlayerDeckCompareResult;

                /**
                 * Encodes the specified PlayerDeckCompareResult message. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeckCompareResult.verify|verify} messages.
                 * @param message PlayerDeckCompareResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.game.chinese_poker_13.IPlayerDeckCompareResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlayerDeckCompareResult message, length delimited. Does not implicitly {@link pb.game.chinese_poker_13.PlayerDeckCompareResult.verify|verify} messages.
                 * @param message PlayerDeckCompareResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.game.chinese_poker_13.IPlayerDeckCompareResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlayerDeckCompareResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlayerDeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.game.chinese_poker_13.PlayerDeckCompareResult;

                /**
                 * Decodes a PlayerDeckCompareResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlayerDeckCompareResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.game.chinese_poker_13.PlayerDeckCompareResult;

                /**
                 * Verifies a PlayerDeckCompareResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlayerDeckCompareResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlayerDeckCompareResult
                 */
                public static fromObject(object: { [k: string]: any }): pb.game.chinese_poker_13.PlayerDeckCompareResult;

                /**
                 * Creates a plain object from a PlayerDeckCompareResult message. Also converts values to other types if specified.
                 * @param message PlayerDeckCompareResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.game.chinese_poker_13.PlayerDeckCompareResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlayerDeckCompareResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** GameType enum. */
        enum GameType {
            GT_NONE = 0,
            GT_EXAMPLE = 1,
            GT_CHINESE_POKER_13 = 1001
        }
    }

    /** ThirdParty enum. */
    enum ThirdParty {
        TP_NONE = 0,
        TP_FB = 1
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest clientId */
        clientId?: (string|null);

        /** LoginRequest thirdPartyId */
        thirdPartyId?: (string|null);

        /** LoginRequest thirdParty */
        thirdParty?: (pb.ThirdParty|null);

        /** LoginRequest thirdPartyUserName */
        thirdPartyUserName?: (string|null);

        /** LoginRequest thirdPartyPictureUrl */
        thirdPartyPictureUrl?: (string|null);

        /** LoginRequest ipAddress */
        ipAddress?: (string|null);

        /** LoginRequest country */
        country?: (string|null);

        /** LoginRequest language */
        language?: (string|null);

        /** LoginRequest phoneModel */
        phoneModel?: (string|null);

        /** LoginRequest os */
        os?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoginRequest);

        /** LoginRequest clientId. */
        public clientId: string;

        /** LoginRequest thirdPartyId. */
        public thirdPartyId: string;

        /** LoginRequest thirdParty. */
        public thirdParty: pb.ThirdParty;

        /** LoginRequest thirdPartyUserName. */
        public thirdPartyUserName: string;

        /** LoginRequest thirdPartyPictureUrl. */
        public thirdPartyPictureUrl: string;

        /** LoginRequest ipAddress. */
        public ipAddress: string;

        /** LoginRequest country. */
        public country: string;

        /** LoginRequest language. */
        public language: string;

        /** LoginRequest phoneModel. */
        public phoneModel: string;

        /** LoginRequest os. */
        public os: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: pb.ILoginRequest): pb.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link pb.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link pb.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): pb.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse aesKey */
        aesKey?: (string|null);

        /** LoginResponse aesIv */
        aesIv?: (string|null);

        /** LoginResponse playerId */
        playerId?: (string|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILoginResponse);

        /** LoginResponse aesKey. */
        public aesKey: string;

        /** LoginResponse aesIv. */
        public aesIv: string;

        /** LoginResponse playerId. */
        public playerId: string;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: pb.ILoginResponse): pb.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link pb.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link pb.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): pb.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlatformPlayer. */
    interface IPlatformPlayer {

        /** PlatformPlayer id */
        id?: (string|null);

        /** PlatformPlayer sn */
        sn?: (number|Long|null);

        /** PlatformPlayer name */
        name?: (string|null);

        /** PlatformPlayer currency */
        currency?: (string|null);

        /** PlatformPlayer language */
        language?: (string|null);

        /** PlatformPlayer credit */
        credit?: (number|Long|null);

        /** PlatformPlayer balance */
        balance?: (number|null);

        /** PlatformPlayer idAtPlatform */
        idAtPlatform?: (string|null);

        /** PlatformPlayer accessToken */
        accessToken?: (string|null);

        /** PlatformPlayer displayName */
        displayName?: (string|null);

        /** PlatformPlayer platform */
        platform?: (string|null);
    }

    /** Represents a PlatformPlayer. */
    class PlatformPlayer implements IPlatformPlayer {

        /**
         * Constructs a new PlatformPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlatformPlayer);

        /** PlatformPlayer id. */
        public id: string;

        /** PlatformPlayer sn. */
        public sn: (number|Long);

        /** PlatformPlayer name. */
        public name: string;

        /** PlatformPlayer currency. */
        public currency: string;

        /** PlatformPlayer language. */
        public language: string;

        /** PlatformPlayer credit. */
        public credit: (number|Long);

        /** PlatformPlayer balance. */
        public balance: number;

        /** PlatformPlayer idAtPlatform. */
        public idAtPlatform: string;

        /** PlatformPlayer accessToken. */
        public accessToken: string;

        /** PlatformPlayer displayName. */
        public displayName: string;

        /** PlatformPlayer platform. */
        public platform: string;

        /**
         * Creates a new PlatformPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlatformPlayer instance
         */
        public static create(properties?: pb.IPlatformPlayer): pb.PlatformPlayer;

        /**
         * Encodes the specified PlatformPlayer message. Does not implicitly {@link pb.PlatformPlayer.verify|verify} messages.
         * @param message PlatformPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlatformPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlatformPlayer message, length delimited. Does not implicitly {@link pb.PlatformPlayer.verify|verify} messages.
         * @param message PlatformPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPlatformPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlatformPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlatformPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlatformPlayer;

        /**
         * Decodes a PlatformPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlatformPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PlatformPlayer;

        /**
         * Verifies a PlatformPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlatformPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlatformPlayer
         */
        public static fromObject(object: { [k: string]: any }): pb.PlatformPlayer;

        /**
         * Creates a plain object from a PlatformPlayer message. Also converts values to other types if specified.
         * @param message PlatformPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PlatformPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlatformPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlatformProvider. */
    interface IPlatformProvider {

        /** PlatformProvider factoryName */
        factoryName?: (string|null);

        /** PlatformProvider name */
        name?: (string|null);

        /** PlatformProvider aesKey */
        aesKey?: (string|null);

        /** PlatformProvider aesIv */
        aesIv?: (string|null);

        /** PlatformProvider apiUrlBase */
        apiUrlBase?: (string|null);

        /** PlatformProvider publicIpAddress */
        publicIpAddress?: (string|null);

        /** PlatformProvider runMode */
        runMode?: (string|null);

        /** PlatformProvider auth */
        auth?: (pb.IAuth|null);
    }

    /** Represents a PlatformProvider. */
    class PlatformProvider implements IPlatformProvider {

        /**
         * Constructs a new PlatformProvider.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlatformProvider);

        /** PlatformProvider factoryName. */
        public factoryName: string;

        /** PlatformProvider name. */
        public name: string;

        /** PlatformProvider aesKey. */
        public aesKey: string;

        /** PlatformProvider aesIv. */
        public aesIv: string;

        /** PlatformProvider apiUrlBase. */
        public apiUrlBase: string;

        /** PlatformProvider publicIpAddress. */
        public publicIpAddress: string;

        /** PlatformProvider runMode. */
        public runMode: string;

        /** PlatformProvider auth. */
        public auth?: (pb.IAuth|null);

        /**
         * Creates a new PlatformProvider instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlatformProvider instance
         */
        public static create(properties?: pb.IPlatformProvider): pb.PlatformProvider;

        /**
         * Encodes the specified PlatformProvider message. Does not implicitly {@link pb.PlatformProvider.verify|verify} messages.
         * @param message PlatformProvider message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlatformProvider, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlatformProvider message, length delimited. Does not implicitly {@link pb.PlatformProvider.verify|verify} messages.
         * @param message PlatformProvider message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPlatformProvider, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlatformProvider message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlatformProvider
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlatformProvider;

        /**
         * Decodes a PlatformProvider message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlatformProvider
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PlatformProvider;

        /**
         * Verifies a PlatformProvider message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlatformProvider message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlatformProvider
         */
        public static fromObject(object: { [k: string]: any }): pb.PlatformProvider;

        /**
         * Creates a plain object from a PlatformProvider message. Also converts values to other types if specified.
         * @param message PlatformProvider
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PlatformProvider, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlatformProvider to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlatformProviderAPIPath. */
    interface IPlatformProviderAPIPath {

        /** PlatformProviderAPIPath oauthAccessToken */
        oauthAccessToken?: (string|null);

        /** PlatformProviderAPIPath playerTokenValidate */
        playerTokenValidate?: (string|null);

        /** PlatformProviderAPIPath playerInfo */
        playerInfo?: (string|null);

        /** PlatformProviderAPIPath playerBetPlace */
        playerBetPlace?: (string|null);

        /** PlatformProviderAPIPath playerBetSettle */
        playerBetSettle?: (string|null);

        /** PlatformProviderAPIPath playerTransactionLock */
        playerTransactionLock?: (string|null);

        /** PlatformProviderAPIPath playerTransactionCancel */
        playerTransactionCancel?: (string|null);
    }

    /** Represents a PlatformProviderAPIPath. */
    class PlatformProviderAPIPath implements IPlatformProviderAPIPath {

        /**
         * Constructs a new PlatformProviderAPIPath.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlatformProviderAPIPath);

        /** PlatformProviderAPIPath oauthAccessToken. */
        public oauthAccessToken: string;

        /** PlatformProviderAPIPath playerTokenValidate. */
        public playerTokenValidate: string;

        /** PlatformProviderAPIPath playerInfo. */
        public playerInfo: string;

        /** PlatformProviderAPIPath playerBetPlace. */
        public playerBetPlace: string;

        /** PlatformProviderAPIPath playerBetSettle. */
        public playerBetSettle: string;

        /** PlatformProviderAPIPath playerTransactionLock. */
        public playerTransactionLock: string;

        /** PlatformProviderAPIPath playerTransactionCancel. */
        public playerTransactionCancel: string;

        /**
         * Creates a new PlatformProviderAPIPath instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlatformProviderAPIPath instance
         */
        public static create(properties?: pb.IPlatformProviderAPIPath): pb.PlatformProviderAPIPath;

        /**
         * Encodes the specified PlatformProviderAPIPath message. Does not implicitly {@link pb.PlatformProviderAPIPath.verify|verify} messages.
         * @param message PlatformProviderAPIPath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlatformProviderAPIPath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlatformProviderAPIPath message, length delimited. Does not implicitly {@link pb.PlatformProviderAPIPath.verify|verify} messages.
         * @param message PlatformProviderAPIPath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPlatformProviderAPIPath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlatformProviderAPIPath message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlatformProviderAPIPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlatformProviderAPIPath;

        /**
         * Decodes a PlatformProviderAPIPath message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlatformProviderAPIPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PlatformProviderAPIPath;

        /**
         * Verifies a PlatformProviderAPIPath message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlatformProviderAPIPath message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlatformProviderAPIPath
         */
        public static fromObject(object: { [k: string]: any }): pb.PlatformProviderAPIPath;

        /**
         * Creates a plain object from a PlatformProviderAPIPath message. Also converts values to other types if specified.
         * @param message PlatformProviderAPIPath
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PlatformProviderAPIPath, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlatformProviderAPIPath to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlatformLog. */
    interface IPlatformLog {

        /** PlatformLog transactionId */
        transactionId?: (string|null);

        /** PlatformLog playerSn */
        playerSn?: (number|Long|null);

        /** PlatformLog playerId */
        playerId?: (string|null);

        /** PlatformLog playerName */
        playerName?: (string|null);

        /** PlatformLog playerIdAtPlatform */
        playerIdAtPlatform?: (string|null);

        /** PlatformLog platform */
        platform?: (string|null);

        /** PlatformLog action */
        action?: (number|Long|null);

        /** PlatformLog credit */
        credit?: (number|Long|null);

        /** PlatformLog currency */
        currency?: (string|null);

        /** PlatformLog amount */
        amount?: (number|null);

        /** PlatformLog balance */
        balance?: (number|null);

        /** PlatformLog status */
        status?: (number|Long|null);

        /** PlatformLog errorMsg */
        errorMsg?: (string|null);

        /** PlatformLog createdTime */
        createdTime?: (number|Long|null);
    }

    /** Represents a PlatformLog. */
    class PlatformLog implements IPlatformLog {

        /**
         * Constructs a new PlatformLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlatformLog);

        /** PlatformLog transactionId. */
        public transactionId: string;

        /** PlatformLog playerSn. */
        public playerSn: (number|Long);

        /** PlatformLog playerId. */
        public playerId: string;

        /** PlatformLog playerName. */
        public playerName: string;

        /** PlatformLog playerIdAtPlatform. */
        public playerIdAtPlatform: string;

        /** PlatformLog platform. */
        public platform: string;

        /** PlatformLog action. */
        public action: (number|Long);

        /** PlatformLog credit. */
        public credit: (number|Long);

        /** PlatformLog currency. */
        public currency: string;

        /** PlatformLog amount. */
        public amount: number;

        /** PlatformLog balance. */
        public balance: number;

        /** PlatformLog status. */
        public status: (number|Long);

        /** PlatformLog errorMsg. */
        public errorMsg: string;

        /** PlatformLog createdTime. */
        public createdTime: (number|Long);

        /**
         * Creates a new PlatformLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlatformLog instance
         */
        public static create(properties?: pb.IPlatformLog): pb.PlatformLog;

        /**
         * Encodes the specified PlatformLog message. Does not implicitly {@link pb.PlatformLog.verify|verify} messages.
         * @param message PlatformLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlatformLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlatformLog message, length delimited. Does not implicitly {@link pb.PlatformLog.verify|verify} messages.
         * @param message PlatformLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPlatformLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlatformLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlatformLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlatformLog;

        /**
         * Decodes a PlatformLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlatformLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PlatformLog;

        /**
         * Verifies a PlatformLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlatformLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlatformLog
         */
        public static fromObject(object: { [k: string]: any }): pb.PlatformLog;

        /**
         * Creates a plain object from a PlatformLog message. Also converts values to other types if specified.
         * @param message PlatformLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PlatformLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlatformLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player id */
        id?: (string|null);

        /** Player sn */
        sn?: (number|Long|null);

        /** Player name */
        name?: (string|null);

        /** Player displayName */
        displayName?: (string|null);

        /** Player platform */
        platform?: (string|null);

        /** Player credit */
        credit?: (number|Long|null);

        /** Player balance */
        balance?: (number|null);

        /** Player currency */
        currency?: (string|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayer);

        /** Player id. */
        public id: string;

        /** Player sn. */
        public sn: (number|Long);

        /** Player name. */
        public name: string;

        /** Player displayName. */
        public displayName: string;

        /** Player platform. */
        public platform: string;

        /** Player credit. */
        public credit: (number|Long);

        /** Player balance. */
        public balance: number;

        /** Player currency. */
        public currency: string;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: pb.IPlayer): pb.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link pb.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link pb.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): pb.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RequestCommand enum. */
    enum RequestCommand {
        RC_NONE = 0,
        RC_ERROR = 1001,
        RC_SERVER_INFO = 10001,
        RC_SERVER_INFO_MAP_BY_NAME = 10002,
        RC_PLAYER_INFO = 20001,
        RC_PLAYER_DECK_INFO = 20002,
        RC_ROOM_INFO = 30001,
        RC_ROOM_INFO_MAP_BY_ID = 30002,
        RC_ROOM_JOIN = 30003,
        RC_ROOM_EXTEND_TIMEOUT_WAIT_FOR_PLAYER_DECK = 30004
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request command */
        command?: (pb.RequestCommand|null);

        /** Request data */
        data?: (Uint8Array|null);

        /** Request timestamp */
        timestamp?: (number|Long|null);

        /** Request error */
        error?: (pb.IError|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRequest);

        /** Request command. */
        public command: pb.RequestCommand;

        /** Request data. */
        public data: Uint8Array;

        /** Request timestamp. */
        public timestamp: (number|Long);

        /** Request error. */
        public error?: (pb.IError|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: pb.IRequest): pb.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link pb.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link pb.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): pb.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RuntimeLogType enum. */
    enum RuntimeLogType {
        RLT_NONE = 0,
        RLT_INFO = 1,
        RLT_WARNING = 2,
        RLT_ERROR = 3
    }

    /** Properties of a RuntimeLog. */
    interface IRuntimeLog {

        /** RuntimeLog type */
        type?: (number|Long|null);

        /** RuntimeLog file */
        file?: (string|null);

        /** RuntimeLog line */
        line?: (number|Long|null);

        /** RuntimeLog message */
        message?: (string|null);

        /** RuntimeLog time */
        time?: (number|Long|null);

        /** RuntimeLog serverInfo */
        serverInfo?: (pb.IServerInfo|null);
    }

    /** Represents a RuntimeLog. */
    class RuntimeLog implements IRuntimeLog {

        /**
         * Constructs a new RuntimeLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRuntimeLog);

        /** RuntimeLog type. */
        public type: (number|Long);

        /** RuntimeLog file. */
        public file: string;

        /** RuntimeLog line. */
        public line: (number|Long);

        /** RuntimeLog message. */
        public message: string;

        /** RuntimeLog time. */
        public time: (number|Long);

        /** RuntimeLog serverInfo. */
        public serverInfo?: (pb.IServerInfo|null);

        /**
         * Creates a new RuntimeLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RuntimeLog instance
         */
        public static create(properties?: pb.IRuntimeLog): pb.RuntimeLog;

        /**
         * Encodes the specified RuntimeLog message. Does not implicitly {@link pb.RuntimeLog.verify|verify} messages.
         * @param message RuntimeLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRuntimeLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RuntimeLog message, length delimited. Does not implicitly {@link pb.RuntimeLog.verify|verify} messages.
         * @param message RuntimeLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRuntimeLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RuntimeLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RuntimeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RuntimeLog;

        /**
         * Decodes a RuntimeLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RuntimeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RuntimeLog;

        /**
         * Verifies a RuntimeLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RuntimeLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RuntimeLog
         */
        public static fromObject(object: { [k: string]: any }): pb.RuntimeLog;

        /**
         * Creates a plain object from a RuntimeLog message. Also converts values to other types if specified.
         * @param message RuntimeLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RuntimeLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RuntimeLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ServerType enum. */
    enum ServerType {
        ST_NONE = 0,
        ST_GATEWAY = 1,
        ST_GAME = 2,
        ST_FLUENTD = 3
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo name */
        name?: (string|null);

        /** ServerInfo host */
        host?: (string|null);

        /** ServerInfo port */
        port?: (number|Long|null);

        /** ServerInfo serverInfoRoutePath */
        serverInfoRoutePath?: (string|null);

        /** ServerInfo websocketProtocol */
        websocketProtocol?: (string|null);

        /** ServerInfo websocketRoutePath */
        websocketRoutePath?: (string|null);

        /** ServerInfo group */
        group?: (string|null);

        /** ServerInfo concurrentPlayer */
        concurrentPlayer?: (number|Long|null);

        /** ServerInfo jackpot */
        jackpot?: (number|null);

        /** ServerInfo isOffline */
        isOffline?: (boolean|null);

        /** ServerInfo type */
        type?: (pb.ServerType|null);

        /** ServerInfo protocol */
        protocol?: (string|null);

        /** ServerInfo hostForClient */
        hostForClient?: (string|null);

        /** ServerInfo portForClient */
        portForClient?: (number|Long|null);

        /** ServerInfo websocketProtocolForClient */
        websocketProtocolForClient?: (string|null);

        /** ServerInfo WebsocketRoutePathForClient */
        WebsocketRoutePathForClient?: (string|null);

        /** ServerInfo PublicIPAddress */
        PublicIPAddress?: (string|null);

        /** ServerInfo GameType */
        GameType?: (pb.game.GameType|null);

        /** ServerInfo LastRequestTime */
        LastRequestTime?: (number|Long|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IServerInfo);

        /** ServerInfo name. */
        public name: string;

        /** ServerInfo host. */
        public host: string;

        /** ServerInfo port. */
        public port: (number|Long);

        /** ServerInfo serverInfoRoutePath. */
        public serverInfoRoutePath: string;

        /** ServerInfo websocketProtocol. */
        public websocketProtocol: string;

        /** ServerInfo websocketRoutePath. */
        public websocketRoutePath: string;

        /** ServerInfo group. */
        public group: string;

        /** ServerInfo concurrentPlayer. */
        public concurrentPlayer: (number|Long);

        /** ServerInfo jackpot. */
        public jackpot: number;

        /** ServerInfo isOffline. */
        public isOffline: boolean;

        /** ServerInfo type. */
        public type: pb.ServerType;

        /** ServerInfo protocol. */
        public protocol: string;

        /** ServerInfo hostForClient. */
        public hostForClient: string;

        /** ServerInfo portForClient. */
        public portForClient: (number|Long);

        /** ServerInfo websocketProtocolForClient. */
        public websocketProtocolForClient: string;

        /** ServerInfo WebsocketRoutePathForClient. */
        public WebsocketRoutePathForClient: string;

        /** ServerInfo PublicIPAddress. */
        public PublicIPAddress: string;

        /** ServerInfo GameType. */
        public GameType: pb.game.GameType;

        /** ServerInfo LastRequestTime. */
        public LastRequestTime: (number|Long);

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfo instance
         */
        public static create(properties?: pb.IServerInfo): pb.ServerInfo;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link pb.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link pb.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ServerInfo;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ServerInfo;

        /**
         * Verifies a ServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.ServerInfo;

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @param message ServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfoList. */
    interface IServerInfoList {

        /** ServerInfoList Data */
        Data?: (pb.IServerInfo[]|null);
    }

    /** Represents a ServerInfoList. */
    class ServerInfoList implements IServerInfoList {

        /**
         * Constructs a new ServerInfoList.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IServerInfoList);

        /** ServerInfoList Data. */
        public Data: pb.IServerInfo[];

        /**
         * Creates a new ServerInfoList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfoList instance
         */
        public static create(properties?: pb.IServerInfoList): pb.ServerInfoList;

        /**
         * Encodes the specified ServerInfoList message. Does not implicitly {@link pb.ServerInfoList.verify|verify} messages.
         * @param message ServerInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IServerInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfoList message, length delimited. Does not implicitly {@link pb.ServerInfoList.verify|verify} messages.
         * @param message ServerInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IServerInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfoList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ServerInfoList;

        /**
         * Decodes a ServerInfoList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ServerInfoList;

        /**
         * Verifies a ServerInfoList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfoList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfoList
         */
        public static fromObject(object: { [k: string]: any }): pb.ServerInfoList;

        /**
         * Creates a plain object from a ServerInfoList message. Also converts values to other types if specified.
         * @param message ServerInfoList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ServerInfoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfoList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfoMapByName. */
    interface IServerInfoMapByName {

        /** ServerInfoMapByName Data */
        Data?: ({ [k: string]: pb.IServerInfo }|null);
    }

    /** Represents a ServerInfoMapByName. */
    class ServerInfoMapByName implements IServerInfoMapByName {

        /**
         * Constructs a new ServerInfoMapByName.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IServerInfoMapByName);

        /** ServerInfoMapByName Data. */
        public Data: { [k: string]: pb.IServerInfo };

        /**
         * Creates a new ServerInfoMapByName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfoMapByName instance
         */
        public static create(properties?: pb.IServerInfoMapByName): pb.ServerInfoMapByName;

        /**
         * Encodes the specified ServerInfoMapByName message. Does not implicitly {@link pb.ServerInfoMapByName.verify|verify} messages.
         * @param message ServerInfoMapByName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IServerInfoMapByName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfoMapByName message, length delimited. Does not implicitly {@link pb.ServerInfoMapByName.verify|verify} messages.
         * @param message ServerInfoMapByName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IServerInfoMapByName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfoMapByName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfoMapByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ServerInfoMapByName;

        /**
         * Decodes a ServerInfoMapByName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfoMapByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ServerInfoMapByName;

        /**
         * Verifies a ServerInfoMapByName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfoMapByName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfoMapByName
         */
        public static fromObject(object: { [k: string]: any }): pb.ServerInfoMapByName;

        /**
         * Creates a plain object from a ServerInfoMapByName message. Also converts values to other types if specified.
         * @param message ServerInfoMapByName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ServerInfoMapByName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfoMapByName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfoMapByType. */
    interface IServerInfoMapByType {

        /** ServerInfoMapByType Data */
        Data?: ({ [k: string]: pb.IServerInfoMapByName }|null);
    }

    /** Represents a ServerInfoMapByType. */
    class ServerInfoMapByType implements IServerInfoMapByType {

        /**
         * Constructs a new ServerInfoMapByType.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IServerInfoMapByType);

        /** ServerInfoMapByType Data. */
        public Data: { [k: string]: pb.IServerInfoMapByName };

        /**
         * Creates a new ServerInfoMapByType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfoMapByType instance
         */
        public static create(properties?: pb.IServerInfoMapByType): pb.ServerInfoMapByType;

        /**
         * Encodes the specified ServerInfoMapByType message. Does not implicitly {@link pb.ServerInfoMapByType.verify|verify} messages.
         * @param message ServerInfoMapByType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IServerInfoMapByType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfoMapByType message, length delimited. Does not implicitly {@link pb.ServerInfoMapByType.verify|verify} messages.
         * @param message ServerInfoMapByType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IServerInfoMapByType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfoMapByType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfoMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ServerInfoMapByType;

        /**
         * Decodes a ServerInfoMapByType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfoMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ServerInfoMapByType;

        /**
         * Verifies a ServerInfoMapByType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfoMapByType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfoMapByType
         */
        public static fromObject(object: { [k: string]: any }): pb.ServerInfoMapByType;

        /**
         * Creates a plain object from a ServerInfoMapByType message. Also converts values to other types if specified.
         * @param message ServerInfoMapByType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ServerInfoMapByType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfoMapByType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerInfoListMapByType. */
    interface IServerInfoListMapByType {

        /** ServerInfoListMapByType Data */
        Data?: ({ [k: string]: pb.IServerInfoList }|null);
    }

    /** Represents a ServerInfoListMapByType. */
    class ServerInfoListMapByType implements IServerInfoListMapByType {

        /**
         * Constructs a new ServerInfoListMapByType.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IServerInfoListMapByType);

        /** ServerInfoListMapByType Data. */
        public Data: { [k: string]: pb.IServerInfoList };

        /**
         * Creates a new ServerInfoListMapByType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfoListMapByType instance
         */
        public static create(properties?: pb.IServerInfoListMapByType): pb.ServerInfoListMapByType;

        /**
         * Encodes the specified ServerInfoListMapByType message. Does not implicitly {@link pb.ServerInfoListMapByType.verify|verify} messages.
         * @param message ServerInfoListMapByType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IServerInfoListMapByType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfoListMapByType message, length delimited. Does not implicitly {@link pb.ServerInfoListMapByType.verify|verify} messages.
         * @param message ServerInfoListMapByType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IServerInfoListMapByType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfoListMapByType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfoListMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ServerInfoListMapByType;

        /**
         * Decodes a ServerInfoListMapByType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfoListMapByType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ServerInfoListMapByType;

        /**
         * Verifies a ServerInfoListMapByType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfoListMapByType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfoListMapByType
         */
        public static fromObject(object: { [k: string]: any }): pb.ServerInfoListMapByType;

        /**
         * Creates a plain object from a ServerInfoListMapByType message. Also converts values to other types if specified.
         * @param message ServerInfoListMapByType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ServerInfoListMapByType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfoListMapByType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** StoreDriver enum. */
    enum StoreDriver {
        SD_NONE = 0,
        SD_DATABASE = 1
    }

    /** Properties of a StoreConnection. */
    interface IStoreConnection {

        /** StoreConnection driver */
        driver?: (pb.StoreDriver|null);

        /** StoreConnection host */
        host?: (string|null);

        /** StoreConnection port */
        port?: (number|Long|null);

        /** StoreConnection user */
        user?: (string|null);

        /** StoreConnection password */
        password?: (string|null);

        /** StoreConnection schema */
        schema?: (string|null);

        /** StoreConnection schemaGame */
        schemaGame?: (string|null);

        /** StoreConnection maxConnection */
        maxConnection?: (number|Long|null);
    }

    /** Represents a StoreConnection. */
    class StoreConnection implements IStoreConnection {

        /**
         * Constructs a new StoreConnection.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IStoreConnection);

        /** StoreConnection driver. */
        public driver: pb.StoreDriver;

        /** StoreConnection host. */
        public host: string;

        /** StoreConnection port. */
        public port: (number|Long);

        /** StoreConnection user. */
        public user: string;

        /** StoreConnection password. */
        public password: string;

        /** StoreConnection schema. */
        public schema: string;

        /** StoreConnection schemaGame. */
        public schemaGame: string;

        /** StoreConnection maxConnection. */
        public maxConnection: (number|Long);

        /**
         * Creates a new StoreConnection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StoreConnection instance
         */
        public static create(properties?: pb.IStoreConnection): pb.StoreConnection;

        /**
         * Encodes the specified StoreConnection message. Does not implicitly {@link pb.StoreConnection.verify|verify} messages.
         * @param message StoreConnection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IStoreConnection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StoreConnection message, length delimited. Does not implicitly {@link pb.StoreConnection.verify|verify} messages.
         * @param message StoreConnection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IStoreConnection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StoreConnection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StoreConnection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.StoreConnection;

        /**
         * Decodes a StoreConnection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StoreConnection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.StoreConnection;

        /**
         * Verifies a StoreConnection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StoreConnection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StoreConnection
         */
        public static fromObject(object: { [k: string]: any }): pb.StoreConnection;

        /**
         * Creates a plain object from a StoreConnection message. Also converts values to other types if specified.
         * @param message StoreConnection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.StoreConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StoreConnection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
