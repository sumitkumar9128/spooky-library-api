const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const podcast = require("./src/routes/podcast")
const book = require("./src/routes/bookRoutes")
const conn = require("./src/config/conn")

const app = express();
const PORT = process.env.PORT || 5000;

const middleware = (req, res, next) => {
    req.customData = {
        message: "To kaise ho dosto 👋",
        timestamp: new Date().toLocaleString(),
        userId: Math.floor(Math.random() * 1000) 
    };
    next();
}

app.use(express.json())
app.use(middleware);

app.get("/", (req, res) => {
    res.send(`
        <h1>${req.customData.message}</h1>
        <p>Request received at: ${req.customData.timestamp}</p>
        <p>Your User ID: ${req.customData.userId}</p>
    `)
})
conn();
app.use("/api/book", book)
app.use("/api/podcast", podcast)


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
