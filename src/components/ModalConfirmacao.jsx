import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { FaCreditCard, FaTruck } from "react-icons/fa";

// 1. CRIAMOS UM SUBCOMPONENTE PARA A LISTA, JÁ CORRIGIDO
function ItemPedidoConfirmado({ item }) {
    return (
        <div className="flex items-center gap-4 border-b border-rose-100 py-3 last:border-b-0">
             <div className="relative">
                 <img 
                    src={item.image} 
                    alt={item.name}           
                    className="w-12 h-12 rounded-md object-cover" 
                />
                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                     {item.quantidade}
                 </span>
             </div>
             <div className="flex-grow">
                 <p className="font-semibold text-rose-900 text-sm">{item.name}</p>
                 <div className="flex gap-4 items-center mt-1">
                     <span className="font-bold text-red-600">{item.quantidade}x</span>
                     <span className="text-rose-400">@ {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                 </div>
             </div>
             <p className="font-bold text-rose-900">
                {(item.quantidade * item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
        </div>
    );
}


// 2. COMPONENTE PRINCIPAL DO MODAL, COMBINANDO TUDO
function ModalConfirmacao({ isOpen, onClose }) {
    // Os dados vêm do nosso CartContext, garantindo que tudo esteja sincronizado
    const { carrinho, totalFinal } = useContext(CartContext);

    // Se o modal não estiver aberto, não renderiza nada
    if (!isOpen) {
        return null;
    }

    // Função placeholder para o botão de pagamento
    const handleIrParaPagamento = () => {
        alert("Redirecionando para a tela de pagamento! (Funcionalidade a ser implementada em breve)");
    }

    return (
        // REQUISITO: Clicar fora (no fundo preto) fecha o modal
        <div  
            onClick={onClose}
            className="fixed inset-0 bg-black/90 flex justify-center items-center p-4 cursor-pointer z-50"
        >
            {/* REQUISITO: Clicar dentro (na caixa branca) NÃO fecha o modal */}
            <div 
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-6 rounded-xl w-full max-w-lg cursor-default"
            >
                <div className="flex items-center gap-3">
                    <FaCreditCard size={32} className="text-red-500"/>
                    <div>
                        <h2 className="text-2xl font-bold text-rose-900">Confirmar Pedido</h2>
                        <p className="text-rose-500">Confira seus itens antes de continuar.</p>
                    </div>
                </div>
                
                <div className="bg-rose-50 p-4 rounded-lg my-4 max-h-60 overflow-y-auto">
                    {/* REQUISITO: As imagens e dados dos produtos aparecem corretamente */}
                    {carrinho.map(item => <ItemPedidoConfirmado key={item.id} item={item} />)}

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-rose-100">
                        <span className="text-lg text-rose-800">Total do Pedido</span>
                        <span className="text-2xl font-bold text-rose-900">
                            {totalFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </div>
                </div>
                
                {/* REQUISITO: Manter a figurinha do "carbono neutro" */}
                <div className="bg-rose-50 p-3 rounded-lg flex items-center gap-3 mb-4">
                    <FaTruck size={20} className="text-rose-800" />
                    <p className="text-sm text-rose-800">
                        Esta é uma entrega <span className="font-bold">carbono neutro</span>.
                    </p>
                </div>
                
                <div className="mt-4 flex flex-col-reverse sm:flex-row gap-3">
                    {/* REQUISITO: Botão para voltar/fechar o modal */}
                    <button  
                        onClick={onClose}
                        className="bg-transparent border-2 border-rose-300 text-rose-800 rounded-full py-3 w-full font-semibold hover:bg-rose-50 transition-colors"
                    >
                        Voltar ao Carrinho
                    </button>
                    <button  
                        onClick={handleIrParaPagamento}
                        className="bg-red-600 text-white rounded-full py-3 w-full font-semibold hover:bg-red-700 transition-colors"
                    >
                        Confirmar e Pagar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalConfirmacao;