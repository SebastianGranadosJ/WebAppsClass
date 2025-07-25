"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    constructor() {
        this.words = ["interface", "type", "enum", "extends", "implements", "readonly", "namespace", "abstract",
            "declare", "as"];
    }
    getRandomWord() {
        const index = Math.floor(Math.random() * this.words.length);
        return this.words[index];
    }
}
exports.default = Dictionary;
