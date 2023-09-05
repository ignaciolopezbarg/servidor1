export class ProductManagerMemory{
    constructor(){
        this.products =[];
    };
    
    get Products(){
    try{
        if(this.fileExist()){
            const contenidoString = awaitfs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(contenidoString);
            return products;
        }else{
            throw newError("no se pueden obtener los productos");
        }
    }catch (error){
            throw (error);
        }

    }  
   
};