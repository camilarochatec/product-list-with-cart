import { FaCreditCard, FaTruck } from "react-icons/fa"; 

//  Esta função é uma maneira que o Vite oferece para carregar a imagem que preciso no modal e não todas.
// import.meta.url: É uma variável especial do Vite que contém a URL do arquivo atual (ex: http://localhost:5173/src/components/ModalConfirmacao.jsx).

// new URL(path, import.meta.url): Isso combina o caminho relativo da sua imagem (../assets/image-waffle-tablet.jpg) com a URL do arquivo atual, resultando em um caminho absoluto e correto para a imagem que o navegador consegue entender (ex: http://localhost:5173/src/assets/image-waffle-tablet.jpg).

// .href: Apenas converte o resultado para uma string de URL.

// Em resumo, getImageUrl é uma "função utilitária" para construir o caminho correto de uma imagem quando o nome do arquivo vem de uma variável.
const getImageUrl = (nomeDoArquivo) => {
  const path = nomeDoArquivo.includes('/') ? nomeDoArquivo : `../assets/${nomeDoArquivo}`;
  return new URL(path, import.meta.url).href;
};

function ItemPedidoConfirmado({ item }) {
    return (
        <div className="flex items-center gap-4 border-b border-rose-100 py-3 last:border-b-0">
             <div className="relative">
                <img src={getImageUrl(item.imagem)} alt={item.nome} className="w-12 h-12 rounded-md object-cover" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {item.quantidade}
                </span>
             </div>
            <div className="flex-grow">
                <p className="font-semibold text-rose-900 text-sm">{item.nome}</p>
                <div className="flex gap-4 items-center mt-1">
                    <span className="font-bold text-red-600">{item.quantidade}x</span>
                    <span className="text-rose-400">@ R${item.preco.toFixed(2)}</span>
                </div>
            </div>
            <p className="font-bold text-rose-900">R${(item.quantidade * item.preco).toFixed(2)}</p>
        </div>
    );
}

function ModalConfirmacao({ itensDoPedido, onIrParaPagamento, onVoltarAoCarrinho }) {

  const totalPedido = itensDoPedido.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
  }, 0);

  return (
    <div 
      onClick={onVoltarAoCarrinho}
      className="fixed inset-0 bg-black/90  flex justify-center items-center p-4 cursor-pointer"
    >
      <div 
      // A função e.stopPropagation() para a propagação do evento. Quando clica na caixa branca, o onClick dela é acionado, ele chama e.stopPropagation(), e o evento de clique para ali mesmo, impedindo que ele chegue ao fundo preto e não feche o modal.
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl w-full max-w-lg cursor-default"
      >
        <div className="flex items-center gap-3">
            <FaCreditCard size={32} className="text-blue-500"/>
            <div>
                <h2 className="text-2xl font-bold text-rose-900">Pagamento</h2>
                <p className="text-rose-500">Confira seu pedido antes de continuar.</p>
            </div>
        </div>
        
        <div className="bg-rose-50 p-4 rounded-lg my-4 max-h-60 overflow-y-auto">
            {itensDoPedido.map(item => <ItemPedidoConfirmado key={item.id} item={item} />)}

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-rose-100">
                <span className="text-lg text-rose-800">Pedido Total</span>
                <span className="text-2xl font-bold text-rose-900">R${totalPedido.toFixed(2)}</span>
            </div>
        </div>
        
        <div className="bg-rose-50 p-3 rounded-lg flex items-center gap-3 mb-4">
            <FaTruck size={20} className="text-rose-800" />
            <p className="text-sm text-rose-800">
                Esta é uma entrega <span className="font-bold">carbono neutro</span>.
            </p>
        </div>
        
        <div className="mt-4 flex flex-col-reverse sm:flex-row gap-3">
            <button 
              onClick={onVoltarAoCarrinho}
              className="bg-transparent border-2 border-rose-300 text-rose-800 rounded-full py-3 w-full font-semibold hover:bg-rose-50 transition-colors"
            >
              Voltar ao Carrinho
            </button>
            <button 
              onClick={onIrParaPagamento}
              className="bg-red-600 text-white rounded-full py-3 w-full font-semibold hover:bg-red-700 transition-colors"
            >
              Ir para Pagamento
            </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmacao;
