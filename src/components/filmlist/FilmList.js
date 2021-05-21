import React from "react";
import FilmCard from "../filmcard/FilmCard";

const FilmList = (filmlist) => {
  return (
    <div>
        {filmlist.map((movie) => (
          <FilmCard movie={movie} key={movie.id} />
        ))}
     
    </div>
  );
};

export default FilmList;
