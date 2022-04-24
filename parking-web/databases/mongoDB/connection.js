const mongoose = require('mongoose');

module.exports = {
    connectMongoDB: async () => {
        try{
           await mongoose.connect("mongodb+srv://DSG7Admin:YVs0EpNVFEpHeZMU@cluster0.73mya.mongodb.net/DSG7?retryWrites=true&w=majority", {
               autoIndex: true
           });
            console.log('MongoDB connection established');
        }catch(err){
            console.error(err);
        }
        
    }
}