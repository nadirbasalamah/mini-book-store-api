import { Book } from "../models/book.js";

export default class BookRepository {
  static async createBook(newBook) {
    try {
      const book = await Book.create(newBook);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  static async getBooks() {
    try {
      const books = await Book.find({});
      return books;
    } catch (error) {
      console.log(error);
    }
  }

  static async getBookByID(id) {
    try {
      const book = await Book.findById(id);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBook(book, id) {
    try {
      await Book.findByIdAndUpdate(id, book);

      const updatedBook = this.getBookByID(id);

      return updatedBook;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteBook(id) {
    try {
      const result = await Book.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
