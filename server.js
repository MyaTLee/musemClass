const express = require("express");
const server = express();
const router = require("./router");
const PORT = 3000;

server.set("view engine", "ejs");

server.use("/", router);

server.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})