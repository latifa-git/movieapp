import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FilmCard.css";
//import ReactStars from "react-rating-stars-component";

const FilmCard = ({ movie }) => {
  return (
    <body>
      <Card className=" card" style={{ width: "19rem" }}>
        <div className="mx-4 my-3">
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
                <span>
                 
                  
                  <br></br>
                  Global_assessment: {movie.Global_assessment}
                  
                
                  <br></br>
                  <br></br>
                  views: {movie.Views}
                  <br></br>
                </span>
              </h1>
            </div>
            <Card.Text></Card.Text>
         <Link to={`/films/${movie.Id}`}> <Button  variant="primary">details</Button></Link>
          </Card.Body>
        </div>
      </Card>
    </body>
  );
};

export default FilmCard;
