import mongoose from "mongoose";


const productsCollection = "products";

const productsSchema = new mongoose.Schema({
    title: String,
    description: String,
    code: String,
    price: Number,
    stock: Number,
    category: String,
    thumbnail: String
    
})
 const productsModel = mongoose.model(productsCollection,productsSchema);

 export default productsModel;