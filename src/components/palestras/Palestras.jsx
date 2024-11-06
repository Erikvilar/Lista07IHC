import style from "./Palestras.module.css";

export default function Palestras() {
  return (
    <section className={style.Palestras}>
      <h2>Palestras</h2>
      <div className={style.boxPresentation}>
        <div className={style.person}>
          <img
            src="https://cdn.thedevconf.com.br/photos/34a45002238383eb9638633d3d97a75989558a42.jpg"
            alt="helio rubens"
          />
          <p>Helio Rubens</p>
        </div>
        <div className={style.about}>
            <span>Tema</span>
            <p>sobre</p>
            <p>Assunto abordado</p>
        </div>
      </div>
    </section>
  );
}
