import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function A15aAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')

    function searchCep(cepRecieved) {
        setCep(cepRecieved)
        if(cepRecieved.length === 8) {
            fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
                response => {
                    response.json().then(
                        address => {
                            if(address.erro !== undefined) {
                                // Deu erro
                            } else {
                                // Deu Sucesso
                                setLocations([...locations, address])
                            }})})}}

    function deleteLocation(currentLocation) {
        console.log(currentLocation)
    }

    return(
        
        <div className="decima-quarta-aula-component">

            <form>
                <h1>Cadastrar endereços</h1>
                <div>
                    <label>Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                    />
                </div>
                <button>Cadastrar</button>
            </form>
          
            <section className="locations">
                {
                    locations.map(
                        (location, index) => (
                            <DecimaQuintaAulaItem
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                            />
                        )
                    )
                }

            </section>
            <Link to="/decima-quarta-aula">
                <button>Aula Anterior</button>
                </Link>
            
            

        </div>

    )
}