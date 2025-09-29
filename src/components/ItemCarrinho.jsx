import { IoMdCloseCircleOutline } from "react-icons/io";
// icone de x
// onRemoverItem: é uma função. Ela não é definida aqui. Ela é passada de um componente pai. o ItemCarrinho aciona o App.jsx
function ItemCarrinho({ item, onRemoverItem }) {
    return (
        <div className="flex justify-between items-center py-4">
            <div>
                <p className="font-semibold text-rose-900 text-sm">{item.nome}</p>
                <div className="flex gap-4 items-center mt-1">
                    <span className="font-bold text-red-600">{item.quantidade}x</span>
                    <span className="text-rose-400">@ R${item.preco.toFixed(2)}</span>
                    <span className="font-semibold text-rose-500">R${(item.quantidade * item.preco).toFixed(2)}</span>
                </div>
            </div>
            
            <button 
              onClick={() => onRemoverItem(item.id)}
              className="text-rose-400 border border-rose-400 rounded-full p-0.5 hover:text-red-600 hover:border-red-600 transition-colors"
            >
                <IoMdCloseCircleOutline size={20}/> 
            </button>
        </div>
    );
}

export default ItemCarrinho;