import express  from "express";
import mongoose from "mongoose";
import {engine} from "express-handlebars";

import __dirname from "./utils.js";
import productRoutes from "./routes/products.routes.js"
import viewRoutes from "./routes/views.routes.js"


const PORT = 8080;
const app = express();

const MONGO = "mongodb+srv://ToniBaby:Locoloco22@cluster0.zz4vor2.mongodb.net/Ecommerce";
 
const connection = mongoose.connect(MONGO);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const httpServer = app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})




app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views")
app.use(express.static(`${__dirname}/public`));

app.use("/api/products", productRoutes);
app.use("/", viewRoutes);