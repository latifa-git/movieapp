import "./App.css";
import {useState} from "react"
import { Films } from "./Films";
import FilmList from "./components/filmlist/FilmList";
import FilmAdd from "./components/filmadd/FilmAdd";
import Filtre from "./components/filtre/Filtre";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [filmlist, setFilmlist] = useState(Films)
  return <div className="App">
    <FilmList filmlist={filmlist}/>
    <Filtre/>
    <FilmAdd/>
  </div>;
}

export default App;
