const bookModel = require('../models/bookModel');

module.exports = {
  getBooks: (req, res) => {
    const books = bookModel.getAllBooks();
    res.render('books', { books });
  },

  addBook: (req, res) => {
    const { titulo, autor, ano } = req.body; // Use os nomes corretos aqui
    bookModel.addBook({ titulo, autor, ano }); // Adicione o livro usando os nomes corretos
    res.redirect('/books');
  },

  deleteBook: (req, res) => {
    const bookId = req.params.id;
    bookModel.deleteBook(bookId);
    res.redirect('/books');
  }
};
