import mongoose from "mongoose";


const messagesCollection = "messages";

const messagesSchema = new mongoose.Schema({

    
})
 const messagesModel = mongoose.model(messagesCollection,messagesSchema);

 export default messagesModel;