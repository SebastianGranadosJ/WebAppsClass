"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Board_js_1 = __importDefault(require("../Board/Board.js"));
const Dictionary_js_1 = __importDefault(require("../Dictionary/Dictionary.js"));
const View_js_1 = __importDefault(require("../View/View.js"));
const Imput_js_1 = __importDefault(require("../../Imput/Imput.js"));
class GameAdmin {
    constructor() {
        this.dictionary = new Dictionary_js_1.default();
        this.word = this.dictionary.getRandomWord();
        this.board = new Board_js_1.default(this.word.length);
        this.gameFinished = false;
        this.lives = 3;
        this.alreadyUsedLetters = [];
    }
    async startGame() {
        View_js_1.default.showWelcome();
        while (!this.gameFinished) {
            View_js_1.default.showHangman(this.lives);
            View_js_1.default.showBoard(this.board.board);
            await this.doAction();
        }
    }
    async doAction() {
        let choose = await Imput_js_1.default.prompt("Ingresa 1 si quieres probar un caracter, Ingresa 2 si quieres ingresar la palabra completa: ");
        switch (choose) {
            case "1":
                if (await this.setLetter()) {
                    View_js_1.default.showAssertMessage();
                    if (this.board.isFull()) {
                        this.gameFinished = true;
                        View_js_1.default.showWin();
                    }
                }
                else {
                    View_js_1.default.showMistakeMessage();
                    this.lives--;
                    View_js_1.default.showLives(this.lives);
                    this.checkLoseGame();
                }
                break;
            case "2":
                let wordImput = await Imput_js_1.default.prompt("Ingresa la palabra que crees que es: ");
                if (this.checkWord(wordImput)) {
                    View_js_1.default.showAssertMessage();
                    View_js_1.default.showWin();
                }
                else {
                    View_js_1.default.showLose();
                    View_js_1.default.showHangman(this.lives);
                }
                this.gameFinished = true;
                break;
            default:
                console.log("Ingrese un valor valido.");
        }
    }
    checkWord(word) {
        if (word == this.word) {
            return true;
        }
        return false;
    }
    checkLoseGame() {
        if (this.lives == 0) {
            View_js_1.default.showLose();
            View_js_1.default.showHangman(this.lives);
            this.gameFinished = true;
        }
    }
    async setLetter() {
        let choose = await Imput_js_1.default.prompt("Ingrese la letra que desea probar: ");
        if (this.alreadyUsedLetters.includes(choose))
            return false;
        let positions = this.findWordPositions(this.word, choose);
        if (positions.length == 0) {
            return false;
        }
        this.alreadyUsedLetters.push(choose);
        for (let position of positions) {
            this.board.setAtPosition(position, choose);
        }
        return true;
    }
    findWordPositions(word, char) {
        const positions = [];
        for (let i = 0; i < word.length; i++) {
            if (word[i] === char) {
                positions.push(i);
            }
        }
        return positions;
    }
}
exports.default = GameAdmin;
