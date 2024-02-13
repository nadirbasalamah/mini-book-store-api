import BookRepository from "../repositories/book.js";

export default class BookService {
  static async createBook(newBook) {
    return await BookRepository.createBook(newBook);
  }

  static async getBooks() {
    return await BookRepository.getBooks();
  }

  static async getBookByID(id) {
    return await BookRepository.getBookByID(id);
  }

  static async updateBook(book, id) {
    return await BookRepository.updateBook(book, id);
  }

  static async deleteBook(id) {
    return await BookRepository.deleteBook(id);
  }
}
