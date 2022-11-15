import "./boxGray.css";

import boxGray from "../.././imgs/box-gray.png";

import fluxo from "../../imgs/fluxo.png";
import alta from "../../imgs/alta.png";
import enxada from "../../imgs/enxada.png";
import gamersclub from "../../imgs/gamersclub.png";
import neephost from "../../imgs/neephost.png";
import outplay from "../../imgs/outplay.png";

const BoxGray = () => {
  return (
    <article id="box">
      <div className="container-box">
        <img id="box__gray" src={boxGray} alt="" />
        <div className="sideLeft">
          <div className="texts">
            <h1>ATÉ LOREM IPSUM, CONFIA.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
          </div>
        </div>
        <div className="sideRight">
          <div className="grid-2">
            <div className="card">
              <img src={outplay} alt="" />
            </div>
            <div className="card">
              <img src={enxada} alt="" />
            </div>
            <div className="card">
              <img src={alta} alt="" />
            </div>
            <div className="card">
              <img src={neephost} alt="" />
            </div>
            <div className="card">
              <img src={gamersclub} alt="" />
            </div>
            <div className="card">
              <img src={fluxo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default BoxGray;
