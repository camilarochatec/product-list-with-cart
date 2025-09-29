import { FaCartPlus } from 'react-icons/fa';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';
// a funcao para adicionar itens
function Buttons({ itemNoCarrinho, adicionar, aumentar, diminuir }) {
  if (!itemNoCarrinho) {
    return (
      <button
        onClick={adicionar}
        className="flex items-center justify-center gap-2 bg-white border-2 border-rose-400 text-rose-900 rounded-full px-4 py-2 w-full font-semibold hover:border-red-500 hover:text-red-500 transition-colors shadow-sm"
      >
          {/* icone de carrinho se ainda nao adicionou item no carrinho */}
        <FaCartPlus />
        <span>comprar</span>
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between bg-red-600 text-white rounded-full px-4 py-2 w-full font-semibold shadow-sm">
       {/* aqui temos o botão de diminuir e aumentar e no span vai ter a prop para dizer a quantidade. Como itemNoCarrinho é o objeto completo do carrinho, posso acessar itemNoCarrinho.quantidade para mostrar o número correto. */}
      <button onClick={diminuir} className="hover:text-rose-200"><HiOutlineMinusCircle size={22} /></button>
      <span>{itemNoCarrinho.quantidade}</span>
      <button onClick={aumentar} className="hover:text-rose-200"><HiOutlinePlusCircle size={22} /></button>
    </div>
  );
}

export default Buttons;