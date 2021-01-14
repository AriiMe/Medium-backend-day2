const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const articleRouter = require("./medium");
const authorRoute = require("./authors");

const server = express();
const port = process.env.PORT || 3001


server.use(cors());
server.use(express.json());
server.use("/medium", articleRouter)
server.use("/authors", authorRoute);


mongoose
    .connect(process.env.MONGO_ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        server.listen(port, () => {
            console.log("The server is running on port: ", port);
        })
    );