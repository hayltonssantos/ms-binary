import os
import json

def create_directory(path):
    """Cria diretório se não existir"""
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"✅ Criado: {path}")
    else:
        print(f"📁 Já existe: {path}")

def create_file(path, content=""):
    """Cria arquivo com conteúdo"""
    try:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"📄 Arquivo criado: {path}")
    except Exception as e:
        print(f"❌ Erro ao criar {path}: {e}")

def create_mhi_trading_bot_project():
    """Cria estrutura completa do projeto MHI Trading Bot"""
    
    print("🚀 Criando projeto MHI Trading Bot by Ms Binary Elite...")
    print("=" * 60)
    
    # Estrutura de diretórios
    directories = [
        "src",
        "src/components",
        "src/components/common",
        "src/components/common/Header",
        "src/components/common/Footer", 
        "src/components/common/Loading",
        "src/components/common/ProtectedRoute",
        "src/components/common/Button",
        "src/components/auth",
        "src/components/auth/LoginForm",
        "src/components/auth/RegisterForm",
        "src/components/dashboard",
        "src/components/dashboard/VipStatus",
        "src/components/dashboard/LicenseInfo",
        "src/components/dashboard/DownloadSection",
        "src/components/dashboard/StatsCard",
        "src/components/landing",
        "src/components/landing/Hero",
        "src/components/landing/Features",
        "src/components/landing/Stats",
        "src/components/landing/Download",
        "src/components/landing/Testimonials",
        "src/components/landing/CTA",
        "src/contexts",
        "src/hooks",
        "src/pages",
        "src/services",
        "src/utils",
        "src/styles",
        "src/styles/abstracts",
        "src/styles/base",
        "src/styles/components",
        "src/styles/layout",
        "src/styles/pages",
        "src/styles/themes",
        "public",
        "public/images",
        "public/downloads"
    ]
    
    # Criar diretórios
    for directory in directories:
        create_directory(directory)
    
    print("\n📦 Criando arquivos de configuração...")
    
    # package.json
    package_json = {
        "name": "mhi-trading-bot-website",
        "version": "1.0.0",
        "description": "Site oficial do MHI Trading Bot by Ms Binary Elite",
        "main": "src/index.js",
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
        "dependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-router-dom": "^6.8.0",
            "react-scripts": "5.0.1",
            "firebase": "^9.17.1",
            "sass": "^1.58.0"
        },
        "browserslist": {
            "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
            ],
            "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
            ]
        }
    }
    
    create_file("package.json", json.dumps(package_json, indent=2))
    
    # .gitignore
    gitignore_content = """# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Firebase
.firebase/
firebase-debug.log

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
"""
    
    create_file(".gitignore", gitignore_content)
    
    # .env.example
    env_example = """# Firebase Auth Configuration
REACT_APP_AUTH_API_KEY=your-auth-api-key
REACT_APP_AUTH_DOMAIN=mhi-trading-auth.firebaseapp.com
REACT_APP_AUTH_PROJECT_ID=mhi-trading-auth
REACT_APP_AUTH_STORAGE_BUCKET=mhi-trading-auth.appspot.com
REACT_APP_AUTH_MESSAGING_SENDER_ID=123456789
REACT_APP_AUTH_APP_ID=your-auth-app-id

# Firebase License Configuration
REACT_APP_LICENSE_API_KEY=your-license-api-key
REACT_APP_LICENSE_DOMAIN=mhi-trading-license.firebaseapp.com
REACT_APP_LICENSE_PROJECT_ID=mhi-trading-license
REACT_APP_LICENSE_STORAGE_BUCKET=mhi-trading-license.appspot.com
REACT_APP_LICENSE_MESSAGING_SENDER_ID=987654321
REACT_APP_LICENSE_APP_ID=your-license-app-id

# App Configuration
REACT_APP_NAME=MHI Trading Bot
REACT_APP_VERSION=1.0.0
REACT_APP_SUPPORT_EMAIL=suporte@msbinaryelite.com
REACT_APP_SUPPORT_WHATSAPP=5511999999999
"""
    
    create_file(".env.example", env_example)
    
    print("\n🎨 Criando arquivos de estilo...")
    
    # Variáveis SCSS
    variables_scss = """// Cores do MHI Trading Bot
$primary-color: #667eea;
$secondary-color: #764ba2;
$accent-color: #f093fb;
$accent-secondary: #f5576c;

// Cores de texto
$text-primary: #2c3e50;
$text-secondary: #5a6c7d;
$text-light: #7f8c8d;
$text-white: #ffffff;

// Cores de fundo
$background-light: #f8f9fa;
$background-dark: #1a1a1a;
$background-card: #ffffff;

// Cores de status
$success: #27ae60;
$error: #e74c3c;
$warning: #f39c12;
$info: #3498db;

// Breakpoints responsivos
$mobile: 480px;
$tablet: 768px;
$desktop: 1024px;
$large-desktop: 1200px;

// Espaçamentos
$spacing-xs: 0.5rem;   // 8px
$spacing-sm: 1rem;     // 16px
$spacing-md: 1.5rem;   // 24px
$spacing-lg: 2rem;     // 32px
$spacing-xl: 3rem;     // 48px
$spacing-xxl: 4rem;    // 64px

// Tipografia
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-secondary: 'Poppins', sans-serif;
$font-mono: 'Fira Code', 'Courier New', monospace;

// Tamanhos de fonte
$font-xs: 0.75rem;     // 12px
$font-sm: 0.875rem;    // 14px
$font-base: 1rem;      // 16px
$font-lg: 1.125rem;    // 18px
$font-xl: 1.25rem;     // 20px
$font-2xl: 1.5rem;     // 24px
$font-3xl: 2rem;       // 32px
$font-4xl: 2.5rem;     // 40px

// Sombras
$shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);
$shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
$shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.18);
$shadow-2xl: 0 20px 40px rgba(0, 0, 0, 0.2);

// Border radius
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 12px;
$radius-xl: 16px;
$radius-2xl: 24px;
$radius-full: 50px;

// Z-index
$z-dropdown: 1000;
$z-sticky: 1020;
$z-fixed: 1030;
$z-modal-backdrop: 1040;
$z-modal: 1050;
$z-popover: 1060;
$z-tooltip: 1070;

// Transições
$transition-fast: 0.15s ease;
$transition-base: 0.3s ease;
$transition-slow: 0.5s ease;
"""
    
    create_file("src/styles/abstracts/_variables.scss", variables_scss)
    
    # Mixins SCSS
    mixins_scss = """@import 'variables';

// Flexbox utilities
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@mixin flex-column {
  display: flex;
  flex-direction: column;
}

// Responsive breakpoints
@mixin mobile {
  @media (max-width: #{$mobile}) {
    @content;
  }
}

@mixin tablet {
  @media (max-width: #{$tablet}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$desktop}) {
    @content;
  }
}

@mixin large-desktop {
  @media (min-width: #{$large-desktop}) {
    @content;
  }
}

// Button styles
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: $radius-md;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all $transition-base;
  font-family: $font-primary;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
}

@mixin button-primary {
  @include button-base;
  background: linear-gradient(45deg, $primary-color 0%, $secondary-color 100%);
  color: $text-white;
  padding: $spacing-sm $spacing-lg;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: $shadow-lg;
  }
}

@mixin button-secondary {
  @include button-base;
  background: transparent;
  color: $primary-color;
  border: 2px solid $primary-color;
  padding: $spacing-sm $spacing-lg;
  
  &:hover:not(:disabled) {
    background: $primary-color;
    color: $text-white;
    transform: translateY(-1px);
  }
}

// Card styles
@mixin card-base {
  background: $background-card;
  border-radius: $radius-lg;
  box-shadow: $shadow-sm;
  padding: $spacing-lg;
  transition: all $transition-base;
}

@mixin card-hover {
  &:hover {
    box-shadow: $shadow-md;
    transform: translateY(-2px);
  }
}

// Gradient backgrounds
@mixin gradient-primary {
  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
}

@mixin gradient-accent {
  background: linear-gradient(45deg, $accent-color 0%, $accent-secondary 100%);
}

// Text gradients
@mixin text-gradient-primary {
  background: linear-gradient(45deg, $primary-color 0%, $secondary-color 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@mixin text-gradient-accent {
  background: linear-gradient(45deg, $accent-color 0%, $accent-secondary 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// Animations
@mixin fade-in($duration: $transition-base) {
  animation: fadeIn $duration ease-in-out;
}

@mixin slide-up($duration: $transition-base) {
  animation: slideUp $duration ease-out;
}

@mixin float($duration: 3s) {
  animation: float $duration ease-in-out infinite;
}

// Keyframes
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

// Utilities
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@mixin aspect-ratio($width, $height) {
  position: relative;
  
  &::before {
    content: '';
    display: block;
    padding-top: ($height / $width) * 100%;
  }
  
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
"""
    
    create_file("src/styles/abstracts/_mixins.scss", mixins_scss)
    
    # Reset CSS
    reset_scss = """// Reset CSS moderno para MHI Trading Bot
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: $font-primary;
  font-size: $font-base;
  line-height: 1.6;
  color: $text-primary;
  background-color: $background-light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Remove default styles
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

// Focus styles
:focus {
  outline: 2px solid $primary-color;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

// Selection styles
::selection {
  background-color: $primary-color;
  color: $text-white;
}
"""
    
    create_file("src/styles/base/_reset.scss", reset_scss)
    
    # Main SCSS
    main_scss = """// Main stylesheet for MHI Trading Bot
@import 'abstracts/variables';
@import 'abstracts/mixins';
@import 'base/reset';

// Global styles
.container {
  max-width: $large-desktop;
  margin: 0 auto;
  padding: 0 $spacing-lg;
  
  @include tablet {
    padding: 0 $spacing-md;
  }
  
  @include mobile {
    padding: 0 $spacing-sm;
  }
}

// Utility classes
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mt-sm { margin-top: $spacing-sm; }
.mt-md { margin-top: $spacing-md; }
.mt-lg { margin-top: $spacing-lg; }
.mt-xl { margin-top: $spacing-xl; }

.mb-sm { margin-bottom: $spacing-sm; }
.mb-md { margin-bottom: $spacing-md; }
.mb-lg { margin-bottom: $spacing-lg; }
.mb-xl { margin-bottom: $spacing-xl; }

.hidden { display: none; }
.sr-only { @include visually-hidden; }

// Loading animation
.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
"""
    
    create_file("src/styles/main.scss", main_scss)
    
    print("\n⚛️ Criando arquivos React...")
    
    # App.jsx
    app_jsx = """import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LicenseUserProvider } from './contexts/LicenseUserContext';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Styles
import './styles/main.scss';

function App() {
  return (
    <Router>
      <AuthProvider>
        <LicenseUserProvider>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </LicenseUserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
"""
    
    create_file("src/App.jsx", app_jsx)
    
    # index.js
    index_js = """import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""
    
    create_file("src/index.js", index_js)
    
    # Firebase configs
    auth_firebase = """import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const authFirebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_AUTH_PROJECT_ID,
  storageBucket: process.env.REACT_APP_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_AUTH_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_AUTH_APP_ID
};

