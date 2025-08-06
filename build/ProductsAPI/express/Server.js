"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    productView;
    app;
    constructor(productView) {
        this.productView = productView;
        this.app = (0, express_1.default)(); // Factory
        this.routes();
    }
    routes = () => {
        this.app.use("/", this.productView.router); // PAth
    };
    // 
    start = () => {
        this.app.listen(1802, () => {
            console.log("Server is running on port 1802");
        });
    };
}
exports.default = Server;
