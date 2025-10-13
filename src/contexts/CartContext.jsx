import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

// Lista de cupons válidos
const CUPONS_VALIDOS = {
    'DESCONTO10': 0.10, // 10%
    'CAMILA20': 0.20,    // 20%
};

const CartProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [cupom, setCupom] = useState(null);

    // --- FUNÇÕES PARA O PRODUCTCARD ---
    const adicionarAoCarrinho = (produto) => {
        const itemExistente = carrinho.find(item => item.id === produto.id);
        if (itemExistente) {
            setCarrinho(carrinho.map(item =>
                item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
            ));
        } else {
            setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
        }
    };

    const aumentarQuantidade = (id) => {
        setCarrinho(carrinho.map(item =>
            item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
        ));
    };

    const diminuirQuantidade = (id) => {
        const itemExistente = carrinho.find(item => item.id === id);
        if (itemExistente?.quantidade === 1) {
            setCarrinho(carrinho.filter(item => item.id !== id));
        } else {
            setCarrinho(carrinho.map(item =>
                item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
            ));
        }
    };

    const getItemNoCarrinho = (id) => carrinho.find(item => item.id === id);

      // --- FUNÇÕES PARA O ITEMCARRINHO ---
    const removerDoCarrinho = (id) => {
        setCarrinho(carrinho.filter(item => item.id !== id));
    };

    //PARA O CUPOM, A FUNÇÃO DO CUPOM ESTÁ NO CONTEXT
    const limparCarrinho = () => {
        setCarrinho([]);
        setCupom(null);
    };

    const aplicarCupom = (codigo) => {
        if (CUPONS_VALIDOS[codigo]) {
            setCupom({ codigo, desconto: CUPONS_VALIDOS[codigo] });
            return { success: true, message: 'Cupom aplicado!' };
        }
        return { success: false, message: 'Cupom inválido.' };
    };

      const removerCupom = () => {
        setCupom(null);
    };

    // --- CÁLCULOS PARA O CARRINHO ---
    const totais = useMemo(() => {
        const subtotal = carrinho.reduce((total, item) => total + (item.price * item.quantidade), 0);
        const valorDesconto = cupom ? subtotal * cupom.desconto : 0;
        const totalFinal = subtotal - valorDesconto;
        return { subtotal, valorDesconto, totalFinal };
    }, [carrinho, cupom]);

    const contexto = {
        carrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        getItemNoCarrinho,
        removerDoCarrinho, // Adicionado
        limparCarrinho,   // Adicionado
        aplicarCupom,     // Adicionado
        cupomAplicado: cupom,  removerCupom, // Adicionado
        ...totais // Adicionado (subtotal, valorDesconto, totalFinal)
    };

    return (
        <CartContext.Provider value={contexto}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;