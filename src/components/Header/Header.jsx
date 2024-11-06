import { Link } from "react-router-dom";
import style from "./Header.module.css";
function Header() {
  return (
    <section className={style.Header}>
      <nav style={{ padding: 5 }}>
        <img
          src="https://iftm.edu.br/conerer/img/Horizontal%20resumida.png"
          width={100}
        />
      </nav>
      <div className={style.backdrop}>
        <div>
          <h1>
            Semana de Tecnologia da Informação <p>STI 18 e 19/10/23</p>
          </h1>
          <p className={style.sobre}>
            Este evento vai ser realizado dentro de um evento maior, conhecido
            como Semana Nacional de Ciência e Tecnologia (SNCT), no IFTM campus
            Uberlândia Centro.
          </p>
          <a href="#section1">
            <button>Veja mais</button>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Header;
