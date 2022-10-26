import "./style.scss";
import netflix2 from "../../assets/netflix2.jpg";
import netflixnav from "../../assets/netflixnav.jpg";
import logo_dh from "../../assets/logo-dh 1.svg";

export function A3aAula() {
  const components = [
    {
      name: "Navibar",
      descripion: "Barra de navegação",
      image: netflixnav,
    },
    {
      name: "Banner",
      descripion: "Benner principal",
      image: netflix2,
    },
    {
      name: "Component Card",
      descripion: "card de filme/série",
      image:
        "https://occ-0-1309-2430.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTrLYiLITLkZxJZ5AcUSrMgTnk3761DtNmm9TY_I0mUPo8QYyDWdH9swJ0jBrpq18lXwQi_qdIWCmoQdrt7wbmhncWh38WQmeDs.webp?r=ffe",
    },
    {
      name: "Component Card",
      descripion: "card de filme/série",
      image:
        "https://occ-0-1309-2430.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS86rBQYM6pL6ynnqG0d1gmpmSAmvUs1OlXRAhX8TA03wCLv6gN37T4-_9KzhWKfaf4MecaWf7CUDCPoatmOW-ozvMg_1EwcGHM.webp?r=906",
    },
    {
      name: "Component Card",
      descripion: "card de filme/série",
      image:
        "https://occ-0-1309-2430.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbzF1Exfg0kuD7MQFbFMW_KtfOS93ajcSvKUIosfHW96Qf3gHob73Lth9BUX6Yb5zTcVfBIdQ2wG2Wmit8ZavjIdQSJFgy9Mtp8dpq8KxfKRnPmyVmqbMvXKMZNRrQMY_fAW.jpg?r=f37",
    },
    {
      name: "Component Card",
      descripion: "card de filme/série",
      image:
        "https://occ-0-1309-2430.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ6RqqRBvZXMWQHoCAl1EGnXUrY3-uyry7wyxsTQ-GzKjfYbgp1JI_vCklKDKgl2K2y90i9lAi6AHad33hDmVMuC3dAsuR7qCFjg2LKaw1b3czGOMdWZTYq2nUn51u2rfkMl_rDLIgk4lXRXxhp0fYXZn7TiMu2JxLC2FM62k9HaStkRoUWrC1MPyTRyRFQ.jpg?r=6cb",
    },
  ];

  return (
    <main className="terceira-aula-main">
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
        ))}
      </ul>
    </main>
  );
}
