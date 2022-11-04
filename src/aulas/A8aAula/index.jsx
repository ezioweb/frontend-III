import { useState } from "react";
import { SetimaAulaCardProduto } from "../../components/SetimaAulaCardProduto";
import "./style.scss";

export function A8aAula() {
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [fotoProduto, setFotoProduto] = useState("");
  const [formularioErro, setFormularioErro] = useState(false);
  const products = [
    {
      id: 1,
      name: "Xbox",
      price: "3.000",
      picture:
        "https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp",
    },
    {
      id: 2,
      name: "Playstation 5",
      price: "5.000",
      picture:
        "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
    },
    {
      id: 3,
      name: "Switch",
      price: "2.000",
      picture:
        "https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp",
    },
  ];
  const [allProducts, setAllProducts] = useState(products);
 

  function cadastrarProduto(event) {
    event.preventDefault();
    const novoProdutoCadastrado = {
      name: nomeProduto,
      price: precoProduto,
      picture: fotoProduto,     
    }
    
    if (nomeProduto === '' || precoProduto === '') {

        setFormularioErro(true)

    } else {

        setFormularioErro(false)

        setAllProducts([...allProducts, novoProdutoCadastrado])

        setNomeProduto('')
        setPrecoProduto('')
        setFotoProduto('')

    }

    console.log(opcao)

}
  return (
    <main className="setima-aula-component">
      <div className="tittle-wrapper">
        <h1>Produtos</h1>
      </div>
      <form className={formularioErro ? "form-error" : ""} onSubmit={cadastrarProduto}>
        {/* </form><form onSubmit={event => cadastrarProduto(event)}> */}
        <div>
          <label htmlFor="nomeProduto">Nome produto</label>
          <input
            id="nomeProduto"
            type="text"
            value={nomeProduto}
            onChange={(event) => setNomeProduto(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="precoProduto">Preço produto</label>
          <input
            id="precoProduto"
            type="number"
            value={precoProduto}
            onChange={(event) => setPrecoProduto(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fotoProduto">Foto produto</label>
          <input
            id="fotoProduto"
            type="url"
            value={fotoProduto}
            onChange={(event) => setFotoProduto(event.target.value)}
          />
        </div>
        <button type="submit">Cadastrar produto</button>
      </form>
      {
        formularioErro ? (
            <span>Seu formulário contem erros</span>
        ): null
      }
      
      <section className="products">
        {allProducts.map((product) => {
          return <SetimaAulaCardProduto productData={product} />;
        })}
      </section>
    </main>
  );
}
