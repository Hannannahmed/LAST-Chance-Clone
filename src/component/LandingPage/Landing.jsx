import React from "react";
import "./Landing.css";
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
import Sliderstar from "../../assests/images/Group 5.png";
const Landing = () => {
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
      <div className="container-fluid  landing-page ">
        <div className="container ">
          <div className="row ">
            <div className="col-md-12 ">
              <p className="text-center text-white Hurry-up">
                Hurray! You are in the right place * 100K+ social media
                followers * We value every custome
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
          </div>
          <div className="row">
            <h4 className="Top-events mt-2">Top Event List</h4>
            <div className="col-md-4 ">
              <img className="img-fluid imagess mt-3" src={img1} alt="" />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid imagess mt-3"
                width={360}
                src={img2}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img className="img-fluid imagess mt-3" src={img3} alt="" />
            </div>
          </div>
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
          <div className="row mt-4">
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
          </div>
        </div>
        <div className="row">
        <div className="section-4 text-center ">
          <h2>Excellent</h2>
          <img src={img6} width={200} alt="" />
          <h3>Based on 1,559 reviews</h3>
          <img src={img7} width={40} className="mb-4" alt="" />
          <span className="fw-bold fs-2">Trustpilot</span>
          <div className="row text-start p-2">
            <div className="col-md-3">
              <img src={Sliderstar} alt="" />
              <h4>Ecellent service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nam
                deleniti. Tenetur soluta repellat quam ab aspernatur voluptatum
                ducimus, 
              </p>
            </div>
            <div className="col-md-3 ">
              <img src={Sliderstar} alt="" />
              <h4>Ecellent service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nam
                deleniti. Tenetur soluta repellat quam ab aspernatur voluptatum
                ducimus, 
              </p>
            </div>
            <div className="col-md-3 ">
              <img src={Sliderstar} alt="" />
              <h4>Ecellent service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nam
                deleniti. Tenetur soluta repellat quam ab aspernatur voluptatum
                ducimus, 
              </p>
            </div>
            <div className="col-md-3 ">
              <img src={Sliderstar} alt="" />
              <h4>Ecellent service</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nam
                deleniti. Tenetur soluta repellat quam ab aspernatur voluptatum
                ducimus, 
              </p>
            </div>
          
          </div>
        </div>
        </div>
        <div className="row section-5 mt-5 ">
          <div className="col-md-8 joinn p-5">
            <h3>
              Join The Newsletter To Learn About <br /> Future Events
            </h3>
            <p className="text-muted">
              Join the newsletter to and get 10% discount on your First <br />{" "}
              ticket purchase
            </p>
            <input
              type="text"
              className="p-3 border border-rounded w-50"
              name=""
              id=""
              placeholder="Enter Email Address"
            />
            <br />
            <button className="subscrie mt-2">Subscribe</button>
          </div>
          <div className="col-md-4 ">
            <div className="imgg">
              <img src={newsletter} className="" width={400} alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <footer className=" bg-black  p-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  {/* Payment section */}
                  <h5 className="text-uppercase text-white">PAYMENT</h5>
                  <div className="parent3 d-flex">
                    {/* Payment methods icons */}
                    <div className="child3">
                      <img src={img12} width={60} alt="" />
                      <img src={img11} width={51} alt="" />
                      <img src={img9} width={70} alt="" />
                      <img src={img10} width={60} alt="" />
                      <img src={img8} width={60} alt="" />
                    </div>
                  </div>
                  <div className="child-4 d-flex align-items-center">
                    {/* Our Warranty */}
                    <img src={img13} alt="" />
                    <span className="text-uppercase text-white">
                      Our Warranty IF YOU ARE NOT 100% SATUSFIED WE WILL REFUND
                      YOU 100% OF YOUR ORDER.
                    </span>
                  </div>
                  <div className="parent-4 d-flex gap-4">
                    {/* Contact and company info */}
                    <div className="child-5">
                      <h6 className="text-white">ArtsDot.com</h6>
                      <p className="footer-text">Privacy Policy</p>
                      <p className="footer-text">Terms Of Services</p>
                      <p className="footer-text">Contact@ArtsDot</p>
                    </div>
                    <div className="child-6">
                      <p className="footer-text">Copyright 2007-2024</p>
                      <p className="footer-text">Return Policies</p>
                      <p className="footer-text">F.A.Q 1/2 F.A.Q 2/2</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  {/* Empty column */}
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  {/* Social media section */}
                  <h5 className="text-uppercase text-white">Social Media</h5>
                  <div className="parent-7">
                    <div className="child-7 gap-3  d-flex alig-items-center gap-2 flex-wrap">
                      {/* Social media icons */}
                      <img src={fb} alt="" />
                      <img src={twiter} alt="" />
                      <img src={Pintrest} alt="" />
                      <img src={Youtube} alt="" />
                      <img src={Instagram} alt="" />
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    {/* Partners */}
                    <li>
                      <h3 className="text-uppercase text-white mt-3">
                        Partners
                      </h3>
                    </li>
                    <li className="mt-3">
                      <img src={galery} alt="" />
                    </li>
                    <li className="mt-3">
                      <img src={reviews} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* Footer */}
      </div>
    </>
  );
};

export default Landing;
