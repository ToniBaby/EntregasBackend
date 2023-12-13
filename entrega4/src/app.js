import express from 'express';
import { engine } from 'express-handlebars';
import { Server } from 'socket.io';

import __direname from "./utils.js";
import { cartRouter } from './routes/carts.routes.js';
import { productRouter } from './routes/products.routes.js';



const PORT = 8080;
const app = express();
const httpserver = app.listen(PORT, ()=> console.log(`Server en el puerto ${PORT}`));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", __direname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRouter(socketServer));
app.get('/realtimeproducts', (req, res) => {
   
    res.render('realTimeProducts'); 
  });


const socketServer = new Server(httpserver);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static(__direname + "views"));




let productos = [];


socketServer.on("connection", socket => {
    console.log('Nuevo cliente conectado');


    socket.on("addProduct", productData => {
        productos.push(productData); 
        socketServer.emit("updateProductList", productos); 
    });

   
    socket.on("deleteProduct", productId => {
        const index = productos.findIndex(product => product.id === productId);
        if (index !== -1) {
            productos.splice(index, 1); 
            socketServer.emit("updateProductList", productos); 
        }
    });


});


// Rutas
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

