import mongoose from "mongoose";


const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al modelo de usuario si es aplicable
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product' // Referencia al modelo de producto si es aplicable
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    totalPrice: {
        type: Number,
        default: 0
    }
});

    

 const cartsModel = mongoose.model(cartsCollection,cartsSchema);

 export default cartsModel;