import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Roooter = ({filmlist, match}) => {
  const film = filmlist.find(el => el.Id.toString() === match.params.Id.toString()
  );
  return (
    <div style={{color:"white"}}>
      <h2> welcome</h2>
      <h2> {film.Descption}</h2>
   
      <Link to={"/"}>
        <Button variant="primary">Go Back</Button>
      </Link>
    </div>
  );
};

export default Roooter;
