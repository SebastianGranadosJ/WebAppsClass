import express, {Application} from "express";
import ProductView from "../view/ProductView";

export default class Server{

    private readonly app: Application;


    constructor(private readonly productView: ProductView){
        this.app = express(); // Factory
        this.configure();
        this.routes() ;
    }

    readonly configure = (): void =>{
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
    }

    readonly routes = ():void => {
        this.app.use("/shop", this.productView.router) // PAth
    }

    // 
    readonly start = ():void => {
        this.app.listen(1802, () => {
            console.log("Server is running on port 1802")
        })
    }

}