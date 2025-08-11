# CommandApp

**CommandApp** é um sistema simples de gerenciamento de pedidos, desenvolvido como minha primeira oportunidade como desenvolvedor. Ele conta com um **frontend** desenvolvido em **React** e um **backend** utilizando **Node.js** com **Express**. O sistema permite salvar, visualizar e gerenciar pedidos de uma maneira simples e eficiente.

## Objetivos do Projeto

O objetivo principal deste projeto é proporcionar uma plataforma fácil e eficiente para gerenciar pedidos em uma aplicação web, com funcionalidades simples e intuitivas. 

- **Frontend**: Utiliza o React para criar uma interface de usuário dinâmica.
- **Backend**: Utiliza o Node.js e o Express para fornecer uma API para salvar e gerenciar pedidos.
- **Armazenamento**: A aplicação usa um banco de dados simples para armazenar os pedidos e suas informações.

## Funcionalidades

- Adicionar novos pedidos ao sistema.
- Visualizar pedidos existentes.
- Edição e remoção de pedidos.
- Interface simples e intuitiva para o usuário.

## Pré-requisitos

Antes de começar, você precisa ter os seguintes itens instalados na sua máquina:

- [Node.js](https://nodejs.org/) (inclui o npm)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de código de sua preferência.

## Como Rodar o Projeto

1. **Clone o repositório**:

   No terminal, vá até o diretório onde deseja salvar o projeto e execute:

   ```bash
   git clone https://github.com/MarcusDev7/CommandApp.git
   cd CommandApp
Instale as dependências do cliente e servidor:

O projeto tem duas pastas principais: client (frontend) e server (backend).

No terminal, dentro da pasta client, execute:

bash
Copiar
Editar
cd client
npm install
Depois, vá para a pasta server e execute:

bash
Copiar
Editar
cd ../server
npm install
Configure as variáveis de ambiente (caso necessário):

Caso o seu projeto precise de variáveis de ambiente (como uma chave de banco de dados ou credenciais de API), crie um arquivo .env em ambos os diretórios (client e server) e adicione as variáveis necessárias. Um exemplo de configuração para o backend seria:

env
Copiar
Editar
DB_URI=mongodb://localhost:27017/commandapp
Inicie o servidor e o cliente:

Agora, inicie o backend (servidor) na pasta server:

bash
Copiar
Editar
cd ../server
npm start
E, em seguida, inicie o frontend (cliente) na pasta client:

bash
Copiar
Editar
cd ../client
npm start
Isso deve abrir o cliente no seu navegador, normalmente em http://localhost:3000.

Acesse a aplicação:

A aplicação estará rodando localmente, e você pode acessar a interface do usuário no seu navegador e testar as funcionalidades de pedidos.

Como Contribuir
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/MarcusDev7/CommandApp.git
Crie uma branch para suas mudanças:

bash
Copiar
Editar
git checkout -b nome-da-sua-branch
Faça suas alterações.

Adicione e faça o commit das suas alterações:

bash
Copiar
Editar
git add .
git commit -m "Mensagem explicativa"
Envie as alterações para o repositório remoto:

bash
Copiar
Editar
git push origin nome-da-sua-branch
Crie um Pull Request no GitHub.

Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

Esse projeto foi desenvolvido por Marcus Vinícius.
