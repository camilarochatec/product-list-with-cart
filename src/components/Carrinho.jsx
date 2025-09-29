import ItemCarrinho from './ItemCarrinho'; //importo o item do carrinho
import { PiShoppingCartSimpleBold } from 'react-icons/pi'; // Ícone do carrinho
import { FaTruck } from 'react-icons/fa'; // Ícone de caminhão importado

// vai mostrar o resumo do pedido
function Carrinho({ itens, onRemoverItem, onConfirmarPedido }) {
  // itens.legnth é um array que passei no App.jsx e representa um produto ou item

  // aqui verificamos se a variável estaVazio será true se o número de itens no carrinho for igual a zero, e false caso contrário. uso isso para decidir se mostra a mensagem de carrinho vazio ou a lista de produtos.
  const estaVazio = itens.length === 0;
  
  //  calculo o valor total do pedido. O método .reduce() serve para "reduzir" um array a um único valor.
  const totalPedido = itens.reduce((total, item) => {  //acumalador,item
    return total + (item.preco * item.quantidade);
  }, 0); // Este 0 no final é o valor inicial do acumulador total. A primeira vez que a função rodar, total valerá 0.

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold text-red-600">Seu Carrinho ({itens.length})</h2>
      
      {estaVazio ? (
        <div className="text-center py-16 flex flex-col items-center">
          {/* icone de carrinho */}
            <PiShoppingCartSimpleBold size={40} className="text-rose-400 mb-4"/>
            <p className="font-semibold text-rose-700">Seu carrinho está vazio.</p>
        </div>
      ) : (
        <>
        {/* aqui temos o css da lista de items, a linha separadora */}
          <div className="my-4 divide-y divide-rose-100 max-h-60 overflow-y-auto pr-2">
            {itens.map(item => (
                <ItemCarrinho    //importação do componente itemcarrinho
                  key={item.id} 
                  item={item} 
                  onRemoverItem={onRemoverItem}
                />
            ))}
          </div>

          <div className="flex justify-between items-center my-6">
            <span className="text-lg text-rose-800">Total do Pedido</span>
            <span className="text-2xl font-bold text-rose-900">R${totalPedido.toFixed(2)}</span>
          </div>
          
          <div className="bg-rose-50 p-3 rounded-lg flex items-center gap-3">
            {/* icone caminhao */}
            <FaTruck size={20} className="text-rose-800" />
            <p className="text-sm text-rose-800">
                Esta é uma entrega <span className="font-bold">carbono neutro</span>.
            </p>
          </div>

          <button 
            onClick={onConfirmarPedido}
            className="mt-6 bg-red-600 text-white rounded-full py-3 w-full font-semibold hover:bg-red-700 transition-colors"
          >
            Confirmar Pedido
          </button>
        </>
      )}
    </div>
  );
}

export default Carrinho;
