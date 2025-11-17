# 🛡️ Guia Cyber Seguro

> Projeto de Extensão Curricular - Análise e Desenvolvimento de Sistemas

Um guia interativo e moderno sobre segurança cibernética, desenvolvido como projeto de extensão curricular com foco em educação digital e boas práticas de segurança online.

## 📋 Sobre o Projeto

O **Guia Cyber Seguro** é uma aplicação web educativa que visa conscientizar usuários sobre segurança digital, proteção de dados pessoais, prevenção contra fraudes e golpes online, além de promover comportamento ético na internet.

Este projeto foi desenvolvido durante o projeto de extensão curricular do curso de **Análise e Desenvolvimento de Sistemas** do [Centro Universitário Cidade Verde](https://unicv.edu.br/).

## ✨ Funcionalidades

- **📚 Conteúdo Educativo Estruturado**: Múltiplas seções organizadas sobre temas de segurança cibernética
- **💡 Interface Interativa**: Design moderno e responsivo com experiência de usuário otimizada
- **👍 Sistema de Likes**: Permite que usuários avaliem as seções do conteúdo
- **🔍 Identificação Única**: Utiliza fingerprinting para rastrear interações sem comprometer a privacidade
- **📱 Mobile First**: Totalmente responsivo com menu mobile otimizado
- **🎨 Tema Escuro**: Design com paleta de cores inspirada em segurança cibernética
- **⚡ Performance Otimizada**: SSR e otimizações do Next.js 16
- **📊 Analytics**: Integração com Vercel Analytics para métricas de uso

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[Next.js 16](https://nextjs.org/)**: Framework React com App Router
- **[React 19](https://react.dev/)**: Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior confiabilidade
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)**: Componentes acessíveis e customizáveis
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones moderna

### Backend & Database
- **[Drizzle ORM](https://orm.drizzle.team/)**: ORM TypeScript-first para PostgreSQL
- **[Neon Database](https://neon.tech/)**: PostgreSQL serverless
- **[FingerprintJS](https://fingerprintjs.com/)**: Identificação de visitantes única

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)**: Linting e formatação de código
- **[Prettier](https://prettier.io/)**: Formatação automática de código
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)**: Gerenciamento de migrações

## 🏗️ Arquitetura e Boas Práticas

O projeto segue princípios modernos de desenvolvimento web:

### Estrutura de Código
- **Componentização**: Componentes reutilizáveis e modulares
- **Separação de Responsabilidades**: Divisão clara entre UI, lógica e dados
- **Server Actions**: Uso de server actions do Next.js para operações de backend
- **Type Safety**: TypeScript em 100% do código para prevenir erros

### Performance
- **Server-Side Rendering (SSR)**: Renderização no servidor para melhor SEO e performance inicial
- **Lazy Loading**: Carregamento otimizado de recursos
- **Image Optimization**: Otimização automática de imagens com Next.js
- **Code Splitting**: Divisão automática de código pelo Next.js

### Banco de Dados
- **Schema-First**: Design do banco de dados com Drizzle Schema
- **Migrations**: Controle de versão do schema com migrations
- **Indexes**: Índices otimizados para consultas frequentes
- **Unique Constraints**: Garantia de integridade de dados (um like por usuário/seção)

### Acessibilidade & UX
- **Componentes Acessíveis**: Uso de Radix UI para garantir acessibilidade ARIA
- **Responsive Design**: Layout adaptável para todos os dispositivos
- **Loading States**: Feedback visual para operações assíncronas
- **Error Handling**: Tratamento adequado de erros

## 📁 Estrutura do Projeto

```
guia-cyber-seguro/
├── app/                      # App Router do Next.js
│   ├── api/                  # API Routes
│   │   └── sections/         # Endpoints de seções
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/               # Componentes React
│   ├── layout/               # Componentes de layout
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── mobile-menu.tsx
│   │   └── summary-menu.tsx
│   ├── sections/             # Seções do conteúdo
│   ├── ui/                   # Componentes UI reutilizáveis
│   ├── like-button.tsx       # Botão de curtida
│   └── table-card.tsx
├── db/                       # Configuração do banco de dados
│   ├── index.ts              # Cliente Drizzle
│   ├── schema.ts             # Schema do banco
│   └── seed.ts               # Seed de dados iniciais
├── drizzle/                  # Migrations do banco
├── lib/                      # Utilitários e actions
│   ├── actions.ts            # Server actions
│   └── utils.ts              # Funções utilitárias
└── public/                   # Arquivos estáticos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20 ou superior
- npm, yarn, pnpm ou bun
- Conta no [Neon Database](https://neon.tech/) (ou PostgreSQL local)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/marquesmaycon/guia-cyber-seguro.git
cd guia-cyber-seguro
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env na raiz do projeto
DATABASE_URL=sua_connection_string_do_postgresql
```

4. Execute as migrations:
```bash
npm run db:push
```

5. (Opcional) Execute o seed para popular o banco:
```bash
npm run db:seed
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Acesse [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

## 🎨 Créditos de Design

O design visual do projeto foi altamente inspirado no design da comunidade do Figma [CyberEz - Cyber Security](https://www.figma.com/community/file/1302801971340508755) criado por [Budogol](https://www.figma.com/@budogol).


## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/marquesmaycon.png" width="100px" style="border-radius: 50%"/>
  <br/>
  <strong>Maycon Marques</strong>
  <br/>
  <br/>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayconhenrique/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/marquesmaycon)
  [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:mayconmarquesh@gmail.com)

  ### Feito com ❤️ e muita 🎵
</div>
