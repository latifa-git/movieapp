import "./App.css";
import { useState } from "react";
import { Films } from "./Films";
import FilmList from "./components/filmlist/FilmList";
import FilmAdd from "./components/filmadd/FilmAdd";
import Filtre from "./components/filtre/Filtre";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Roooter from "./components/rooter/Roooter";

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
      <Router>
        <Filtre
          handleChange={handleChange}
          title={title}
          ratingChanged={ratingChanged}
          rate={rate}
        />  <Route path="/" exact render={() =>  
      
        <FilmList
          filmlist={filmlist.filter(
            (movie) =>
              movie.Title.toUpperCase().includes(title.toUpperCase()) &&
              movie.Global_assessment >= rate
          )}
        />}
        />
        <FilmAdd handleAdd={handleAdd} />

        <Route
          path="/films/:Id"  exact
          render={(props) => <Roooter {...props} filmlist={filmlist} />}
        
        />
      </Router>
    </div>
  );
}

export default App;
