import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { BiAbacus } from "react-icons/bi";
import { BiBookReader } from "react-icons/bi";
import { BiPurchaseTag } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";


import { BiStar } from "react-icons/bi";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { AiFillStar } from "react-icons/ai";

class Home extends Component {


  render() {

    // const { user: currentUser } = this.props;

    // if (!currentUser) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <div class="home">

        {/* <h1 >Welcome to Shopping Cart</h1> */}

        {/* Header: */}

        <header class="header" >
          <nav>
            <img src="logob.png" class="logob" />
            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">ORDERS</a></li>
              <li><a href="">PROFILE</a></li>
              <li><a href="about.html">ABOUT US</a></li>
              <li><a href="contact.html">CONTACT US</a></li>
              <li><a href="landing"><BiLogOutCircle/></a></li>
              
            </ul>
          </nav>

          <div class="intro">
            <h1>TRY OUT THESE AMAZING PRODUCTS</h1>
            <h2>Up to<br /><span class="dis">30% Discount</span><br />on This <br /> Dussehra Occassion</h2>
            <h3>From 1st Oct to 31st Oct</h3>
            <a href="#" class="btn1">SHOP NOW</a>
          </div>

        </header>

        {/* Benefits */}

        <section class="section benefits">
          <div class="benefit-center box" >
            <div class="benefit">
              <span class="icon"><i class="bi bi-purchase-tag"><BiPurchaseTag/></i></span>
              
              <h4>Free Shipping</h4>
              <span class="text">Capped at 500/- per order</span>
            </div>
            <div class="benefit">
              <span class="icon"><i class="bx bx-book-reader"><BiBookReader/></i></span>
              <h4>10-Day Returns</h4>
              <span class="text">Shop without any fear</span>
            </div>

            <div class="benefit">
              <span class="icon"><i class="bx bx-headphone"><BiSupport/></i></span>
              <h4>24/7 Support</h4>
              <span class="text">We are always there to help you</span>
            </div>
          </div>
        </section>


        {/* New Arrivals  */}

        <section class="section">
          <div class="h">
            <h1><span>New</span> Arrivals</h1>
          </div>
          <div class="ac-center box">
            <div class="ac">
              <div class="img-cover">
                <img src="hand1.png" alt="" />
              </div>
              <p>Women handbag leather</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 1500</div>
            </div>

            <div class="ac">
              <div class="img-cover">
                <img src="slip1.png" alt="" />
              </div>
              <p>Women Sandals </p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 3000</div>
            </div>

            <div class="ac">
              <div class="img-cover">
                <img src="wallet2.jpg" alt="" />
              </div>
              <p>Luxuary wallet purse </p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 2000</div>
            </div>
            <div class="ac">
              <div class="img-cover">
                <img src="belt2.jpg" alt="" />
              </div>
              <p>Leather belt</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 1500</div>
            </div>
            <div class="ac">
              <div class="img-cover">
                <img src="shoe1.jpg" alt="" />
              </div>
              <p>Nike Men's Shoe </p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 4500</div>
            </div>
            <div class="ac">
              <div class="img-cover">
                <img src="perfume1.jpg" alt="" />
              </div>
              <p>Imported Perfume(Pack Of 2)</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 1399</div>
            </div>
          </div>
        </section>



        {/* Shop By Category  */}

        <section class="section">
          <div class="h">
            <h1><span>Shop By</span> Categories</h1>
          </div>
          <div class="ab box">
            <div class="item item-1">
              <img src="mobilesCategory.jpg" alt="" />
            </div>
            <div class="item item-2">
              <img src="mobileCaseCoversCategory.jpg" alt="" />
            </div>
            <div class="item item-3">
              <img src="wallet2.jpg" alt="" />
            </div>
            <div class="item item-4">
              <img src="belt2.jpg" alt="" />
            </div>
          </div>
        </section>


        {/* <!-- Popular Products --> */}
        <section class="section">
          <div class="h">
            <h1>Popular <span>Products</span></h1>
          </div>
          <div class="ac-center box">
            <div class="ac">
              <div class="img-cover">
                <img src="hand3.jpg" alt="" />
              </div>
              <p>Luxuary Leather hand bag-black</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"></i>
              </div>
              <div class="price">INR 8500</div>
            </div>

            <div class="ac">
              <div class="img-cover">
                <img src="slip3.jpg" alt="" />
              </div>
              <p>Covered leather sandal</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div class="price">INR 5000</div>
            </div>

            <div class="ac">
              <div class="img-cover">
                <img src="wallet2.jpg" alt="" />
              </div>
              <p>Cute Wallet</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"></i>
              </div>
              <div class="price">INR 1200</div>
            </div>
            <div class="ac">
              <div class="img-cover">
                <img src="foggDisc.jpg" alt="" />
              </div>
              <p>Fogg Discover Perfume</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div class="price">INR 2000</div>
            </div>
            <div class="ac">
              <div class="img-cover">
                <img src="slip4.jpg" alt="" />
              </div>
              <p>Black Sandals</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 3200</div>
            </div>
            {/* <div class="ac">
              <div class="img-cover">
                <img src="wallet3.jpg" alt="" />
              </div>
              <p>Wallet-Ladies-2021</p>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div class="price">INR 1600</div>
            </div> */}
            <div class="ac">
              <div class="img-cover">
                <img src="hand1.png" alt="" />
              </div>
              <p>Handbag-Ladies-Pink</p>
              <div class="rating">
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bxs-star"><AiFillStar/></i>
                <i class="bx bx-star"><AiFillStar/></i>
              </div>
              <div class="price">INR 5600</div>
            </div>
            {/* <div class="ac">
              <div class="img-cover">
                <img src="wallet4.jpg" alt="" />
              </div>
              <p>Mini Leather Wallet</p>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div class="price">INR 1500</div>
            </div> */}
          </div>
        </section>


        {/* <!-----footer--------------------> */}


        <section id="footer">

          <div class="foot">
            <ul>
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT US</a></li>
              <li><a href="contact.html">CONTACT US</a></li>
            </ul>

            <div class="social-links">
              <a href="https://www.linkedin.com/in/nandakishore3/"><i class="fab fa-linkedin"></i><FaLinkedin/></a>
              <a href="https://www.instagram.com/nandakishore0311/"><i class="fab fa-instagram"><FaInstagram/></i></a>
            </div>
          </div>
        </section>











      </div >
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Home);

