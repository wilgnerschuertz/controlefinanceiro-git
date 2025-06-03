
const express = require('express');
const cors = require('cors');
const app = express();

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
