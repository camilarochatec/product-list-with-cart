// src/components/ItemCarrinho.jsx

import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function ItemCarrinho({ item }) {
    const { removerDoCarrinho } = useContext(CartContext);

    return (
        // Adicionamos 'items-start' para alinhar a imagem e o texto no topo
        <div className="flex justify-between items-start py-4">
            <div className="flex items-center gap-4"> {/* Novo container para imagem + texto */}
                
                {/* IMAGEM ADICIONADA AQUI */}
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-md object-cover"
                />

                <div>
                    <p className="font-semibold text-rose-900 text-sm">{item.name}</p>
                    <div className="flex gap-4 items-center mt-1">
                        <span className="font-bold text-red-600">{item.quantidade}x</span>
                        <span className="text-rose-400">@ {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-end">
                <span className="font-semibold text-rose-800 mb-2">
                    {(item.quantidade * item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <button 
                    onClick={() => removerDoCarrinho(item.id)}
                    className="text-rose-400 border border-rose-400 rounded-full p-0.5 hover:text-red-600 hover:border-red-600 transition-colors"
                    aria-label={`Remover ${item.name} do carrinho`}
                >
                    <IoMdCloseCircleOutline size={20}/> 
                </button>
            </div>
        </div>
    );
}

export default ItemCarrinho;