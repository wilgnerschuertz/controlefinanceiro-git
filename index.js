
const express = require('express');
const cors = require('cors');
const app = express();


// Configurando CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Middleware
app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('✅ Servidor rodando em http://localhost:3000');
});
