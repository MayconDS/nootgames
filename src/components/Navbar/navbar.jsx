import { push as Menu } from "react-burger-menu";
import "../../styles/burger.css";
import "./navbar.css";
import logo from "../../imgs/logo.svg";
import logo2 from "../../imgs/logo2.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [headerActive, setHeaderActive] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={headerActive ? "active" : ""}>
      <a href="/">
        <img
          style={headerActive ? { display: "none" } : { display: "block" }}
          id="logo"
          src={logo}
          alt=""
        />
        <img
          style={headerActive ? { display: "block" } : { display: "none" }}
          id="logo2"
          src={logo2}
          alt=""
        />
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
              <button id="inBurger" className="blue-dark">
                ESTOU SOBRE LOREM IPSUM
              </button>
            </a>
          </li>
        </ul>
      </Menu>
      <a target="_blank" href="https://www.noot.com.br/">
        <button id="outBurger" className={headerActive ? "blue-dark" : "blue"}>
          ESTOU SOBRE LOREM IPSUM
        </button>
      </a>
    </header>
  );
};
export default Navbar;
