
import { Request, Response } from "express"
import ProductModel from "../model/ProductModel"
import ProductInterface from "../model/types/ProductInterface";

export default class ProductController{
    readonly  getProductImageById = async ( req:Request, res:Response): Promise<void> =>{

        const id = req.params["id"];

        if(!id){
            res.status(403).json({message: "Invalid product ID"})
            return;
        }


        const path = await this.productModel.retrieveProductImageById(id);

        if(!path){
            res.status(204). json({message: "No products found"})
        }
        res.status(200).sendFile(path)

    }


    constructor(private readonly productModel:ProductModel){}

    readonly  getProducts = async ( _req:Request, res:Response): Promise<void> =>{
        const productList = await this.productModel.retrieveProducts();
        if(!productList){
            res.status(204). json({message: "No products found"})
        }
        res.status(200).json(productList)

    }
    
   readonly  getProductById = async ( req:Request, res:Response): Promise<void> =>{
        const id = req.params["id"];

        if(!id){
            res.status(403).json({message: "Invalid product ID"})
            return;
        }

        const product = await this.productModel.retrieveProductsById(id)
        

        if(!product){
            res.status(204). json({message: "No product found"})
            return;
        }

        res.status(200).json(product)

    }

    readonly  getDiscountProductsByRange = async ( req:Request, res:Response): Promise<void> =>{
        

        try{
            let minNum = 0;
            let maxNum = 0;
            let discountFilter = false;

            const minQ = req.query["min"];
            const maxQ = req.query["max"];
            const discountQ =  req.query["dis"];

            if(!minQ ){
                res.status(403).json({message: "Invalid product minimal price"})
                return;
            }else{
                minNum = parseInt(minQ.toString());
            }

            if(!maxQ ){
                res.status(403).json({message: "Invalid product maximal price"})
                return;
            }else{
                maxNum = parseInt(maxQ.toString());
            }

            if(!discountQ ){
                res.status(403).json({message: "Invalid product discount price"})
                return;
            }else{
                discountFilter = discountQ.toString().toLowerCase() === "true";
            }

            const product = await this.productModel.retrieveDiscountProductsPriceRange(minNum, maxNum,discountFilter)
            

            if(!product){
                res.status(204). json({message: "No products found"})
                return;
            }

            res.status(200).json(product)


        }catch(error){
            res.status(403).json({message: "Invalid produc range"})
        }




    }
    
    readonly  createProduct = async ( req:Request, res:Response): Promise<void> =>{
        const product = req.body as ProductInterface;
        if(!product){
            res.status(403). json({message: "Formato incorrecto del producto"});
            return;
        }
        const result = await this.productModel.addProduct(product);
        if(!result){
            console.log("no se pudo escribir")
            res.status(204). json({message: "No fue posible crear el producto."});        
            return;
        }
        

        res.status(200).json(product)

    }


}