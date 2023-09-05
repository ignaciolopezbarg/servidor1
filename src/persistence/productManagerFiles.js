import fs from "fs";

export class ProductManagerFiles{
    constructor(path){
        this.pathFile = path;
    };
    fileExist(){
        return fs.existsSync(this.pathFile);
    }

   async getProducts(){
    try{
if(this.fileExist ()){
    const contenidoString = await fs.promises.readFile(this.pathFile,"utf-8");
    const products= JSON.parse(contenidoString);
    return products;
} else{
    throw new Error ("no se pudieron obtener los productos");
}
    }catch(error){
throw error;
    }
   };
}