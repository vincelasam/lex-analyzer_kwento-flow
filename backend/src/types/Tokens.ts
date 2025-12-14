// tokens.ts

export interface Token {
  type: TokenType;
  lexeme: string;
  line: number;
  column: number;
}

export enum TokenType {
  // ===== Basic =====
  Identifier,        // identifier (e.g., sceneName, character_1)
  NumberLiteral,     // 123, 45
  TextLiteral,       // "Hello world"
  BooleanLiteral,    // true | false

  // ===== Keywords =====
  Scene,             // scene
  Start,             // start
  Story,             // story
  Character,         // character
  Transition,        // transition
  Thru,              // thru
  When,              // when
  Do,                // do
  End,               // end
  Input,             // input
  Rem,               // rem
  Perceives,         // perceives
  Masking,           // masking
  Says,              // says
  Log,               // log
  Choose,            // choose
  Default,           // default

  // ===== Reserved Data Types =====
  Text,              // text
  Boolean,           // boolean
  Number,            // number

  // ===== Noise Words =====
  To,                // to
  Is,                // is
  Then,              // then

  // ===== Operators =====
  Plus,              // +
  Minus,             // -
  Asterisk,          // *
  Slash,             // /
  Modulo,            // %
  Caret,             // ^
  EqualTo,           // ==
  NotEqual,          // !=
  Less,              // <
  LessEqual,         // <=
  Greater,           // >
  GreaterEqual,      // >=
  LogicalAnd,        // &&
  LogicalOr,         // ||
  LogicalNot,        // !

  // ===== Delimiters =====
  LParen,            // (
  RParen,            // )
  LBrace,            // {
  RBrace,            // }
  LBracket,          // [
  RBracket,          // ]
  Colon,             // :
  Semicolon,         // ;
  Comma,             // ,
  Dot,               // .
  DoubleQuote,       // "
  SingleQuote,       // '

  // ===== Comments =====
  SingleLineComment, // ~~ comment until newline
  MultiLineComment,  // ~ comment block ~

  // ===== Whitespace =====
  NewLine,           // \n

  // ===== End of File =====
  EOF                // end of input
}

export const KEYWORDS: Record<string, TokenType> = {
  "scene": TokenType.Scene,
  "story": TokenType.Story,
  "start": TokenType.Start,
  "character": TokenType.Character,
  "transition": TokenType.Transition,
  "thru": TokenType.Thru,
  "when": TokenType.When,
  "do": TokenType.Do,
  "end": TokenType.End,
  "input": TokenType.Input,
  "says": TokenType.Says,
  "log": TokenType.Log,
  "rem": TokenType.Rem,
  "perceives": TokenType.Perceives,
  "masking": TokenType.Masking,
  "choose": TokenType.Choose,
  "default": TokenType.Default,
  "text": TokenType.Text,
  "boolean": TokenType.Boolean,
  "number": TokenType.Number,
  "to": TokenType.To,
  "is": TokenType.Is,
  "then": TokenType.Then,
};
