import React from "react";
import Product from "./Product";


const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0a4551c00143b344.jpg?q=20"
              className="d-block w-100 h-96 object-contain"
              alt="Smartphone Offer"
              loading="lazy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/621e4a0557852319.jpeg?q=20"
              className="d-block w-100 h-96 object-contain"
              alt="Tech Deals"
              loading="lazy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/573ddfead1100e04.jpg?q=20"
              className="d-block w-100 h-96 object-contain"
              alt="Gadget Sale"
              loading="lazy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7af6aa615544c55e.jpg?q=20"
              className="d-block w-100 h-96 object-contain"
              alt="Best Tech Prices"
              loading="lazy"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Component */}
      <Product />
      
    </div>
  );
};

export default Home;
