# Desafio Minsait

## Como rodar o servidor
1. Clonar o repositório
```bash
git clone https://github.com/Minsait-Teste/desafio-minsait.git
```
2. Ao entrar na pasta do projeto, instalar as dependências
```bash
npm i
```
3. Criar um arquivo .env na raíz do projeto com os seguintes campos
```bash
PORT=
DATABASE_URL=
```
4. No campo PORT, colocar 5000, no campo JWT_SECRET_KEY, colocar qualque string, e o database seguir o seguinte exemplo:
```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/teste?schema=public
```

5. Criar um banco de dados para teste com o docker compose
```bash
docker compose up -d
```

6. Gerar a migração com o prisma
```bash
npx prisma migrate dev
```
6. Gerar os modelos/interfaces com o prisma (recomenda-se dar um reload window depois de rodar esse comando)
```bash
npx prisma generate
```
7. Rodar o back-end
```bash
npm run dev
```

A seguinte mensagem de sucesso deve aparecer: Server is listening on port 5000.

## Como abrir o swagger para testar as rotas
1. Abra o terminal com a seguinte url:

```bash
http://localhost:5000/api-docs/
```
## Endpoints utilizados no projeto

1. Rota de geração de token:
```bash
POST ("/auth")

Formato do Body:
{
  "username": "admin",
  "password": "123456"
}

O username e o password devem conter esses valores para retornar o token.

Todas as rotas só funcionam usando esse token para autenticação

Formato do Header: Authorization: Bearer Token

```

2. Rota de criação de tasks:
```bash
POST ("/tasks")

Formato do Body:
{
  "title": "Task 3",
  "description": "Tarefa 3",
  "status": "PENDENTE"
}

Nenhum campo pode estar vazio, e o campo status só aceita os valores PENDENTE e CONCLUIDA.
```
3. Rota de busca de tasks:
```bash
GET ("/tasks")
```
4. Rota de busca de task por id:
```bash
GET ("/tasks:id")
```

5. Rota de apagar uma task:
```bash
DELETE ("/tasks/:id")

Caso seja inserido um id inválido, a aplicação devolve um erro.
```
6. Rota de atualizar uma task:
```bash
PUT ("/tasks/:id")

Formato do Body:
{
  "title": "Task 3",
  "description": "Tarefa 3",
  "status": "PENDENTE"
}
A rota aceita campos vazios
Caso seja inserido um id inválido, a aplicação devolve um erro.
```



