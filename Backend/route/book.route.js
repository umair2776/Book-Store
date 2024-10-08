const express = require("express");
const controller = require("../controllers/book.controller");
const router = express.Router();

// Define the route and controller action
router.get("/", controller.index);

// Export the router
module.exports = router;
