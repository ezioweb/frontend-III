import { useEffect, useState } from "react";

export function A10aAula() {
  // hook
  const [contador, setContador] = useState(0);
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const[errorForm, setErrorForm] = useState(false)

  function adicionar() {
    setContador(contador +1);
  }
  function validar() {
    setErrorForm(true)
  }

  useEffect(() => {
    console.log(userName);
    if(userName.length < 10){
        setUserNameError(true)
    }else{
        setUserNameError(false)
    }

  },[userName]);

  return (
    <>
      <input type="text" value={userName} onChange={event => setUserName.target.value} />
      
      <p>O valor do contatador é: {contador}</p>
      <button onClick={() => adicionar()}>Atualizar</button>
    </>
  );
}