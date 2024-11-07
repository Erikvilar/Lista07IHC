import { Accordion } from "react-bootstrap";
import style from "./Minicursos.module.css";
export default function Minicursos() {
  return (
    <section className={style.boxMinicursos}>
      <h2>Minicursos</h2>
      <p style={{textAlign:'center', width:800, margin:"auto"}}>Além das palestras a instituição oferta minicursos gratuitos na semana Nacional de Ciência e Tecnologia SNCT, confira mais nas seções abaixo, lembramos que as vagas são limitadas o horario e das 19h ás 22h, não perca</p>
      <div style={{ width: 900, display: "flex", margin: "auto" }}>
        <img src="src\components\images\Website Creator-bro.png" width={350} height={350} style={{paddingTop:40}} />
        
        
        <div style={{ width: 550,height:800 }}>
          <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0" style={{border:"none"}}>
              <Accordion.Header className={style.accordionCustom}>
              Implementando um assistente com IA  generativa. Não há pré-requisito para fazer o minicurso.
             
             </Accordion.Header>
              <Accordion.Body style={{paddingTop:50}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={{border:"none"}}>
            
              <Accordion.Header className={style.accordionCustom}>Copilot: Seu Assistente de IA para Programação.
              Para fazer o minicurso é necessário ter Conhecimento de lógica de programação.</Accordion.Header>
            
              <Accordion.Body style={{paddingTop:50}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={{border:"none"}}>
            
              <Accordion.Header className={style.accordionCustom}>Criando e gerenciando containers com o Docker. Para fazer o
minicurso é necessário ter conhecimento básico em programação desejado básico em
programação web</Accordion.Header>
            
              <Accordion.Body style={{paddingTop:50}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
