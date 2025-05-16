const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("./api/auth", authRoutes);
app.use("./api/products", productRoutes);

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=> console.log("Server is running on PORT ${PORT}"));