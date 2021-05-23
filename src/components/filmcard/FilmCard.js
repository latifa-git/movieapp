import React from "react";
import { Card, Button } from "react-bootstrap";
import "./FilmCard.css";
//import ReactStars from "react-rating-stars-component";

const FilmCard = ({ movie }) => {
  return (
    
    <body>
    
      <Card className=" card" style={{ width: "19rem" }}  >
      <div className= "mx-4 my-3">
        <Card.Img
          className="image"
          variant="top"
          src={movie.ImgSRC}
          style={{ height: "100%" }}
        />
        
        <Card.Body className="details">
          <div className="center">
            <h1>
              tilte :{movie.Title}
              <br></br>
              <span>Release Date: {movie.Release_Date}</span>
              Type: {movie.Type}
              <br></br>
              Global_assessment: {movie.Global_assessment}
              <br></br>
              The language Country: {movie.The_language_Country}
              <br></br>
              Quality:{movie.The_quality}
              <br></br>
              <br></br>
              views: {movie.Views}
              <br></br>
            </h1>
          </div>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </div>
      </Card>

    </body>
  );
};

export default FilmCard;
