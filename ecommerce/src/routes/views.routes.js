import { Router } from "express";
import productsModel from "../dao/models/product.model.js";

const router = Router();

router.get("/", (req,res)=>{
    res.render("register")

})
router.get("/productos", async (req,res)=>{

    const products = await productsModel.find().lean();

    res.render("products" , {products, isAdmin:true})


})

export default router ;