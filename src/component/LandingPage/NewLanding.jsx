import React from "react";
import { ImSearch } from "react-icons/im";
import img1 from "../../assests/images/img1 1.png";
import img2 from "../../assests/images/img2 1.png";
import img3 from "../../assests/images/img3 1.png";
import img4 from "../../assests/images/img5.png";
import img5 from "../../assests/images/img6.png";
import img6 from "../../assests/images/Group 10.png";
import img7 from "../../assests/images/Star 3.png";
import img8 from "../../assests/images/PayPal-Logo 1.png";
import img9 from "../../assests/images/Apple_Pay-512 1.png";
import img10 from "../../assests/images/Google_Pay_GPay_Logo-512 1.png";
import img11 from "../../assests/images/master.png";
import img12 from "../../assests/images/visa.png";
import img13 from "../../assests/images/batch.png";
import fb from "../../assests/images/image 8.png";
import twiter from "../../assests/images/image 7.png";
import Pintrest from "../../assests/images/image 6.png";
import Youtube from "../../assests/images/image 5.png";
import Instagram from "../../assests/images/image 4.png";
import newsletter from "../../assests/images/newsletter.png";
import galery from "../../assests/images/image 9.png";
import reviews from "../../assests/images/image 2.png";

const NewLanding = () => {
  const cardsData = [
    {
      id: 1,
      title: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "$80",
      image: img1,
    },
    {
      id: 1,
      title: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "$80",
      image: img4,
    },
    {
      id: 1,
      title: "Billy Joel & Stevie Nicks",
      location: "New York, United States",
      price: "$80",
      image: img5,
    },
    // Add more card data objects here as needed
  ];
  const duplicateData = (data, times) => {
    let duplicated = [];
    for (let i = 0; i < times; i++) {
      duplicated = [...duplicated, ...data];
    }
    return duplicated;
  };

  // Generate 9 cards by duplicating existing card data
  const nineCardsData = duplicateData(cardsData, 3);
  return (
    <>
      <div className="container-fluid mainLayot ">
        <div className="row landing-page ">
         
          <div className="col-md-12  ">
            <p className="text-center text-white Hurry-up">
              Hurray! You are in the right place * 100K+ social media followers
              * We value every custome
            </p>
            <h1 className="text-center Purchase-tickets">
              Purchase Tickets <span className="text-white">For A</span> 
            </h1>
            <h1 className="text-center Purchase-tickets text-white">
              Semi Final 1 - T20 Cricket World Cup
            </h1>
            <p className="text-center text-white Hurry-up">15 MAR, 2024</p>
            <p className="text-center text-white Hurry-up">
              Your next best-night-ever is waiting. And we have the tickets.
            </p>
            <div className="main-search-input-wrap mb-5">
              <div className="main-search-input fl-wrap">
                <div className="main-search-input-item">
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Search Products..."
                  />
                </div>
                <button className="main-search-button">
                  <ImSearch />
                </button>
              </div>
            </div>
          </div>
         
          <div className="container p-5 ">
      <h2 className="text-white event ">Top Event Lists</h2>
      <div className="row  ">
            <div className="col-md-4">
              <img
                className="img-fluid imagess "
                width={360}
                src={img1}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid imagess "
                width={360}
                src={img2}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid imagess"
                width={360}
                src={img3}
                alt=""
              />
            </div>
      </div>
           </div>
          </div>
          </div>
  
      <div className="container ">
        <h1 className="mt-3">Featured Events On Sale Today</h1>

        <div className="parent d-flex justify-content-between flex-wrap  align-items-center">
          <div className="child">
            <h6>Filter By:</h6>
          </div>
          <div className="child same-font "> ALL </div>
          <div className="child same-font">Sports</div>
          <div className="child same-font"> Concerts </div>
          <div className="child same-font">Festivals</div>
          <div className="child same-font">Theaters</div>
          <div className="child ">
            <div className="dropdown">
              <button
                className="child-dropdown dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Events
              </button>
              <ul
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton2"
              ></ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row mt-4">
            {nineCardsData.map((card, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card border border-0" style={{ width: "100%" }}>
                  <img
                    src={card.image}
                    height={200}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{card.title}</h5>
                    <p className="card-text text-center">{card.location}</p>
                    <div className="text-center">
                      <a href="#a" className="same-font">
                        From {card.price}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
    </>
  );
};

export default NewLanding;
