import "./App.css";
import { useState } from "react";
import { Films } from "./Films";
import FilmList from "./components/filmlist/FilmList";
import FilmAdd from "./components/filmadd/FilmAdd";
import Filtre from "./components/filtre/Filtre";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [filmlist, setFilmlist] = useState(Films);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (note) => {
    setRate(note);
  };
  const handleAdd = (newMovie) => {
    setFilmlist([...filmlist, newMovie]);
  };
  return (
    <div className="App">
      <Filtre
        handleChange={handleChange}
        title={title}
        ratingChanged={ratingChanged}
        rate={rate}
      />
      <FilmList
        filmlist={filmlist.filter(
          (movie) =>
            movie.Title.toUpperCase().includes(title.toUpperCase()) &&
            movie.Global_assessment >= rate
        )}
      />
      <FilmAdd handleAdd={handleAdd} />
    </div>
  );
}

export default App;
