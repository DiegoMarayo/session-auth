# 🔐 Session Authentication API

Projeto desenvolvido para fins de estudo com o objetivo de aprender autenticação utilizando **Express Sessions** no Node.js.

A aplicação demonstra como manter um usuário autenticado utilizando **Cookies** e **Sessions**, protegendo rotas privadas e permitindo login, logout e verificação do estado da sessão.

---

## 🚀 Tecnologias

- Node.js
- Express
- express-session
- dotenv

---

## 📁 Estrutura do Projeto

```text
src/
│
├── config/
│   └── session.js
│
├── controllers/
│   └── authController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── routes/
│   └── authRoutes.js
│
└── server.js
```

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/DiegoMarayo/session-auth.git
```

Entre na pasta:

```bash
cd session-auth
```

Instale as dependências:

```bash
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
SESSION_SECRET=sua_chave_super_secreta
```

---

## ▶️ Executando

Modo desenvolvimento:

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

# 🔑 Credenciais de Teste

```text
Usuário: admin
Senha:   123456
```

---

# 📌 Endpoints

## 🔓 Rota Pública

```http
GET /api/publica
```

Retorna informações públicas e informa se existe uma sessão ativa.

---

## 🔐 Login

```http
POST /api/login
```

Body:

```json
{
    "usuario": "admin",
    "senha": "123456"
}
```

---

## 👤 Status da Sessão

```http
GET /api/status
```

Verifica se existe um usuário autenticado.

---

## 🔒 Rota Protegida

```http
GET /api/protegida
```

Necessita que o usuário esteja autenticado.

Caso contrário retorna:

```http
401 Unauthorized
```

---

## 🚪 Logout

```http
POST /api/logout
```

Encerra a sessão do usuário.

---

# 🔄 Fluxo da Autenticação

```text
          Login
            │
            ▼
   Session criada no servidor
            │
            ▼
 Cookie connect.sid enviado
            │
            ▼
 Navegador envia o cookie
 em todas as requisições
            │
            ▼
 Servidor identifica a sessão
            │
            ▼
 Usuário autenticado
```

---

# 📚 Conceitos abordados

- Express
- Express Session
- Cookies
- Middleware
- Rotas protegidas
- Controllers
- Modularização
- Variáveis de ambiente (.env)
- Organização de projetos Node.js

---

# 🎯 Objetivo

Este projeto foi desenvolvido para compreender o funcionamento da autenticação baseada em **Session**, servindo como base para estudos futuros sobre:

- JWT
- Refresh Token
- Banco de Dados
- Bcrypt
- Prisma ORM
- APIs REST

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo.