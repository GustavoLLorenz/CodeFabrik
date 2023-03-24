CodeFabrik
Repositorio feito para codefabrik

Bem vindo ao banco digital FabriBank!

Esse o backend desse projeto foi desenvolvido com nodeJS, typeorm e typescript.O Front será desenvolvido usando ReactJs.

A nossa API (monolito por questão de tempo), conta com tres tabelas, user , carteira e transações e estão estruturadas da seguinte forma:

Table user: id | user_name | password | cnpj | created_at | updated_at | deleted_at

aonde id é a PK da tabela, e uma FK para tabela carteira.

Table carteira: id | user_id | saldo | created_at | updated_at | deleted_at

aonde id é a PK da tabela, e user_id é FK da tabela user

Table transacao

id | carteira_id | tipo | valor_transacao | created_at | updated_at | deleted_at

aonde id é a PK da tabela, e carteira_id é a FK da tabela carteira

Funcionalidades Atualmente a nossa API conta com as seguintes funções e suas respectivas rotas:

1.cria um usuário http://localhost:3000/user POST com o corpo da requisição {"user_name": "fulano de tal", "cpf_cnpj": "123.456.789-123", password: "nominimoseiscaracteres"}

2.acha todos usuários http://localhost:3000/user GET

3.acha por cpf/cnj http://localhost:3000/user/findByCpf GET com o corpo da requisição { "cpf_cnpj": "123.456.789-123"}

4.deleta por cpf/cnpj http://localhost:3000/user/deleteByCpf PATCH com o corpo da requisição { "cpf_cnpj": "123.456.789-123"}

5.acha todas carteiras http://localhost:3000/wallet GET 6.cria uma transacao http://localhost:3000/wallet/createTransaction/:id POST onde o :id é o id da carteira e o corpo da requisição {"tipo": "entrada" | "tipo": "saida" , "valor_transacao": "55"}

para rodar o projeto , na raiz utilize o comando docker-compose -d (para criar um banco postgres)

e o arquivo .env é TYPEORM_CONNECTION = postgres TYPEORM_HOST = localhost TYPEORM_USERNAME = root TYPEORM_PASSWORD = admin TYPEORM_DATABASE = fabrik TYPEORM_PORT = 5432 TYPEORM_MIGRATIONS = src/database/migrations/.ts TYPEORM_MIGRATIONS_DIR = src/database/migrations TYPEORM_ENTITIES = src/entity/.ts TYPEORM_ENTITIES_DIR = src/entity

Qualquer feedback é bem vindo \O/ !