// src/App.jsx

import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import CartProvider from './contexts/CartContext';
import Carrinho from './components/Carrinho'; // Importe o Carrinho
import ModalConfirmacao from './components/ModalConfirmacao'; // Importe o Modal

const App = () => {
    const [produtos, setProdutos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    function buscarProdutos() {
        // O ideal é que o arquivo api.json esteja na pasta `public`
        fetch('api/api.json') 
            .then(resposta => resposta.json())
            .then(json => {
                setProdutos(json);
            })
    }
 
    useEffect(() => {
        buscarProdutos();
    }, []);

    const handleConfirmarPedido = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // A lógica de limpar o carrinho já está no Modal e no Contexto!
    };

    return (
        <CartProvider>
            <main className="max-w-6xl mx-auto p-4 lg:p-8 font-sans bg-rose-50 min-h-screen">
                <div className="lg:flex lg:gap-8">
                    {/* Coluna da Esquerda: Lista de Produtos */}
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl font-bold text-rose-900 mb-8">Sobremesas</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                            {produtos.map((produto) => (
                                <ProductCard
                                    key={produto.id}
                                    produto={produto} //Aqui está a passagem do produto para o ProductCard.
                                />
                            ))}
                        </div>
                    </div>

                    {/* Coluna da Direita: Carrinho */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <Carrinho onConfirmarPedido={handleConfirmarPedido} />
                    </div>
                </div>
            </main>
            
            {/* Renderização condicional do Modal */}
            <ModalConfirmacao 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            />
        </CartProvider>
    );
}

export default App;