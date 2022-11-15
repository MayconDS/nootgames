import "./styles/app.css";
import "aos/dist/aos.css";

import AOS from "aos";

import BoxGray from "./components/box-gray/boxGray";
import Navbar from "./components/Navbar/navbar";
import CardGreen from "./components/card-green/cardGreen";
import BannerFooter from "./components/bannerFooter/bannerFooter";

import logo2 from "./imgs/logo2.png";
import minecraft2 from "./imgs/minecraft2.png";
import gta from "./imgs/gta.png";
import dragon from "./imgs/dragon.png";
import warrior from "./imgs/warrior.png";
import monkey from "./imgs/monkey.png";
import steve from "./imgs/steve.png";

import { cardContent } from "./cardContent";
function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar />
      <section className="intro">
        <img
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos="fade-right"
          id="monkey"
          src={monkey}
          alt=""
        />
        <div
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos="fade-up"
          className="intro__content"
        >
          <h1>
            LOREM IPSUM E MAIS QUE
            <br />
            UM TEXTO SALVA VIVDAS.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a target="_blank" href="https://www.noot.com.br/">
            {" "}
            <button className="blue">CADASTRAR-SE</button>
          </a>
        </div>
        <img
          data-aos-duration="1000"
          data-aos-delay="150"
          data-aos="fade-left"
          id="steve"
          src={steve}
          alt=""
        />
      </section>
      <article className="box">
        <BoxGray />
      </article>
      <section className="benefits">
        <div
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos="fade-up"
          className="container__benefits"
        >
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
            <img
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos="fade-right"
              id="dragon"
              src={dragon}
              alt=""
            />
            <div
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos="fade-up"
              className="callout__content"
            >
              <h1>TUDO É FEITO EM LOREM IPSUM SEM PROBLEMA ALGUM.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu.
              </p>
              <a target="_blank" href="https://www.noot.com.br/">
                {" "}
                <button className="blue-dark">CADASTRAR-SE</button>
              </a>
            </div>
            <img
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos="fade-left"
              id="warrior"
              src={warrior}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="about">
        <div
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos="fade-right"
          className="container__about"
        >
          <div className="leftSide">
            <h1>SOMOS UMA EXTENSÃO EM LOREM IPSUM.</h1>
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
        <div
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos="fade-left"
          className="container__about2"
        >
          <div className="leftSide2">
            <img src={gta} alt="" />
          </div>
          <div className="rightSide2">
            <h1>PRECISA DE UM LOREM IPSUM?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a target="_blank" href="https://www.noot.com.br/">
              {" "}
              <button className="blue">ENTRAR EM CONTATO</button>
            </a>
          </div>
        </div>
      </section>
      <footer>
        <BannerFooter />
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
