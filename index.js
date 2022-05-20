const express = require('express');
require('dotenv').config();

// teste para as actions

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send(`<h1> Executando na porta: ${PORT} </h1>`));

app.listen(PORT, () => console.log(`Online: ${PORT}`));
