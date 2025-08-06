"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductView {
    productController;
    router;
    // Lo mismo que definirlo arriba
    constructor(productController) {
        this.productController = productController;
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes = () => {
        this.router.get("/", (_req, res) => {
            this.productController.getProducts;
        });
    };
}
exports.default = ProductView;
