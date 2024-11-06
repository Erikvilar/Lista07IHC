import style from "./Main.module.css";

export default function Main() {
  return (
    <main className={style.main}>
      <section className={style.section1} id="section1">
        <h2>Sobre o evento</h2>
        <div style={{ display: "flex", width: 800, margin: "auto" }}>
          <div style={{ width: 500 }}>
            <p>
              {" "}
              No primeiro dia vai ser realizado um encontro com profissionais da
              área de Tecnologia da Informação e Comunicação da cidade de
              Uberlândia (MG) no auditório do IFTM (19h às 22h)
            </p>
            <p>
              Três profissionais de TIC terão a oportunidade de apresentar temas
              atuais relacionados a área de computação no formato de um TED Talk
              (um evento só com 3 palestras consecutivas).{" "}
            </p>
          </div>
          <img
            src="https://media.licdn.com/dms/image/sync/v2/D5627AQHo5sdtweRSjg/articleshare-shrink_800/articleshare-shrink_800/0/1728515071849?e=2147483647&v=beta&t=J_986mjd0xLprGcvo6tbNlRamFO0uHHK4ZgT55kTAJc"
            alt=""
            width={300}
          />
        </div>
      </section>

      <section className={style.section2}>
        <h2>Organização</h2>
        <div style={{ width: 800, margin: "auto", padding: 10 }}>
          <ul style={{ color: "white", padding: 0, margin: 0 }}>
            <li>
              {" "}
              Cada apresentador terá de 15 a 20 minutos para abordar o tema
              escolhido.
            </li>
            <li>
              No segundo dia, serão oferecidos 4 quarto minicursos.
              <li>
                Das 19h às 22h com vagas limitadas aos inscritos no evento.
              </li>
            </li>
            <li>
              Os minicursos serão oferecidos nos laboratórios de informática do
              IFTM campus Uberlândia Centro.
            </li>
          </ul>
        </div>
      </section>
      <section className={style.section3}>
        <h2>Como participo?</h2>
        <div
          style={{ width: 800, margin: "auto", padding: 10, display: "flex" }}
        >
            <div>
          <p >
            Para participar da 5a edição da STI é necessário se inscrever
            primeiramente na SNCT.</p>
            
            <p>Só após esse passo o participante poderá se
            inscrever nos eventos palestras e minicursos da V STI. 
            </p>

            <p>Cada participante poderá se inscrever em apenas um único minicurso.</p>
            <p>Em relação ao TED TALK ao se inscrever nessa atividade ele estará
            inscrito nas 3 palestras automaticamente.</p>
         
            </div>
          <img src="src\components\images\Shrug-bro.png" alt="" width={300} height={300} style={{paddingLeft:20}}/>
        </div>
      </section>
    </main>
  );
}
