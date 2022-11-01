import "./style.scss";
import netflix1 from "./../../assets/netflix2.jpg";
import netflix2 from "./../../assets/netflix22.jpg";
import netflix3 from "./../../assets/netflix222.jpg";
import { QuintaAulaItem } from "../../components";

export function A5aAula() {
  const componentsFinded = [
    {
      id: 1,
      title: "Vídeo 1",
      image: netflix1,
      text: "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      title: "Vídeo 2",
      image: netflix2,
      text: "Eveniet quas eaque aliquid sequi debitis.",
    },
    {
      id: 3,
      title: "Vídeo 3",
      image: netflix3,
      text: "Nonononononon ononon non nononon onononon ononon.",
    },{
        id: 1,
        title: "Série 1",
        image: netflix1,
        text: "Lorem, ipsum dolor sit amet consectetur",
      },
      {
        id: 2,
        title: "Série 2",
        image: netflix2,
        text: "Eveniet quas eaque aliquid sequi debitis.",
      },
      {
        id: 3,
        title: "Série 3",
        image: netflix3,
        text: "Nonononononon ononon non nononon onononon ononon.",
      }
  ];

  return (
    <div className="quarta-aula-component">
      <h1 className="main-title">Componentes identificados</h1>
      

      {    
      <ul className="components-finded">
        
        {componentsFinded.map((component) => {
          return (
            <QuintaAulaItem 
            key={component.id} 
            item={component}
            />
          );
        })}
      </ul>}
    </div>
  );
}
