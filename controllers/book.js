import BookService from "../services/book.js";

export default class BookController {
  static async createBook(request, response) {
    try {
      const isInvalid =
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear;

      if (isInvalid) {
        return response.status(400).send({
          message: "Send all required fields",
        });
      }

      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };

      const book = await BookService.createBook(newBook);

      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: "create book failed" });
    }
  }

  static async getBooks(request, response) {
    try {
      const books = await BookService.getBooks();

      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: "get all books failed" });
    }
  }

  static async getBookByID(request, response) {
    try {
      const { id } = request.params;

      const book = await BookService.getBookByID(id);

      if (!book) {
        return response.status(404).json({ message: "book not found" });
      }

      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: "get book failed" });
    }
  }

  static async updateBook(request, response) {
    try {
      const isInvalid =
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear;

      if (isInvalid) {
        return response.status(400).send({
          message: "Send all required fields",
        });
      }

      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };

      const { id } = request.params;

      const book = await BookService.updateBook(newBook, id);

      if (!book) {
        return response.status(404).json({ message: "book not found" });
      }

      return response.status(200).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: "update book failed" });
    }
  }

  static async deleteBook(request, response) {
    try {
      const { id } = request.params;

      const result = await BookService.deleteBook(id);

      if (!result) {
        return response.status(404).json({ message: "book not found" });
      }

      return response.status(200).json({ message: "book deleted" });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: "delete book failed" });
    }
  }
}
