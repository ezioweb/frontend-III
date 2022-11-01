export function QuintaAulaItem(props) {

    console.log(props)

    return(              

        <li
        
        >
              <img src={props.item.image} alt="" />
              <h1>{props.item.title}</h1>
              <p>{props.item.text}</p>
           </li>

    )
}