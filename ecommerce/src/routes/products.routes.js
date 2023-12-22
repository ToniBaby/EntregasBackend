import { Router } from "express";
import  productsModel  from "../dao/models/product.model.js";
import { uploader } from "../utils.js";

const router = Router();

router.get("/", async (req, res) => {
    //conectar a la base
    const products = await productsModel.find();
   res.send({
       status: "success",
       message: products

   })

})
router.get("/:pid", async (req, res) => {
    
    const id = req.params.pid;

    const product = await productsModel.find({_id:id});
    
    res.send({
        status: "success",
        message: product

    })

})
router.get("/:pid", async (req, res) => {

    const id = req.params.pid;

    const product = await productsModel.find({_id:id});
    
    res.send({
        status: "success",
        message: product

    })

})
router.post("/", uploader.single("thumbnail"), async (req, res) => {

    const {title, description, code, price, stock, category} = req.body; 

    const filename = req.file.filename;



    if(!title || ! description || !code || !price  || !stock|| !category || !filename){
        return res.status(400).send({
            status: "error",
            message: "Valores incompletos"

        })
    }
    const product ={
        title,
        description,
        code,
        price,
        stock,
        category,
        thumbnail: `http://localhost:8080/images/${filename}`
    }

    const result = await productsModel.create(product);
    
    res.send({
        status: "success",
        message: result

    })

})
router.delete("/:pid", async (req, res) => {

    const id = req.params.pid;
    const result = await productsModel.deleteOne({_id:id});

    
    res.send({
        status: "success",
        message: result

    })

})
router.put("/:pid", async (req, res) => {

    const id = req.params.pid;

    const {title, description, code, price,  stock, category} = req.body; 

    const updateproduct = {
        title,
        description,
        code,
        price,
        stock,
        category
    }
    const result = await productsModel.updateOne({_id:id}, {$set:updateproduct});
    
    res.send({
        status: "success",
        message: result

    })

})


export default router;