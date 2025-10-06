import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Carrinho from './components/Carrinho';
import ModalConfirmacao from './components/ModalConfirmacao';

//aqui vamos fazer a requisição
//recomendado é criar primeiro uma função dentro faz um fetch da api e o tratmento .then. mas não vamos usar essa funcao direto na parte logica do nosso compoennte. pois pode ser preciso montar e desmontar e assim a requisiçao seja refeita. não é o que queremos, por isso vamos usar um use effect
// os produtos vão ficar com use state para que o componente possa renderizar.
//o spread seria um desmonte de obejto
//o que vai fazer a logica será o componente carrinho
// const [produtos, setProdutos] = useState([])

// function buscarProdutos(){
//   fetch("#")
//   .then(resposta=> resposta.json())
//   .then(json =>{
//     setProdutos
//   })
// }

// useEffect(()=>{
//   buscarProdutos();
// }, []);

const produtosIniciais = [
  {
    id: 1,
    imagem: 'image-waffle-tablet.jpg',
    categoria: 'Waffle',
    nome: 'Waffle Tradicional',
    preco: 6.50,
  },
  {
    id: 2,
    imagem: 'image-cake-mobile.jpg', 
    categoria: 'Bolo',
    nome: 'Bolo Red Velvet',
    preco: 7.00,
  },
  {
    id: 3,
    imagem: 'image-brownie-desktop.jpg',
    categoria: 'Brownie',
    nome: 'Brownie de Chocolate',
    preco: 5.50,
  },
];
// O método .find() procura no array carrinho (que é o seu estado do carrinho de compras) Ele tenta encontrar um item dentro do carrinho cujo id seja exatamente igual ao id do produto que está sendo renderizado no momento.
function App() {
  const [carrinho, setCarrinho] = useState([]); //carrinho vazio
  const [modalAberto, setModalAberto] = useState(false); //modalescondido

  function handleAdicionarAoCarrinho(produtoParaAdicionar) {
    const itemJaExiste = carrinho.find(item => item.id === produtoParaAdicionar.id);

    if (itemJaExiste) {
      setCarrinho(carrinho.map(item => 
        item.id === produtoParaAdicionar.id
        // (Spread Syntax, cópia)
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCarrinho([...carrinho, { ...produtoParaAdicionar, quantidade: 1 }]);
    }
  }
  
  function handleAumentarQuantidade(idDoProduto) {
    setCarrinho(carrinho.map(item =>
      item.id === idDoProduto
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    ));
  }
  
  function handleDiminuirQuantidade(idDoProduto) {
    const item = carrinho.find(item => item.id === idDoProduto);

    if (item.quantidade === 1) {
      handleRemoverItem(idDoProduto);
    } else {
      setCarrinho(carrinho.map(item =>
        item.id === idDoProduto
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      ));
    }
  }

  function handleRemoverItem(idDoProduto) {
    setCarrinho(carrinho.filter(item => item.id !== idDoProduto));
  }

  function handleAbrirModalPagamento() {
    setModalAberto(true);
  }

  function handleFecharModalPagamento() {
    setModalAberto(false);
  }

  function handleIrParaPagamento() {
    console.log("Processando pagamento com os itens:", carrinho);
    // Aqui viria a lógica real de pagamento
    setCarrinho([]);
    setModalAberto(false);
  }

  return (
    <main className="max-w-6xl mx-auto p-4 lg:p-8">
      <div className="lg:flex lg:gap-8">
        
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold text-rose-900 mb-8">Sobremesas</h1>
          
          {/* div dos produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {produtosIniciais.map((produto) => (
              <ProductCard 
                key={produto.id} 
                produto={produto}
                onAdicionarAoCarrinho={handleAdicionarAoCarrinho}
                onAumentarQuantidade={handleAumentarQuantidade}
                onDiminuirQuantidade={handleDiminuirQuantidade}
                itemNoCarrinho={carrinho.find(item => item.id === produto.id)}
              />
            ))}
          </div>
        </div>

        {/* div do carrinho  e do modal de confirmação*/}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <Carrinho 
            itens={carrinho}
            onRemoverItem={handleRemoverItem}
            onConfirmarPedido={handleAbrirModalPagamento}
          />
        </div>
      </div>
      
      {modalAberto && (
        <ModalConfirmacao 
          itensDoPedido={carrinho}
          onIrParaPagamento={handleIrParaPagamento}
          onVoltarAoCarrinho={handleFecharModalPagamento}
        />
      )}
    </main>
  );
}

export default App;
