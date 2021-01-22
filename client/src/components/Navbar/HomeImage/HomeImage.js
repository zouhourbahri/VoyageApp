import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./HomeImage.css";

function HomeImage() {
  return (
    <div className="singlecocktail home-carous">
      <Carousel>
        <Carousel.Item>
          <Link to="/">
            {" "}
            <img
              className="d-blockw-100"
              src="https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Japon.jpg"
              alt="img"
            />{" "}
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/">
            {" "}
            <img
              className="d-blockw-100"
              src="https://i0.wp.com/www.lechotouristique.com/wp-content/uploads/2018/01/photo-30.jpg?fit=1000%2C664&ssl=1"
              alt="img"
            />{" "}
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            {" "}
            <img
              className="d-blockw-100"
              src="https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg"
              alt="img"
            />{" "}
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            {" "}
            <img
              className="d-blockw-100"
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="img"
            />{" "}
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/">
            {" "}
            <img
              className="d-blockw-100"
              src="https://media-cdn.tripadvisor.com/media/photo-s/15/0c/c5/4c/red-dunes-desert-camel.jpg"
              alt="img"
            />{" "}
          </Link>
        </Carousel.Item>

        
        <Carousel.Item>
          <Link to="/">
            {" "}
            <img
              className="d-blockw-100"
              src="https://static.vecteezy.com/ti/vecteur-libre/t2/158074-matterhorn-peak-free-vector-gratuit-vectoriel.jpg"
              alt="img"
            />{" "}
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeImage;
