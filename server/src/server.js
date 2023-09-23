const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const data = require('../../encuesta.json')
console.log(data.items)

server.use(morgan("dev"));
server.use(express.urlencoded({extended:false}))
server.use(express.json());
server.use(cors());
server.use('/',router);

module.exports = server;
