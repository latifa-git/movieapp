import React from "react";
import { Card,Button } from "react-bootstrap";
//import ReactStars from "react-rating-stars-component";
const FilmCard = ({ movie }) => {
  return (
    <Card style={{ width: "19rem" }} className=" mx-4 my-3">
      <Card.Img variant="top" src={movie.imgSRC} style={{ height: "70%" }} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Views}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
