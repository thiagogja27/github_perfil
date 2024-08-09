import { useState } from "react";
import Perfil from "./components/Perfil";
/*import Formulario from "./components/Formulario";*/
import ReposList from "./components/ReposList"; 




function App() {
  // eslint-disable-next-line no-unused-vars
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario,setNomeUsuario] = useState('')

  return (
    <>
    <input className="input"  placeholder="Digite um usuario do Github" type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
    <button>Pesquisar</button>
      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      {/*{formularioEstaVisivel && <Formulario />}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">
        Toggle Form
      </button>*/}
    </>
  );
}

export default App;
