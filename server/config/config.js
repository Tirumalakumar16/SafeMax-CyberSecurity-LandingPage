
const mongoose = require('mongoose')

async function connectDb () {
    try {
        return await mongoose.connect('mongodb://127.0.0.1:27017/safemax')
    } catch (error) {
        
        console.log("Error while connecting to database : ",error);
    }
}


module.exports = {
    connectDb,
};