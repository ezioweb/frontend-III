import './style.scss'
import logo from "../../assets/logo-dh 1.svg";
export function Header() {
  return (
    <>
      <header>
        <div className="dh-logo">
          <img src={logo} alt="" />
          <h1>Frontend III - Digital House</h1>
        </div>
      </header>
    </>
  );
}
