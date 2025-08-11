const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes'); 

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api', dataRoutes); 

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
