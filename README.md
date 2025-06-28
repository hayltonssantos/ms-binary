# 🤖 MHI Trading Bot by Ms Binary Elite

Site oficial para cadastro e download do robô de trading automatizado MHI Trading Bot.

## 🚀 Funcionalidades

- ✅ Sistema de cadastro e login de usuários
- ✅ Gerenciamento de licenças com Firebase
- ✅ Dashboard com status VIP e dias restantes
- ✅ Sistema de códigos promocionais
- ✅ Download seguro da aplicação
- ✅ Design responsivo e moderno
- ✅ Integração com dois Firebase (Auth + Licenças)

## 🛠️ Tecnologias

- **Frontend**: React 18, React Router, Sass Modules
- **Backend**: Firebase (Authentication + Firestore)
- **Styling**: Sass/SCSS com arquitetura modular
- **Build**: Create React App

## 📁 Estrutura do Projeto
src/
├── components/ # Componentes React
│ ├── common/ # Componentes reutilizáveis
│ ├── auth/ # Login e registro
│ ├── dashboard/ # Dashboard do usuário
│ └── landing/ # Landing page
├── contexts/ # Context API (Auth + License)
├── hooks/ # Custom hooks
├── pages/ # Páginas principais
├── services/ # Configuração Firebase
├── styles/ # Arquivos Sass
└── utils/ # Funções utilitárias

text

## 🔧 Instalação

1. Clone o repositório
2. Instale as dependências:
npm install

text

3. Configure as variáveis de ambiente:
cp .env.example .env

text

4. Configure o Firebase:
- Crie dois projetos Firebase (Auth + Licenças)
- Adicione as configurações no arquivo `.env`

5. Execute o projeto:
npm start

text

## 🔐 Configuração Firebase

### Firebase Auth (Usuários)
- Authentication habilitado
- Firestore para dados dos usuários

### Firebase License (Licenças)
- Firestore para gerenciar licenças
- Códigos promocionais
- Controle de downloads

## 📱 Funcionalidades do Sistema

### Para Usuários
- Cadastro com código promocional
- Login seguro
- Dashboard com status da licença
- Download da aplicação
- Upgrade para VIP

### Para Administradores
- Gerenciamento de licenças
- Criação de códigos promocionais
- Controle de downloads
- Estatísticas de uso

## 🎨 Design System

- **Cores primárias**: #667eea, #764ba2
- **Cores de destaque**: #f093fb, #f5576c
- **Tipografia**: Inter (primária), Poppins (secundária)
- **Componentes**: Sass Modules com BEM methodology

## 📄 Licença

© 2025 Ms Binary Elite. Todos os direitos reservados.
