import "./bannerFooter.css";
import protagonistFooter from "../../imgs/protagonistaFooter.png";

const BannerFooter = () => {
  return (
    <article>
      <div
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos="fade-right"
        className="card__article"
      >
        <div className="container__article">
          <h1>A CAMADA DE PROTEÇÃO EM LOREM IPSUM.</h1>
          <img src={protagonistFooter} alt="" />
          <a target="_blank" href="https://www.noot.com.br/">
            {" "}
            <button className="blue-dark">ESTOU SOBRE LOREM IPSUM</button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default BannerFooter;
