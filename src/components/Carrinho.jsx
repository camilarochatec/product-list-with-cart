// src/components/Carrinho.jsx
import { useState, useContext } from 'react';
import ItemCarrinho from './ItemCarrinho';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { FaTruck } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';

// onConfirmarPedido é a única prop que precisamos, para controlar o modal no App.jsx
function Carrinho({ onConfirmarPedido }) {
    // Usa o useContext diretamente
    const {
        carrinho,
        subtotal,
        valorDesconto,
        totalFinal,
        aplicarCupom,
        cupomAplicado,
        removerCupom
    } = useContext(CartContext);

    const [cupomInput, setCupomInput] = useState('');
    const [mensagemCupom, setMensagemCupom] = useState('');

    const estaVazio = carrinho.length === 0;

    const handleAplicarCupom = () => {
        const resultado = aplicarCupom(cupomInput.toUpperCase());
        setMensagemCupom(resultado.message);
        if (resultado.success) {
            setCupomInput('');
        }
    };

    const handleRemoverCupom = () => {
        removerCupom();
        setMensagemCupom(''); // Limpa a mensagem de status
    }

    return (
        <div className="bg-white rounded-lg p-6 w-full shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Seu Carrinho ({carrinho.length})</h2>

            {estaVazio ? (
                <div className="text-center py-16 flex flex-col items-center">
                    <PiShoppingCartSimpleBold size={40} className="text-rose-400 mb-4" />
                    <p className="font-semibold text-rose-700">Seu carrinho está vazio.</p>
                </div>
            ) : (
                <>
                    <div className="my-4 divide-y divide-rose-100 max-h-60 overflow-y-auto pr-2">
                        {carrinho.map(item => (
                            <ItemCarrinho key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Seção do Cupom de Desconto */}
                    <div className="mt-6">
                        <label htmlFor="cupom" className="text-sm font-semibold text-rose-800">Cupom de Desconto</label>

                        {/* Se um cupom JÁ ESTIVER aplicado, mostramos a mensagem e o botão de remover */}
                        {cupomAplicado ? (
                            <div className="flex items-center justify-between bg-green-50 text-green-800 p-2 rounded-md mt-1">
                                <span className="text-sm font-semibold">Cupom Aplicado: <strong>{cupomAplicado.codigo}</strong></span>
                                <button onClick={handleRemoverCupom} className="font-bold text-sm hover:text-red-600">Remover</button>
                            </div>
                        ) : (
                            // Se NÃO houver cupom, mostramos o campo para aplicar
                            <>
                                <div className="flex gap-2 mt-1">
                                    <input
                                        id="cupom"
                                        type="text"
                                        value={cupomInput}
                                        onChange={(e) => setCupomInput(e.target.value)}
                                        placeholder="Ex: DESCONTO10"
                                        className="w-full border border-rose-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button
                                        onClick={handleAplicarCupom}
                                        className="bg-rose-800 text-white rounded-md px-4 font-semibold hover:bg-rose-900 transition-colors disabled:bg-gray-400"
                                        disabled={!cupomInput}
                                    >
                                        Aplicar
                                    </button>
                                </div>
                                {mensagemCupom && <p className="text-xs mt-1 text-red-600">{mensagemCupom}</p>}
                            </>
                        )}
                    </div>

                    {/* Resumo do Pedido */}
                    <div className="border-t border-rose-100 mt-6 pt-4 space-y-2 text-rose-800">
                        <div className="flex justify-between"><span>Subtotal</span> <span>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                        {valorDesconto > 0 && (
                            <div className="flex justify-between text-green-600">
                                <span>Desconto ({cupomAplicado.codigo})</span>
                                <span>- {valorDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-lg font-bold text-rose-900">
                            <span>Total</span>
                            <span>{totalFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                    </div>

                    <div className="bg-rose-50 p-3 rounded-lg flex items-center gap-3 mt-6">
                        <FaTruck size={20} className="text-rose-800" />
                        <p className="text-sm text-rose-800">Esta é uma entrega <span className="font-bold">carbono neutro</span>.</p>
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