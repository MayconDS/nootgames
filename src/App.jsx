import BoxGray from "./components/box-gray/boxGray";
import Navbar from "./components/Navbar/navbar";
import CardGreen from "./components/card-green/cardGreen";

import logo2 from "./imgs/logo2.png";
import protagonistFooter from "./imgs/protagonistaFooter.png";
import minecraft2 from "./imgs/minecraft2.png";
import gta from "./imgs/gta.png";
import dragon from "./imgs/dragon.png";
import warrior from "./imgs/warrior.png";
import monkey from "./imgs/monkey.png";
import steve from "./imgs/steve.png";

import { cardContent } from "./cardContent";

import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="intro">
        <img id="monkey" src={monkey} alt="" />
        <div className="intro__content">
          <h1>
            LOREM IPSUM E MAIS QUE
            <br />
            UM TEXTO SALVA VIVDAS.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="blue">CADASTRAR-SE</button>
        </div>
        <img id="steve" src={steve} alt="" />
      </section>
      <article className="box">
        <BoxGray />
      </article>
      <section className="benefits">
        <div className="container__benefits">
          <h1>
            PROTEÇÃO PARA ATAQUES
            <br />
            DE LOREM IPSUM.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid__2">
            {cardContent.map((item) => (
              <CardGreen
                bg={item.bg}
                icon={item.icon}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="callout">
        <div className="container__callout">
          <div className="ct">
            <img id="dragon" src={dragon} alt="" />
            <div className="callout__content">
              <h1>TUDO É FEITO EM LOREM IPSUM SEM PROBLEMA ALGUM.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu.
              </p>
              <button className="blue-dark">CADASTRAR-SE</button>
            </div>
            <img id="warrior" src={warrior} alt="" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container__about">
          <div className="leftSide">
            <h1>
              SOMOS UMA
              <br />
              EXTENSÃO EM
              <br />
              LOREM IPSUM.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequa.
            </p>
          </div>
          <div className="rightSide">
            <img src={minecraft2} alt="" />
          </div>
        </div>
        <div className="container__about">
          <div className="leftSide2">
            <img src={gta} alt="" />
          </div>
          <div className="rightSide2">
            <h1>
              PRECISA DE
              <br />
              UM LOREM
              <br />
              IPSUM?
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="blue">ENTRAR EM CONTATO</button>
          </div>
        </div>
      </section>
      <footer>
        <article>
          <div className="card__article">
            <div className="container__article">
              <h1>
                A CAMADA
                <br />
                DE PROTEÇÃO
                <br />
                EM LOREM
                <br />
                IPSUM.
              </h1>
              <img src={protagonistFooter} alt="" />
              <button className="blue-dark">ESTOU SOBRE LOREM IPSUM</button>
            </div>
          </div>
        </article>
        <div className="container__footer">
          <div id="line__footer"></div>
          <div className="credits">
            <span>
              © <b>Noot Games.</b> Todos os direitos reservados.
            </span>
            <a href="">
              {" "}
              <img src={logo2} alt="" />{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
