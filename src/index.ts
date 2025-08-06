import ProductController from "./ProductsAPI/controller/ProductController";
import Server from "./ProductsAPI/express/Server";
import ProductModel from "./ProductsAPI/model/ProductModel";
import ProductView from "./ProductsAPI/view/ProductView";

const productModel = new ProductModel()
const productController = new ProductController(productModel);
const productView = new ProductView(productController)


const server = new Server(productView);
server.start();