const authApp = initializeApp(authFirebaseConfig, "auth");
export const auth = getAuth(authApp);
export const authDb = getFirestore(authApp);
"""
    
    create_file("src/services/authFirebase.js", auth_firebase)
    
    license_firebase = """import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const licenseFirebaseConfig = {
  apiKey: process.env.REACT_APP_LICENSE_API_KEY,
  authDomain: process.env.REACT_APP_LICENSE_DOMAIN,
  projectId: process.env.REACT_APP_LICENSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_LICENSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_LICENSE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_LICENSE_APP_ID
};

const licenseApp = initializeApp(licenseFirebaseConfig, "license");
export const licenseDb = getFirestore(licenseApp);
"""
    
    create_file("src/services/licenseFirebase.js", license_firebase)
    
    # HTML template
    index_html = """<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#667eea" />
    <meta name="description" content="MHI Trading Bot by Ms Binary Elite - Robô de trading automatizado para maximizar seus lucros" />
    <meta name="keywords" content="trading bot, binary options, forex, automated trading, sinais, MHI, Ms Binary Elite" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="MHI Trading Bot by Ms Binary Elite" />
    <meta property="og:description" content="Maximize seus lucros com nosso robô de trading automatizado" />
    <meta property="og:image" content="%PUBLIC_URL%/images/og-image.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="MHI Trading Bot by Ms Binary Elite" />
    <meta property="twitter:description" content="Maximize seus lucros com nosso robô de trading automatizado" />
    <meta property="twitter:image" content="%PUBLIC_URL%/images/og-image.jpg" />
    
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <title>MHI Trading Bot by Ms Binary Elite</title>
  </head>
  <body>
    <noscript>Você precisa habilitar o JavaScript para executar esta aplicação.</noscript>
    <div id="root"></div>
  </body>
