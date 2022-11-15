import { push as Menu } from "react-burger-menu";
import "../../styles/burger.css";
import "./navbar.css";
import logo from "../../imgs/logo.svg";
import logo2 from "../../imgs/logo2.svg";

const Navbar = () => {
  function showSettings(Event) {
    Event.preventDefault();
  }

  return (
    <header>
      <a href="/">
        <img id="logo" src={logo} alt="" />
      </a>
      <nav>
        <ul className="list">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SOBRE</a>
          </li>
          <li>
            <a href="">FUNCIONALIDADES</a>
          </li>
          <li>
            <a href="">CLIENTES</a>
          </li>
        </ul>
      </nav>
      <Menu right>
        <ul>
          <img id="logo2" src={logo2} alt="" />
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SOBRE</a>
          </li>
          <li>
            <a href="">FUNCIONALIDADES</a>
          </li>
          <li>
            <a href="">CLIENTES</a>
          </li>
          <li>
            <button className="blue-dark">ESTOU SOBRE LOREM IPSUM</button>
          </li>
        </ul>
      </Menu>
      <button className="blue">ESTOU SOBRE LOREM IPSUM</button>
    </header>
  );
};
export default Navbar;
