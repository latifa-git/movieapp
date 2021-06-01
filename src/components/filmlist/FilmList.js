import React from "react";

import FilmCard from "../filmcard/FilmCard";

const FilmList = ({filmlist}) => {
  return (
    <div className="row ml-5">
        {filmlist.map((movie) => (
          <FilmCard movie={movie} key={movie.id} />
        ))}
  
    </div>
  );
};

export default FilmList;
