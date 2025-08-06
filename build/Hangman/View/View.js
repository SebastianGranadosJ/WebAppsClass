"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    static showWelcome() {
        console.log("------------ BIENVENIDO AL AHORCADO ------------");
        console.log("Adivina la palabra relacionada con JavaScript, ingresa una letra que creas que contenga la palabra. Si crees que ya sabes cual es la palabra ingresala.");
        console.log("Solo tienes tres vidas.");
    }
    static showBoard(board) {
        console.log();
        console.log();
        let line = "   ";
        for (let ii = 0; ii < board.length; ii++) {
            line += board[ii] + "   ";
        }
        console.log(line);
        console.log();
        console.log();
    }
    static showLose() {
        console.log("PERDISTE JAJAJAJAJAJJA");
    }
    static showWin() {
        console.log("GANASTE CHAVAAAAAAAAAAAAAL");
    }
    static showLives(lives) {
        console.log("Te quedan la siguientes vidas: ", lives);
    }
    static showAssertMessage() {
        console.log("ASERTASTE QUE PROOOO");
    }
    static showMistakeMessage() {
        console.log("JAJAJAJAJ TE EQUIVOCASTE");
    }
    static showHangman(lives) {
        const stages = [
            `
            +---+
            |   |
            O   |
           /|\\  |
           / \\  |
                ===`,
            `
            +---+
            |   |
            O   |
           /|\\  |
                |
                ===`,
            `
            +---+
            |   |
            O   |
            |   |
                |
                ===`,
            `
            +---+
            |   |
                |
                |
                |
                ===`
        ];
        // Limitar vidas entre 0 y 3
        console.log(stages[lives]);
    }
}
exports.default = View;
