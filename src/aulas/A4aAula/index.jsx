import "./style.scss";
import netflix1 from "./../../assets/netflix2.jpg";
import netflix2 from "./../../assets/netflix22.jpg";
import netflix3 from "./../../assets/netflix222.jpg";
import { QuintaAulaItem } from "../../components/QuintaAulaItem";

export function A4aAula() {
  const componentsFinded = [
    {
      id: 1,
      title: "Vídeo",
      image: netflix1,
      text: "Lorem, ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      title: "Input",
      image: netflix2,
      text: "Eveniet quas eaque aliquid sequi debitis.",
    },
    {
      id: 3,
      title: "Terceiro",
      image: netflix3,
      text: "Nonononononon ononon non nononon onononon ononon.",
    },
  ];

  return (
    <div className="quarta-aula-component">
      <h1 className="main-title">Componentes identificados</h1>
      <ul className="components-finded">
        {/* código javascript */}
        {componentsFinded.map((component) => {
          return (

            <li key={component.id}>
              <img src={component.image} alt="" />
              <h1>{component.title}</h1>
              <p>{component.text}</p>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
}
