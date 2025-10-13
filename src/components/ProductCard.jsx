import Buttons from './Buttons';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react'; 

// O ProductCard usa o useContext para buscar as funções e o estado do item, passando-os para o Buttons.
const ProductCard = ({ produto }) => {

    // Acessa as funções e o estado do contexto
    const { 
        adicionarAoCarrinho, 
        aumentarQuantidade, 
        diminuirQuantidade, 
        getItemNoCarrinho 
    } = useContext(CartContext);

    
    // 4. Verifica se este produto está no carrinho usando o ID
    const itemNoCarrinho = getItemNoCarrinho(produto.id);

    return (
        <div>
            <div className="relative">
                <img
                    src={produto.image}
                    alt={produto.name}
                    // Borda condicional
                    className={`w-full h-48 object-cover rounded-lg transition-all ${itemNoCarrinho ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
                />
                {/* div do botão */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[160px]">
                    <Buttons
                        itemNoCarrinho={itemNoCarrinho} 
                        adicionar={() => adicionarAoCarrinho(produto)} // Passa o produto completo ao adicionar
                        aumentar={() => aumentarQuantidade(produto.id)}       // Passa o ID ao aumentar
                        diminuir={() => diminuirQuantidade(produto.id)}       // Passa o ID ao diminuir
                    />
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm text-rose-400">{produto.category}</p>
                <h2 className="font-semibold text-rose-900">{produto.name}</h2>
                <p className="font-semibold text-red-500">
                    {produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;



