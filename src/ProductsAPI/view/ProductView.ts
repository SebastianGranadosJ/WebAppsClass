import { Router } from "express";
import ProductController from "../controller/ProductController";

export default class ProductView{
    router: Router 
    // Lo mismo que definirlo arriba
    constructor(private readonly productController: ProductController){
        this.router = Router();
        this.routes()
    }

    readonly routes= (): void => {
        //  this.router.get("/products/discount-price/q", this.productController.getDiscountProductsByRange)
        this.router.get("/products/discount-price/q", this.productController.getDiscountProductsByRange)
        this.router.get("/products/image/:id", this.productController.getProductImageById)
        this.router.get("/products/:id", this.productController.getProductById)
        this.router.get("/products",this.productController.getProducts) // recurso
        this.router.post("/products",this.productController.createProduct) // recurso
        
       
    }
       
}