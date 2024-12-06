const express = require('express'); // Importa o Express
const router = express.Router(); // Cria um novo roteador
const bookController = require('../controllers/bookController'); // Importa o controlador de livros

router.get('/', bookController.getBooks); // Rota para obter todos os livros
router.post('/add', bookController.addBook); // Rota para adicionar um novo livro
router.post('/delete/:id', bookController.deleteBook); // Rota para deletar um livro pelo ID

module.exports = router; // Exporta o roteador
