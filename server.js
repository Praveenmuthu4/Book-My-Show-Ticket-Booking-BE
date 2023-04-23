const express = require("express");
const server = express();
const dotenv = require("dotenv");
const app = require("./app");
require("./config/db");

dotenv.config();

server.use("/", app);

const PORT = process.env.PORT;

server.listen(PORT,()=>{
    console.log(`server start at port no : ${PORT}`);
})