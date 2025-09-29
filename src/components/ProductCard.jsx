import Buttons from './Buttons';

// 1. Importando cada imagem estaticamente. existe uma maneira melhor?
import waffleImg from '/src/assets/image-waffle-tablet.jpg';
import cakeImg from '/src/assets/image-cake-mobile.jpg';
import brownieImg from '/src/assets/image-brownie-desktop.jpg';

// 2. Criando um "mapa" para associar o nome do arquivo à imagem importada
const mapDeImagens = {
  'image-waffle-tablet.jpg': waffleImg,
  'image-cake-mobile.jpg': cakeImg,
  'image-brownie-desktop.jpg': brownieImg,
};

//aqui temos o nosso card. nele terá uma img, botão + e -, categoria nome do produto e o preco. por meio de props vamos ter a funcao do botão de adicionar, ter o item no carrinho,aumentar e diminuir itens no botão. assim deixamos o card totalmente reutilizavel.
function ProductCard({ produto, onAdicionarAoCarrinho, onAumentarQuantidade, onDiminuirQuantidade, itemNoCarrinho }) {
  return (
    <div>
      <div className="relative">
        <img
          // 3. Usando o mapa para encontrar a imagem correta
          src={mapDeImagens[produto.imagem]}
          alt={produto.nome}
          // {/* o itemNoCarrinho foi criado no app.jsx, para que quando usar o metodo find() possa dar true ou false*/}
          className={`w-full h-48 object-cover rounded-lg transition-all ${itemNoCarrinho ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
        />

        {/* div do botão */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[160px]">
         {/* //aqui criamos uma logica para q a imagem do card fique com uma borda red ao ser selecionado quando vai ao carrinho */}
          <Buttons
            itemNoCarrinho={itemNoCarrinho}
            adicionar={() => onAdicionarAoCarrinho(produto)}
            aumentar={() => onAumentarQuantidade(produto.id)}
            diminuir={() => onDiminuirQuantidade(produto.id)}
          />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm text-rose-400">{produto.categoria}</p>
        <h2 className="font-semibold text-rose-900">{produto.nome}</h2>
        <p className="font-semibold text-red-500">R${produto.preco.toFixed(2)}</p> 
        {/* o toFixed() serve para deixar duas casas decimais no preço */}
      </div>
    </div>
  );
}

export default ProductCard;

