"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Board {
    _board;
    _blankSpaces;
    constructor(lengthBoard) {
        this._board = [];
        this.fillBoard(lengthBoard);
        this._blankSpaces = lengthBoard;
    }
    setAtPosition(position, letter) {
        if (letter != "_") {
            this._blankSpaces--;
        }
        this._board[position] = letter;
    }
    get board() {
        return this._board;
    }
    isFull() {
        if (this._blankSpaces == 0) {
            return true;
        }
        return false;
    }
    fillBoard(lengthBoard) {
        for (let ii = 0; ii < lengthBoard; ii++) {
            this._board.push("_");
        }
    }
}
exports.default = Board;