</html>
"""
    
    create_file("public/index.html", index_html)
    
    # README.md
    readme_content = """# 🤖 MHI Trading Bot by Ms Binary Elite

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
"""
 
    create_file("README.md", readme_content)

    # Arquivos de componentes básicos
    print("\n🧩 Criando componentes básicos...")

    # Placeholder para componentes
    component_files = [
        "src/components/common/Header/Header.jsx",
        "src/components/common/Header/Header.module.scss",
        "src/components/common/Footer/Footer.jsx", 
        "src/components/common/Footer/Footer.module.scss",
        "src/components/common/Loading/Loading.jsx",
        "src/components/common/Loading/Loading.module.scss",
        "src/components/common/ProtectedRoute/ProtectedRoute.jsx",
        "src/components/common/Button/Button.jsx",
        "src/components/common/Button/Button.module.scss",
        "src/pages/Home.jsx",
        "src/pages/Login.jsx", 
        "src/pages/Register.jsx",
        "src/pages/Dashboard.jsx",
        "src/contexts/AuthContext.js",
        "src/contexts/LicenseUserContext.js",
        "src/hooks/useLicenseStatus.js"
    ]

    for file_path in component_files:
        create_file(file_path, f"// TODO: Implementar {os.path.basename(file_path)}\n")

    print("\n✨ Projeto MHI Trading Bot criado com sucesso!")
    print("\n📋 Próximos passos:")
    print("1. cd para o diretório do projeto")
    print("2. npm install")
    print("3. Configure o arquivo .env com suas credenciais Firebase")
    print("4. npm start")
    print("\n🚀 Happy coding!")

if __name__ == "__main__":
  create_mhi_trading_bot_project()
