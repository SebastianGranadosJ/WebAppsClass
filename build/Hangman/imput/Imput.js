"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("readline/promises");
const node_process_1 = require("node:process");
class Imput {
}
_a = Imput;
Imput.prompt = async (message) => {
    const rl = (0, promises_1.createInterface)({ input: node_process_1.stdin, output: node_process_1.stdout });
    const answer = await rl.question(message);
    rl.close();
    return answer;
};
exports.default = Imput;
