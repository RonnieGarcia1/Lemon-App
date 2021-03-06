//Dependencies
const express = require("express");
const cors = require("cors");

//Controllers go here -->
const cartsController = require("./controllers/cartsController.js");
const customersController = require("./controllers/customersController.js");
const authController = require("./controllers/authController.js");
const restaurantsController = require("./controllers/restaurantsController.js");
const productsController = require("./controllers/productsController.js");

// Configuration
const app = express();

//Middleware
app.use(cors());

//Parse incoming JSON
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome");
});


//app.use goes here -->
app.use("/carts", cartsController);
app.use("/customers", customersController);
app.use("/auth", authController);
app.use("/restaurants", restaurantsController);
app.use("/products", productsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//Export
module.exports = app;