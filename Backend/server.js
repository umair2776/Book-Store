const express = require("express");
const dotenv = require("dotenv");
const bookRoute = require("./route/book.route.js"); // Import the router
const userRoute = require("./route/user.route.js"); // Import the router

const connectdb = require("./config/db");
const cors=require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 1000;

// Connect to the database
connectdb();


app.use(cors());
app.use(express.json())

// Use the router middleware for `/book` routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.use(cors());
app.use(express.json())

// Define a simple route
app.get('/', (req, res) => {
    res.json({ success: true, message: "Welcome to the express", status: 200 });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
