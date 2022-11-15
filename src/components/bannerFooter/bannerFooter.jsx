import "./bannerFooter.css";
import protagonistFooter from "../../imgs/protagonistaFooter.png";
import bgFooter from "../../imgs/bg-footer.png";

const BannerFooter = () => {
  return (
    <article>
      <div className="card__article">
        <div className="container__article">
          <h1>A CAMADA DE PROTEÇÃO EM LOREM IPSUM.</h1>
          <img src={protagonistFooter} alt="" />
          <button className="blue-dark">ESTOU SOBRE LOREM IPSUM</button>
        </div>
      </div>
    </article>
  );
};

export default BannerFooter;
