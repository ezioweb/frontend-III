import "./style.scss";
import netflix2 from "../../assets/netflix2.jpg";
import logo_dh from "../../assets/logo-dh 1.svg";

export function A3aAula() {
  const components = [
    {
      name: "Component Navibar",
      descripion: "test 1",
      image:
        netflix2,
    },
    { name: "Component Card 2", descripion: "test 2", image:
    "https://occ-0-1309-2430.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTrLYiLITLkZxJZ5AcUSrMgTnk3761DtNmm9TY_I0mUPo8QYyDWdH9swJ0jBrpq18lXwQi_qdIWCmoQdrt7wbmhncWh38WQmeDs.webp?r=ffe", },
    { name: "Component Card 3", descripion: "test 3", image: logo_dh },
    { name: "Component Card 4", descripion: "test 4", image: "" },
  ];

  return (
    <main className='terceira-aula-main'>
      <h2>Terceira Aula</h2>
      <h1>Lista de componentes</h1>
      <ul>
                <li>Navbar</li>
                <li>Banner</li>
                <li>Section/Cards</li>
      </ul>
      <ul>
        {components.map((component) => (
            <li>
            <h1>{component.name}</h1>
            <img src={component.image} />            
            <p>{component.descripion}</p>
          </li>
        ))
}
      </ul>
    </main>
  );
}
