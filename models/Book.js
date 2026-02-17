const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    genre: String,
    stock: { type: Number, default: 0 },
    isbn: String,            // ✅ use lowercase (consistent with frontend)
    description: String,
    imageUrl: String         // ✅ image field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
