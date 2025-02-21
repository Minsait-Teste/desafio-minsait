Desafio Minsait

Como rodar o servidor

1. Clonar o repositório

git clone https://github.com/Minsait-Teste/desafio-minsait.git

2. Instalar as dependências

Acesse a pasta do projeto e execute:

npm install

3. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

PORT=5000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/teste?schema=public
JWT_SECRET_KEY=minha_chave_secreta

PORT: Defina como 5000.

JWT_SECRET_KEY: Defina qualquer string segura.

DATABASE_URL: Utilize o formato indicado acima.

4. Criar o banco de dados para testes

Suba um banco de dados local usando Docker Compose:

docker compose up -d

5. Gerar o cliente Prisma para conexão com o banco

npx prisma generate

6. Iniciar o servidor

npm run dev

Se tudo estiver correto, a seguinte mensagem aparecerá no terminal:

Server is listening on port 5000.

Como acessar a documentação Swagger

Abra o navegador e acesse:

http://localhost:5000/api-docs/

O Swagger contém todas as rotas da aplicação para facilitar os testes.

Autenticação

Antes de testar os endpoints protegidos, gere um token utilizando a rota /auth. O token deve ser incluído no cabeçalho (Authorization: Bearer <token>).

Testando a aplicação pelo terminal

Caso prefira não usar o Swagger, utilize os comandos curl abaixo para interagir com a API.

Observação: Para testar no ambiente de produção (EC2 AWS), substitua localhost pelo IP público da instância informado no e-mail.

Autenticação - Gerar Token (POST /auth)

curl -X POST http://localhost:5000/auth \
     -H "Content-Type: application/json" \
     -d '{"username": "admin", "password": "123456"}'

Criar uma tarefa (POST /tasks)

curl -X POST http://localhost:5000/tasks \
     -H "Authorization: Bearer <token>" \
     -H "Content-Type: application/json" \
     -d '{"title": "Task 1", "description": "Tarefa 1", "status": "PENDENTE"}'

Listar todas as tarefas (GET /tasks)

curl -X GET http://localhost:5000/tasks \
     -H "Authorization: Bearer <token>"

Buscar uma tarefa específica (GET /tasks/:id)

curl -X GET http://localhost:5000/tasks/id \
     -H "Authorization: Bearer <token>"

Atualizar uma tarefa (PUT /tasks/:id)

curl -X PUT http://localhost:5000/tasks/id \
     -H "Authorization: Bearer <token>" \
     -H "Content-Type: application/json" \
     -d '{"title": "Novo Título", "description": "Nova descrição", "status": "PENDENTE"}'

Excluir uma tarefa (DELETE /tasks/:id)

curl -X DELETE http://localhost:5000/tasks/id \
     -H "Authorization: Bearer <token>"

