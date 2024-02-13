import express from "express";
import BookController from "../controllers/book.js";

const router = express.Router();

router.post("/books", BookController.createBook);
router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBookByID);
router.put("/books/:id", BookController.updateBook);
router.delete("/books/:id", BookController.deleteBook);

export default router;
