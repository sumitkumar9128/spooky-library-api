const mongoose = require("mongoose")

const podcastCollect = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    host: String,
    episodes: Number,
    genre:{
        type:String,
        enum:["horror"],
        default: "horror"
    }
})

module.exports = mongoose.model("Pod", podcastCollect)