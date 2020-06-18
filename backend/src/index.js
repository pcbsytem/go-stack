const express = require('express');

const app = express();

/** 
 * Tipos parâmetros
 * 
 * Query Params - usado em paginação e filtros
 * 
 * Parameter - usado update e delete
 * 
 * Body - usado na criação de item
**/

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1'
  ]);
})

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1'
  ]);
});

app.listen(3333, () => {
  console.log('😎 Backend started 🙌!');
});

