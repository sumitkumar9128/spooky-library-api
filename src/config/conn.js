const mongoose = require("mongoose")


const connectedDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected successfuly")
    }catch(error){
        console.error("db not connected", error.message)
        process.exit(1)
    }
}

module.exports = connectedDb;