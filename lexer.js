// @flow

export class Lexer {
  at: number;
  line: number;
  col: number;
  ch: string | null;
  input: string;
  constructor(input: string = '') {
    this.input = input;
    this.at = 0;
    this.line = 1;
    this.col = 0;
    this.ch = null;
  }
  readChar() {
    var ch = this.input.charAt(this.at);
    if (this.at < this.input.length) {
      this.at++;
    }
    if (this.ch === '\n') {
      this.line++;
      this.col = 0;
    } else {
      this.col++;
    }
    this.ch = ch;
  }
  peekChar() {
    return this.input.charAt(this.at);
  }
  isEOF() {
    return this.peekChar() === '';
  }
  nextToken() {
    const ch = this.peekChar();
    switch (ch) {
      // TODO
    }
  }
}
