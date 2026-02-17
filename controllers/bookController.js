const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  const { page = 1, keyword = "" } = req.query;

  const books = await Book.find({
    title: { $regex: keyword, $options: "i" }
  })
    .limit(10)
    .skip((page - 1) * 10);

  res.json(books);
};

exports.getBookById = async (req, res) => {
  res.json(await Book.findById(req.params.id));
};

exports.createBook = async (req, res) => {
  res.status(201).json(await Book.create(req.body));
};

exports.updateBook = async (req, res) => {
  res.json(await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }));
};

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};
