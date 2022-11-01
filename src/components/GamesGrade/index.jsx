import './style.scss'
export function GamesGrade(props) {

    console.log(props)

    return(              

        <li className="games-grade">
              <img src={props.item.picture} alt="" />
              <h1>{props.item.name}</h1>
              <p>{props.item.plataforms}</p>
              <span className="categories">{props.item.categories.map(
                category => {
                    return <a>{category}</a>
                }
            )}</span>


              <h3>{props.item.oldPrice}</h3>
              <h2>{props.item.newPrice}</h2>
           </li>

    )
}