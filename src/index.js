const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //To make express understand the json in the request
app.use(routes);

app.listen(3334);

/*
> Métodos HTTP:
- GET: Buscar informações do back-end
- POST: Criar uma informação no backend (user por exemplo)
- PUT: Alterar uma informação no backend
- DELETE: Deletar uma informação do backend

> Tipos de parâmetros:
- Query: parâmetros nomeados enviados na rota após o símbolo de '?'(Filtros,paginação) - req.query
- Route params: parâmetros usados para identificar recursos - req.params e usar /:parâmetro
- Request body: "É o que sobra" - corpo da requisição utilizado para criar ou alterar recursos
*/

/*
> The request retores all the information that the user requested
> The response is the answer that we will give for the request
*/
/*
> SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
> NoSQL: MongoDB, CouchDB, etc
*/




