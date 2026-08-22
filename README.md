# 📊 Plataforma Web de Ingestão de Dados Autenticada (Google Apps Script)

Um sistema *serverless* completo (Frontend + Backend + Banco de Dados) desenvolvido com Google Apps Script para coleta segura e estruturada de dados. 

Este projeto foi desenhado para atuar como uma interface de entrada de dados, substituindo formulários padrão por uma plataforma customizada com controle de acesso. Os dados capturados são armazenados automaticamente em formato tabular no Google Sheets, facilitando integrações futuras com pipelines de ciência de dados (Python/Pandas) e ferramentas de Business Intelligence.

## 🚀 Arquitetura e Fluxo de Dados

- **Frontend:** HTML/CSS e Vanilla JavaScript responsivo, processado via `HtmlService`.
- **Backend (Controlador):** `Code.gs` gerencia as rotas, regras de validação de login e injeção de dados.
- **Banco de Dados Relacional:** Google Sheets, atuando como repositório de usuários (controle de acesso) e tabela de fatos (registro histórico das respostas do formulário).
- **Controle de Versão:** Gerenciado localmente e integrado ao GitHub utilizando a CLI oficial do Google (`@google/clasp`).

## ✨ Funcionalidades

- **Autenticação de Usuários:** Tela de login restrita validando credenciais diretamente contra uma tabela de usuários ativos.
- **Formulário Dinâmico:** Renderização condicional do formulário apenas após a validação bem-sucedida da sessão.
- **Ingestão Assíncrona:** Comunicação entre frontend e backend via `google.script.run`, garantindo uma experiência fluida sem recarregar a página (Single Page Application).
- **Estruturação Automática:** Inserção de carimbo de data/hora (timestamp) e organização padronizada das respostas.

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Google Apps Script (GAS) API
- HTML5 / CSS3
- Google Sheets API
- Clasp (Command Line Apps Script Projects)

## ⚙️ Como clonar e executar este projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/](https://github.com/pequenodsa/)[Portfolio-Plataforma_de_Acesso].git
