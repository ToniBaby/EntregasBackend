// index.js - enviar datos al servidor a través de WebSocket
const socket = io();

const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("product-title").value;
    const price = document.getElementById("product-price").value;

   
    socket.emit("addProduct", { title, price });
});
