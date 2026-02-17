const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));


module.exports = app; // ✅ correct
