import style from "./Palestras.module.css";

export default function Palestras() {
  return (
    <section className={style.Palestras}>
      <h2>Palestras</h2>
      <div className={style.boxPresentation}>
        <div className={style.person}>
          <img
            src="https://cdn.thedevconf.com.br/photos/34a45002238383eb9638633d3d97a75989558a42.jpg"
            alt="Helio Rubens"
          />
          <p style={{ paddingTop: 20, fontFamily: "Roboto", fontWeight: 700 }}>
            Helio Rubens
          </p>
          <p style={{ paddingTop: 5, fontFamily: "Roboto", fontWeight: 500 }}>
            Líder de Arquitetura de Soluções na AWS
          </p>
        </div>
        <div className={style.about}>
          <span>
            Uso de cloud computing na jornada de sustentabilidade das empresas
          </span>
          <p
            style={{
              paddingTop: 20,
              fontFamily: "Montserrat",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Sustentabilidade está na lista de prioridades de líderes de
            tecnologia e de empresas. Computação em nuvem tem um papel
            fundamental na jornada de melhorar e medir as métricas de
            sustentabilidade de TI. Como isto acontece? Como dar o 1o. passo?
            Como a AWS está ajudando empresas no mundo todo a ser mais
            sustentáveis?
          </p>
          <div className={style.boxAbout}>
            <div style={{ backgroundColor: "#F6FB7A" }}>
              <h3>Quem sou eu?</h3>

              <p>especialista no mercado educacional.</p>
              <p>Profissional certificado AWS.</p>
            </div>
            <div style={{ backgroundColor: "#B4E380" }}>
              <h3>Minha formação</h3>
              <p>
                Formação Internacional em Gerenciamento Estratégico de TI e
                Inovação pela Infosys em Mysore Índia;
              </p>
            </div>
            <div style={{ backgroundColor: "#88D66C" }}>
              <h3>Carreira profissional</h3>
              <p>
                Já atuou como executivo de TI em empresas como Bradesco Cartões,
                American Express e Startups.
              </p>
            </div>
            <div style={{ backgroundColor: "#73BBA3" }}>
              <h3>Conquistas</h3>
              <p>
                Premiado pela IT Mídia e PricewaterhouseCoopers em prémios de
                inovação por 5 anos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.boxPresentation} style={{ marginTop: 120 }}>
        <div className={style.person}>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHFLjDqiOKyZg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726176509058?e=1736380800&v=beta&t=_Wc6W7Jm7C6kpyPI_T46lxiSj7a15u0e0TW-8NDXl1E"
            alt="Helton Valentini"
          />
          <p style={{ paddingTop: 20, fontFamily: "Roboto", fontWeight: 700 }}>
            Helio Rubens
          </p>
          <p style={{ paddingTop: 5, fontFamily: "Roboto", fontWeight: 500 }}>
            Sócio-diretor na Ene Soluções
          </p>
        </div>
        <div className={style.about}>
          <span>Seja o dono da sua carreira</span>
          <p
            style={{
              paddingTop: 20,
              fontFamily: "Montserrat",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Um framework para avaliar e direcionar sua carreira. Não importa em
            qual estágio você esteja.
          </p>
          <div className={style.boxAbout}>
            <div style={{ backgroundColor: "#F6FB7A" }}>
              <h3>Quem sou eu?</h3>
              <p>
                Sócio-diretor na Ene Soluções com uma solida experiência de 20
                anos.
              </p>
            </div>
            <div style={{ backgroundColor: "#B4E380" }}>
              <h3>Minha formação</h3>
              <p>Bacharel em Sistemas de Informação pela UNITRI;</p>
              <p>
                Master in Business and Entrepreneurship pela Link School of
                Business.
              </p>
            </div>
            <div style={{ backgroundColor: "#88D66C" }}>
              <h3>Carreira profissional</h3>
              <p>
                Minha carreira abrangeu diversos cargos, desde Analista de
                Suporte até Engenheiro de Software, atendendo clientes de
                diversos setores.
              </p>
            </div>
            <div style={{ backgroundColor: "#73BBA3" }}>
              <h3>Conquistas</h3>
              <p>
                Criei alianças estratégicas, articulando habilidades cruciais
                para o sucesso tanto da equipe quanto da empresa e do cliente.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.boxPresentation} style={{ marginTop: 120 }}>
        <div className={style.person}>
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_lPwtYUsao2VhacE9F0X50O0gFXZoLTUR99IR7xJQt81rc=s900-c-k-c0x00ffffff-no-rj"
            alt="Almir Garcia Fernandes"
          />
          <p style={{ paddingTop: 20, fontFamily: "Roboto", fontWeight: 700 }}>
            Almir Garcia Fernandes
          </p>
          <p style={{ paddingTop: 5, fontFamily: "Roboto", fontWeight: 500 }}>
            professor no curso de graduação de Direito na UFU
          </p>
        </div>
        <div className={style.about}>
          <span>A Lei Geral de Proteção de Dados LGPD na Internet</span>
          <p
            style={{
              paddingTop: 20,
              fontFamily: "Montserrat",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Um debate a respeito da Lei Geral de Proteção de dados LGPD,
            promovendo conhecimento e sabedoria.
          </p>
          <div className={style.boxAbout}>
            <div style={{ backgroundColor: "#F6FB7A" }}>
              <h3>Quem sou eu?</h3>

              <p>professor no curso de graduação de Direito na UFU</p>
              <p> Graduado em Direito UFU</p>
            </div>
            <div style={{ backgroundColor: "#B4E380" }}>
              <h3>Minha formação</h3>
           
              <p>Mestre em relações econômicas UNIFRAN</p>
              <p>Doutor em Direito Empresarial PUC</p>
            </div>
            <div style={{ backgroundColor: "#88D66C" }}>
              <h3>Carreira profissional</h3>
              <p>
              Advogado especialista em direito empresarial. Professor do
              curso de Direito da UNITRI de 2000 a 2002.
              </p>
            </div>
            <div style={{ backgroundColor: "#73BBA3" }}>
              <h3>Atuei recentemente como</h3>
              <p>
              Professor do curso de Direito do Centro
              Universitário do Planalto de Araxá Uniaraxá de 2000 a 2019.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
