# 🛒 Carrinho de Compras - Loja de Sobremesas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)

> 🔗 **[https://product-list-with-cart-seven-ruby.vercel.app](#)**

Este é um projeto de front-end que simula uma página de produtos de uma loja de sobremesas, com um carrinho de compras totalmente interativo. O foco foi criar uma experiência de usuário limpa, responsiva e uma arquitetura de código componentizada e de fácil manutenção, utilizando as melhores práticas do React e **Cultura DevOps aplicada**.

---

<p align="center">
  <img src="https://via.placeholder.com/800x400.png?text=Coloque+um+Print+do+seu+Site+Aqui" alt="Demonstração da Tela" width="100%">
</p>

---

## ✨ Principais Funcionalidades

### 🖥️ Front-end (UI/UX)
* **Listagem Dinâmica:** Produtos renderizados a partir de uma lista de dados estruturada.
* **Interação em Tempo Real:** * Adicionar/remover itens com um clique.
  * O card do produto muda de estado visualmente quando o item está no carrinho.
  * Aumentar/diminuir quantidades diretamente no card.
* **Carrinho Inteligente:** Cálculo automático do valor total e gerenciamento de cupons de desconto.
* **Modal de Confirmação:** Resumo elegante do pedido antes de finalizar a compra.
* **Design Responsivo:** Interface fluida para Mobile, Tablet e Desktop com Tailwind CSS.

### ⚙️ Cultura DevOps & Qualidade (Diferenciais)
* **Shift-Left Quality:** Validação rigorosa de código com **ESLint** para barrar "código morto".
* **Padronização de Ambiente:** Uso de **Docker** e `docker-compose` (Multi-stage build com Nginx) para eliminar a síndrome do "na minha máquina funciona".
* **Integração Contínua (CI):** Esteira automatizada com **GitHub Actions** que valida a integridade do código e realiza o *build* a cada novo *push*.
* **Infraestrutura como Código (IaC):** Prova de conceito (PoC) da gestão de infraestrutura automatizada utilizando **Terraform**.

---

## 🛠️ Tecnologias Utilizadas

* **React + Vite:** Biblioteca de interface e ferramenta de build ultra-rápida.
* **Tailwind CSS:** Estilização utility-first.
* **Docker & Nginx:** Containerização e servidor web de alta performance.
* **GitHub Actions:** Automação de CI/CD.
* **Terraform:** Automação de Infraestrutura.

---

## 🚀 Como Executar o Projeto Localmente

Clone o repositório em sua máquina:
```bash
git clone [https://github.com/camilarochatec/product-list-with-cart.git](https://github.com/camilarochatec/product-list-with-cart.git)
cd product-list-with-cart
ocê pode rodar o projeto de duas maneiras:

Opção 1: Via Docker (Recomendado 🐳)
Garante que o projeto rode em um ambiente isolado, idêntico à produção, sem precisar instalar o Node.js na sua máquina.

Certifique-se de que o Docker Desktop está rodando.

No terminal, execute o orquestrador:

Bash
docker compose up --build
Acesse no navegador: http://localhost:8080

Opção 2: Tradicional (Node.js)
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Acesse no navegador: http://localhost:5173

✉️ Contato
Camila Rocha Tech Lead & Desenvolvedora de Software

💼 LinkedIn: www.linkedin.com/in/camilarochatec
