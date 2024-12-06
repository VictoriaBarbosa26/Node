const express = require('express'); // Importa o módulo Express
const bodyParser = require('body-parser'); // Importa o body-parser para manipulação de requisições
const bookRoutes = require('./routes/bookRoutes'); // Importa as rotas do livro
const path = require('path'); // Importa o módulo path para manipulação de caminhos

const app = express(); // Cria uma instância do aplicativo Express
const port = 3000; // Define a porta do servidor

app.set('view engine', 'ejs'); // Configura o EJS como motor de visualização
app.use(bodyParser.urlencoded({ extended: true })); // Configura o body-parser para analisar dados de formulários

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public'))); // Define o diretório para arquivos estáticos

app.use('/books', bookRoutes); // Usa as rotas de livros para o caminho '/books'

app.get('/', (req, res) => { // Redireciona a raiz para '/books'
  res.redirect('/books'); 
});

app.listen(port, () => { // Inicia o servidor na porta definida
  console.log(`Servidor rodando em http://localhost:${port}`); // Log no console com a URL do servidor
});
