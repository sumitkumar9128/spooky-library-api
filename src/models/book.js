const mongoose = require("mongoose")

const booksStore = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author: String,
    genre:{
        type: String,
        enum:["horror", "thriller"],
        default: "horror"
    },
    publishedYear: Number
})

const Books = mongoose.model("Books", booksStore);
module.exports = Books