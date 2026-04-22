# API de Avaliações — Pizza da Toca

API RESTful desenvolvida para gerenciar avaliações de clientes da **Pizza da Toca**, permitindo o cadastro, consulta, edição e remoção de feedbacks com sistema de classificação por estrelas.

Este projeto foi criado com foco em organização, boas práticas e escalabilidade, podendo ser facilmente integrado a aplicações web e mobile.

---

## Stack Tecnológica

* **Node.js** — ambiente de execução
* **Express** — framework para APIs
* **MongoDB** — banco de dados NoSQL
* **Mongoose** — modelagem e validação de dados

---

## Execução

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm start
```

A API estará disponível em:

```
http://localhost:3000/api/avaliacoes
```
---

## Endpoints

### Listar todas as avaliações

```http
GET /api/avaliacoes
```
---

### Buscar uma avaliação por ID

```http
GET /api/avaliacoes/:id
```

---

### Criar nova avaliação

```http
POST /api/avaliacoes
```

####  Body (JSON)

```json
{
  "nome": "Caio",
  "titulo": "Pizza perfeita",
  "descricao": "Massa leve, recheio generoso e entrega rápida",
  "estrelas": 5,
  "happenedAt": "2026-04-20T20:00"
}
```

---

### Atualizar avaliação

```http
PUT /api/avaliacoes/:id
```

---

### Remover avaliação

```http
DELETE /api/avaliacoes/:id
```

---

## Modelo de Dados

```json
{
  "nome": "string",
  "titulo": "string",
  "descricao": "string",
  "estrelas": "number (1 a 5)",
  "happenedAt": "date"
}
```

### Regras de Validação

* `nome`: obrigatório
* `titulo`: obrigatório
* `descricao`: obrigatório
* `estrelas`: obrigatório (mínimo 1, máximo 5)
* `happenedAt`: obrigatório

---

## Estrutura do Projeto

```
src/
 ├── controllers/   # Regras de negócio
 ├── models/        # Schemas do Mongoose
 ├── routes/        # Definição das rotas
 └── server.js         # Configuração principal
```

---

## Funcionalidades

* CRUD completo de avaliações
* Sistema de classificação por estrelas
* Consulta individual por ID
* Validação de dados com Mongoose
* Atualização de registros
* Exclusão de avaliações

---

## Autor

Desenvolvido por **Caio Sabino Coelho**

---

## Licença

Este projeto está sob a licença MIT.

---

## Sobre o Projeto

Este backend faz parte de um sistema de avaliações para uma pizzaria real, com foco em experiência do cliente e tomada de decisão baseada em feedbacks.

---
