# Testes Automatizados com Cypress - Básico

👋 **Seja bem-vindo(a) ao curso básico de Cypress!**

Este repositório contém o material completo do curso de automação de testes com Cypress da **Escola Talking About Testing**.

## 📋 Sobre o Projeto

Este projeto ensina automação de testes E2E (End-to-End) utilizando o framework Cypress, com foco em uma aplicação web de atendimento ao cliente (CAC TAT).

## 🎯 O que você vai aprender

- ✅ Configurar um projeto Cypress do zero
- ✅ Visitar páginas locais e remotas
- ✅ Interagir com elementos web (inputs, selects, checkboxes, radio buttons)
- ✅ Testar upload de arquivos
- ✅ Realizar verificações e validações
- ✅ Criar comandos customizados
- ✅ Lidar com links que abrem em nova aba
- ✅ Executar testes em dispositivos móveis
- ✅ Integração contínua (CI/CD)
- ✅ Documentação de testes

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Git](https://git-scm.com/) (v2.34.1+)
- [Node.js](https://nodejs.org/) (v16.13.2+)
- [npm](https://www.npmjs.com/) (v8.3.2+)
- [Google Chrome](https://www.google.com/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/) ou IDE de sua preferência

> **Verificar versões:** `git --version && node --version && npm --version`

## 🚀 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/wlsf82/cypress-basico-v2.git
   cd cypress-basico-v2
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Abra a aplicação de teste:**
   - Abra o arquivo `src/index.html` no navegador
   - Ou use um servidor local de sua preferência

## 🎮 Como Executar os Testes

### Interface Gráfica (Cypress Test Runner)
```bash
# Desktop
npm run cy:open

# Mobile (viewport 410x860)
npm run cy:open:mobile
```

### Modo Headless (Terminal)
```bash
# Desktop
npm test

# Mobile
npm run teste:mobile
```

## 📁 Estrutura do Projeto

```
cypress-do-zero-a-nuvem/
├── cypress/
│   ├── e2e/                 # Testes E2E
│   │   └── CAC-TAT.cy.js
│   ├── fixtures/            # Dados de teste
│   ├── support/             # Comandos customizados
│   └── videos/              # Gravações dos testes
├── lessons/                 # Material do curso
│   ├── _course-structure_.md
│   ├── _pre-requirements_.md
│   └── 01.md - 13.md       # Aulas numeradas
├── src/                     # Aplicação de teste
│   ├── index.html          # Página principal
│   ├── privacy.html        # Página de privacidade
│   ├── script.js           # Lógica da aplicação
│   └── style.css           # Estilos
├── cypress.config.js        # Configurações do Cypress
└── package.json            # Dependências e scripts
```

## 🖥️ Aplicação de Teste

A aplicação **CAC TAT** (Central de Atendimento ao Cliente TAT) possui:

- Formulário com campos obrigatórios (Nome, Sobrenome, E-mail, Mensagem)
- Campo de telefone opcional
- Seleção de produto
- Tipos de atendimento (radio buttons)
- Preferências de contato (checkboxes)
- Upload de arquivos
- Link para política de privacidade

## ⚙️ Configurações do Cypress

- **Viewport padrão:** 1280x880
- **Gravação de vídeo:** Habilitada
- **Suporte a:** Chrome, Firefox, Edge

## 📚 Material de Estudo

O curso está organizado em lições numeradas na pasta `lessons/`:

- **Estrutura do curso:** [_course-structure_.md](./lessons/_course-structure_.md)
- **Pré-requisitos:** [_pre-requirements_.md](./lessons/_pre-requirements_.md)
- **Aulas 01-13:** Conceitos e exercícios práticos
- **Congratulations:** Finalização do curso

## 🤝 Contribuição

Este é um projeto educacional. Para dúvidas ou sugestões:

- Abra uma [issue](https://github.com/wlsf82/cypress-basico-v2/issues)
- Entre em contato com o instrutor

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨🏫 Instrutor

**Walmyr Filho**
- 📧 wlsf82@gmail.com
- 🌐 [walmyr.dev](https://walmyr.dev/)
- 🎓 [Escola Talking About Testing](https://udemy.com/user/walmyr)

---

⭐ **Gostou do curso? Deixe uma estrela no repositório!**

🚀 **Vamos começar?** Acesse a [estrutura do curso](./lessons/_course-structure_.md) e inicie sua jornada!
