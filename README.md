# nlw-heat
 Code made during NLW Heat

## Node

> Dependências

- Express (Rotas e API mais limpa de request e response)
- Typescript (Superset de JS para tipagem estática)
- ts-node-dev (Rodar a aplicação, integrado com typescript, fazer o reload automático do app)

> Inicializando Typescript

- ```yarn tsc --init``` gera o tsconfig.json
- ```strict: false``` para tipagem não estrita

> Criando scripts

- ```ts-node-dev src/app.ts``` para rodar o servidor. Node sozinho não entende TS, ts-node-dev compila o código para JS e executa.

> Configurando Prisma

- ```yarn add prisma -D```
- ```yarn prisma init```

> Configurando Github OAuth

- Criar nova aplicação em https://github.com/settings/developers
- Salvar CLIENT_ID e CLIENT_SECRET no arquivo .env

> Criando a pasta services

- Esta pasta servirá para realizar as chamadas à APIs externas por meio do axios

> Instalando Axios

- Para uma maneira de realizar as chamadas à api

> Criando Controllers

- Controllers são as funções que realizam os processos de acordo com a rota chamada. Ex: a rota ```/cadastrar-usuario``` registrada em nosso router chama a função (controller) ```criarNovoUsuario``` em nosso código.

> Fluxo da aplicação

- Acessar rota ```/github```
- Receber o ```code``` do Github na callback ```/signin/callback```
- Chamar a rota ```/authenticate``` com o ```code``` no body
- Receber o ```access_token``` e requisitar dados do usuário

- Objetivo: Conseguir as informações do usuário pelo token.

> Migrations

- Histórico de tudo aquilo que está sendo realizado no banco de dados

> Conexão com banco de dados

- Em ```src/prisma``` se faz a conexão com o banco de dados, criando uma nova instância do PrismaClient e a exportando.
- Para realizar queries no DB agora é só importar a instância do PrismaClient

> JsonWebToken

- Função ```sign```
- Primeiro parâmetro: Payload (informações do usuário)
- Segundo parâmetro: Secret para validar se o token é válido
- Terceiro parâmetro: Id do usuário

> Sobrescrever tipagens do Express

- Criando uma pasta ```@types/express``` e adicionando um index.d.ts, conseguimos adicionar tipagens às já existentes do Express.

> Criar um middleware de autorização

- Basicamente o que este middleware faz é dizer: "Se está cadastrado, continue e leve o Id do usuário na requisição. Se não, retorne um erro."

> Terminada a parte de cadastramento de mensagens

> Criação de WebSockets com Socket.IO

- ```app.ts``` separado do servidor, que agora está em ```server.ts``` para organização
- ```index.html``` criado para servir de 'fake front-end' para testar a conexão do socket

> Relação dos controllers com rotas e serviços

- Rota chama o controller apropriado
- Controller chama o service
- Service busca informação no banco de dados e retorna
- Controller devolve o resultado do cálculo do service á api como JSON