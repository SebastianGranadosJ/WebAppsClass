
import ProductsDataBase from "../../../database/products.json"
import JsonManager from "../util/JsonManager"
import ProductInterface from "./types/ProductInterface"

import { promises as fs } from 'fs'
import path from 'path'

export default class ProductModel{
    readonly retrieveProductImageById = async (id: string): Promise<string> => {
        const file = `${id}.jpg`
        const absolutePath = path.join(__dirname, `../../../assets/img/`)
        const defaultImage = 'not-icon.png'
        try {
        await fs.access(absolutePath + file, fs.constants.F_OK)
        const stats = await fs.stat(absolutePath + file)
        if (stats.isFile()) {
            return absolutePath + file
        }
        console.log(absolutePath)
        return absolutePath + defaultImage
        } catch (err) {
        console.error('Image not found, returning default image:', err)
        return absolutePath + defaultImage
        }
  }


    readonly retrieveProducts = (): Promise<ProductInterface[]>=>{
        // Reject devolver la exepcion, Resolve devolver un valor
        return new Promise((resolve) =>{
            try{
                const products = ProductsDataBase as ProductInterface[]
                resolve(products)
            }catch(error){
                console.error("Error retrineving products: ", error)
                resolve([])
            }
        })
    }


    readonly addProduct = (product: ProductInterface): Promise<boolean>=>{
        // Reject devolver la exepcion, Resolve devolver un valor
        return new Promise((resolve) =>{
            try{
                const result = JsonManager.appendToJsonArrayFile("./database/products.json",product);
                
                resolve(result)
            }catch(error){
                console.error("Error retrineving products: ", error)
                resolve(false)
            }
        })
    }


    readonly retrieveProductsById = async (
        id:string
    ): Promise<ProductInterface>=>{
        // Reject devolver la exepcion, Resolve devolver un valor
        // No creo una nueva promesa
        try{
            const productList = await this.retrieveProducts();
            const product = productList.find(p => p.id.toString() == id)
            if(!product){
                return NullProduct ;
            }else{
                return product
            }
                
            }catch(error){
                console.error("Error retrineving products: ", error)
                return NullProduct
            }
      
    }

    readonly retrieveDiscountProducts = async (
        discount: boolean
    ): Promise<ProductInterface[]>=>{
        // Reject devolver la exepcion, Resolve devolver un valor
        // No creo una nueva promesa
        try{
            const productList = await this.retrieveProducts();
            const products = productList.filter(p => p.discount == discount )
            if(!products){
                return [] ;
            }else{
                return products
            }
                
            }catch(error){
                console.error("Error retrieving products: ", error)
                return []
            }
      
    }

    readonly retrieveDiscountProductsPriceRange = async (
        min: number,
        max: number,
        discount:boolean
    ): Promise<ProductInterface[]>=>{
        // Reject devolver la exepcion, Resolve devolver un valor
        // No creo una nueva promesa
        try{
            const productsList = await this.retrieveDiscountProducts(discount);
            const products = productsList.filter(p => p.price < max && min < p.price)
            if(!products){
                return [] ;
            }else{
                return products
            }
                
            }catch(error){
                console.error("Error retrieving products: ", error)
                return []
            }
      
    }


} 

export const NullProduct: ProductInterface = {
    id:0,
    title: "NotFound",
    amount: "NotFound",
    price:0,
    description:"NotFound",
    favorite: false,
    discount:false,
    discountPer: 0,
    discountUni: "NotFound"


}