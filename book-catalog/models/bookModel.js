let books = []; // Armazena os livros em um array

module.exports = {
  getAllBooks: () => books, // Retorna todos os livros

  addBook: (book) => books.push(book), // Adiciona um novo livro ao array

  deleteBook: (index) => books.splice(index, 1) // Remove um livro pelo índice
};
