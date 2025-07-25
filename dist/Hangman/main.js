"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameAdmin_js_1 = __importDefault(require("./GameAdmin/GameAdmin.js"));
let gameAdmin = new GameAdmin_js_1.default();
gameAdmin.startGame();
