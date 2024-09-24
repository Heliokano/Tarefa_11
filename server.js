const express = require('express');
const path = require('path');
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');

const app = express();
const PORT = 5000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usando as rotas
app.use(homeRoute);
app.use(aboutRoute);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});