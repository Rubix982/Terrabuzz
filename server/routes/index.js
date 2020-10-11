let express = require("express");
let Router = express.Router();
let indexContoller = require("../controllers/index.js");

Router.get("/", indexContoller.getHomePage);

module.exports = Router;
