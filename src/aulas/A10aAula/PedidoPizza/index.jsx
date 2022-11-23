import { useEffect, useState } from "react";

export function PedidoPizza() {
const[pedido, setPedido]  = useState('')

function cancela(){
  alert("pedido cancelado");
}

  useEffect(() => {
    
    setTimeout(()=>{
      console.log('componente atualizado')
    }, 2000)
    
  },[]);

  return (
    <>
      <p>Qual sabor?</p>
      <input type="text" value={pedido} onChange={event => setPedido(event.target.value)} />
      
      <p>Seu sabor é: {pedido}</p>
      <button onClick={() => cancela()}>Cancelar</button>
    </>
  );
}
