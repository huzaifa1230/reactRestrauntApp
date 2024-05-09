// import React from "react";

import Typical from "react-typical";

function Hero() {
  return (
    <>
      <div className="text-black font-mono pt-12 pl-8 pr-8 text-lg rounded-md p-4">
        <Typical
          steps={[
            "Welcome to The Tasty Hub, where culinary excellence meets warm hospitality. Indulge in an unforgettable dining experience crafted with passion and care",
            100,
          ]}
          loop={Infinity} // Loop infinitely
          wrapper="div" // Use a div wrapper for each character
        />
      </div>
      <div className="carousel w-full  mb-12">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951471.jpg?t=st=1714739313~exp=1714742913~hmac=54d97420b4fcb4dcfb538566074fda9a555599b4b46e1e49d8b5516e683aa434&w=826"
            className="w-full "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src="https://img.freepik.com/free-vector/man-waiter-services-couple-chinese-restaurant_107791-12829.jpg?t=st=1714738044~exp=1714741644~hmac=f7e0dbf4a5b03a3d93a5c5405abf20c80a1f21ed01129755dde02091b3045c60&w=996"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img
            src="https://img.freepik.com/free-photo/grill-with-variety-meats-it_188544-8372.jpg?t=st=1714738230~exp=1714741830~hmac=2875d52736d56a11222d70673b4b4a1133d26c59a07273c51f6a319774ddf650&w=740"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full ">
          <img
            src="https://img.freepik.com/free-photo/grilled-beef-steak-with-fries-grilled-tomato-pepper-sauces_140725-10545.jpg?t=st=1714738292~exp=1714741892~hmac=20c01336f68a1226a262b870636f2f1e4b13ec65ce458e986fb0519376ac86c8&w=740"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full ">
          <img
            src="https://img.freepik.com/free-photo/baked-lasagna-with-gourmet-italian-bolognese-sauce-generated-by-ai_188544-9608.jpg?t=st=1714738411~exp=1714742011~hmac=3adce7184e8811d933da005a35ec145839f8750bf291ce569a512b53f1dcaec8&w=740"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
