const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
//app.use("/api/orders", require("./routes/orderRoutes"));

module.exports = app;
