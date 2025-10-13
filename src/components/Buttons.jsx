import { FaCartPlus } from 'react-icons/fa';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';

function Buttons({ itemNoCarrinho, adicionar, aumentar, diminuir }) {
    if (!itemNoCarrinho) {
        return (
            <button
                onClick={adicionar}
                className="flex items-center justify-center gap-2 bg-white border-2 border-rose-400 text-rose-900 rounded-full px-4 py-2 w-full font-semibold hover:border-red-500 hover:text-red-500 transition-colors shadow-sm"
            >
                {/* Ícone de carrinho para quando o item não está no carrinho */}
                <FaCartPlus />
                <span>comprar</span>
            </button>
        );
    } else {
        return (
            <div className="flex items-center justify-between bg-red-600 text-white rounded-full px-4 py-2 w-full font-semibold shadow-sm">
                {/* Botão de diminuir quantidade */}
                <button onClick={diminuir} className="hover:text-rose-200" aria-label="Diminuir quantidade"><HiOutlineMinusCircle size={22} /></button>
                
                {/* Mostra a quantidade atual do item no carrinho */}
                <span>{itemNoCarrinho.quantidade}</span>
                
                {/* Botão de aumentar quantidade */}
                <button onClick={aumentar} className="hover:text-rose-200" aria-label="Aumentar quantidade"><HiOutlinePlusCircle size={22} /></button>
            </div>
        )
    };
}

export default Buttons;