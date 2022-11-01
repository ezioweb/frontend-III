import './style.scss'
export function GamesLista(props) {

    console.log(props)

    return(              

        <li className="games-lista">
              <img src={props.item.picture} alt="" />
              <card className='text-list'>
              <h3>{props.item.name}</h3>
              <p>{props.item.plataforms}</p>
              <span className="categories">{props.item.categories.map(
               (category, index) => {
                    return <a key={index}>{category}</a>
                }
            )}</span>
              <h4>{props.item.price}</h4>
              </card>
           </li>

    )
}