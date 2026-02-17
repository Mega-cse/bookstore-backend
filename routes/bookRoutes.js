const express = require("express");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const controller = require("../controllers/bookController");

const router = express.Router();

router.get("/", controller.getBooks);
router.get("/:id", controller.getBookById);
router.post("/", auth, admin, controller.createBook);
router.put("/:id", auth, admin, controller.updateBook);
router.delete("/:id", auth, admin, controller.deleteBook);

module.exports = router;
