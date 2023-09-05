import express from "express";
import { ProductManagerFiles } from "./persistence/productManagerFiles.js";
console.log(ProductManagerFiles);
const managerProductService = new ProductManagerFiles("./src/files/products.json");
console.log("managerProductService");
//asignacion del puerto
const port = 8080;
// a la variable app le asignamos las funcionalidades de express
const app = express();
//creamos el servidor, y con el callback me indicara si el servidor se esta ejecutando
app.listen (port,()=>console.log("servidor funcionando"));

//ruta para mostrar todos los productos
//app.get("/products", async (req,res)=>{
 //   try{
   //     const products = await managerProductService.getProducts();
      //  res.send(products);
   // }catch(error) {
//res.send(error.message)
 //   }
//} );

//ruta donde usuario indica cantidad de productos que quiere visualizar:|
app.get("/products", async (req,res)=>{
    try{
        const {limit}=req.query;
        const limitNumber = parseInt(limit);
        const products = await managerProductService.getProducts();
        if(limit){
            const productsLimit = products.slice(0,limitNumber);
            res.send(productsLimit);
        } else {
            res.send(products);
        }
    }catch(error){
        res.send(error.message);
    }
});
//si no le paso el query param entrega los 10 productos.