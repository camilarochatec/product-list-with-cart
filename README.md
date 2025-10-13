### 🛒 Carrinho de Compras para Loja de Sobremesas (React + Tailwind CSS)

> Este é um projeto de front-end que simula uma página de produtos de uma loja de sobremesas, com um carrinho de compras totalmente interativo. O foco foi criar uma experiência de usuário limpa, responsiva e uma arquitetura de código componentizada e de fácil manutenção, utilizando as melhores práticas do React.

**[🔗 Acesse a demonstração ao vivo aqui](https://www.google.com/search?q=https://%23)** 
-----

![Image](https://github.com/user-attachments/assets/925ce530-75ee-41f6-b047-d408ecfdf273)

### ✨ Principais Funcionalidades

  - **Listagem Dinâmica de Produtos:** Os produtos são renderizados a partir de uma lista de dados, facilitando a adição de novos itens.
  - **Interação com o Produto:**
      - Adicionar itens ao carrinho com um único clique.
      - O card do produto e o botão mudam de estado visualmente quando o item está no carrinho.
      - Aumentar e diminuir a quantidade de itens diretamente no card do produto.
  - **Carrinho de Compras em Tempo Real:**
      - O carrinho é atualizado instantaneamente a cada ação do usuário.
      - Cálculo automático do valor total do pedido.
      - Remover itens individualmente.
      - incluir ou remover cupom
  - **Modal de Confirmação:** Antes de finalizar a compra, um modal elegante exibe um resumo do pedido para confirmação do usuário.
  - **Design Responsivo:** A interface se adapta perfeitamente a dispositivos móveis, tablets e desktops, utilizando as vantagens do Tailwind CSS.
  - **Arquitetura Limpa:** O código é organizado em componentes reutilizáveis e com responsabilidades bem definidas (`ProductCard`, `Carrinho`, `Buttons`, etc.), com o estado centralizado no componente principal `App.jsx`.

-----

### 🛠️ Tecnologias Utilizadas

Este projeto foi construído com tecnologias modernas do ecossistema front-end:

  - **React:** Biblioteca principal para a construção da interface de usuário.
  - **Vite:** Ferramenta de build moderna e extremamente rápida para o ambiente de desenvolvimento.
  - **Tailwind CSS:** Framework CSS utility-first para estilização rápida e responsiva.
  - **React Icons:** Para a utilização de ícones vetoriais de alta qualidade.
  - **JavaScript (ES6+):** Lógica da aplicação, com uso de recursos como a sintaxe de *spread* (`...`), métodos de array (`.map`, `.find`, `.reduce`) e Hooks do React (`useState`).

-----

### 🚀 Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/camilarochatec/product-list-with-cart.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

-----

### 👨‍💻 O Que Aprendi e Demonstrei

  - **Gerenciamento de Estado com Hooks:** Utilização eficaz do `useState` para controlar o estado do carrinho e do modal, mantendo a UI sincronizada com os dados.
  - **Fluxo de Dados Unidirecional:** A passagem de dados e funções (props) de componentes pais para filhos (`App` -\> `Carrinho` -\> `ItemCarrinho`) e a comunicação de eventos de filhos para pais (ex: `onRemoverItem`).
  - **Componentização e Reutilização:** Criação de componentes especializados e reutilizáveis, como `ProductCard` e `Buttons`, o que torna o código mais limpo e escalável.
  - **Renderização Condicional:** Lógica para exibir diferentes elementos da interface com base no estado da aplicação (ex: mostrar o botão "Comprar" ou os controles de quantidade).
  - **Manipulação de Arrays em JavaScript:** Uso avançado de métodos como `.map`, `.find`, `.filter` e `.reduce` de forma imutável para gerenciar o estado do carrinho, uma prática essencial em React.

-----

### ✉️ Contato

**Camila Rocha**

  - **LinkedIn:** [linkedin.com/in/seu-usuario](www.linkedin.com/in/camilarochatec)'
