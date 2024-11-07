import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Minicursos from "./components/minicursos/Minicursos"
import Palestras from "./components/palestras/Palestras"
import "./components/style/html.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Palestras/>
    <Minicursos/>
    </>
  )
}

export default App
