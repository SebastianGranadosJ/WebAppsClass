"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = __importDefault(require("./controller/ProductController"));
const Server_1 = __importDefault(require("./express/Server"));
const ProductView_1 = __importDefault(require("./view/ProductView"));
const productController = new ProductController_1.default();
const productView = new ProductView_1.default(productController);
const server = new Server_1.default(productView);
server.start();
