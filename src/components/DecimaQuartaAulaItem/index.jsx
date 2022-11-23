
import { useState } from "react"
import { useEffect } from "react"

export function DecimaQuartaAulaItem(props) {

    // const [registerDeleted, setRegisterDeleted] = useState(false)
    const [formInvalid, setFormInvalid] = useState(false)

    function validarFormulario() {

        // {...}

        setFormInvalid(!formInvalid)

    }



    function deletarRegistro() {

        // Utilizando a Função para comunicar o Componente Pai
        props.deleteRegister(props.registerData)

    }



    useEffect(() => {

        console.log('O componente foi Construído')
        //O return dentro do useEffect serve para "destruir" o component
        return () => console.log('O componente foi Destruído')
        //Quando tem o array vazio o useEffect vai ser executado no carregamento da página
    }, [])



    // useEffect que será acionado quando a variavel formValid for alterada
    useEffect(() => {

        if(formInvalid) {

            // console.log('O formulario está invalido')

        } else {

            // console.log('O formulário está valido')

        }

    }, [formInvalid])

    return(

        <li>
            <h1>{props.registerData.title}</h1>
            <button onClick={() => deletarRegistro()}>Deletar</button>
        </li>

    )

}