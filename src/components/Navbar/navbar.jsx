import { push as Menu } from "react-burger-menu";
import "../../styles/burger.css";
import "./navbar.css";
import logo from "../../imgs/logo.svg";
import logo2 from "../../imgs/logo2.svg";

const Navbar = () => {
  return (
    <header>
      <a href="/">
        <img id="logo" src={logo} alt="" />
      </a>
      <nav>
        <ul className="list">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#sobre">SOBRE</a>
          </li>
          <li>
            <a href="#funcionalidades">FUNCIONALIDADES</a>
          </li>
          <li>
            <a href="#clientes">CLIENTES</a>
          </li>
        </ul>
      </nav>
      <Menu width="100%" right>
        <ul>
          <img id="logo2" src={logo2} alt="" />
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#sobre">SOBRE</a>
          </li>
          <li>
            <a href="#funcionalidades">FUNCIONALIDADES</a>
          </li>
          <li>
            <a href="#clientes">CLIENTES</a>
          </li>
          <li>
            <a href="https://www.noot.com.br/">
              <button className="blue-dark">ESTOU SOBRE LOREM IPSUM</button>
            </a>
          </li>
        </ul>
      </Menu>
      <a target="_blank" href="https://www.noot.com.br/">
        <button className="blue">ESTOU SOBRE LOREM IPSUM</button>
      </a>
    </header>
  );
};
export default Navbar;
