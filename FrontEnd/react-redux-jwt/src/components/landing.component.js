import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BiBookReader } from "react-icons/bi";
import { BiPurchaseTag } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
class Landing extends Component {


    render() {
        // return (
        //     <body class="landingbody">

        //     <div class="landing">

        //         <header class="landingheader" >
        //             <h2>Welcome To NK's Shopping Store!!</h2>


        //         </header>
        //     </div >

        //     </body>
        return (

        <div class="home">

        {/* <h1 >Welcome to Shopping Cart</h1> */}

        {/* Header: */}

        <header class="header" >
          <nav>
            <img src="logob.png" class="logob" />
            <ul>
              <li><a href="about.html">ABOUT US</a></li>
              <li><a href="contact.html">CONTACT US</a></li>
            </ul>
          </nav>

          <div class="landing">
            <h2>Welcome To</h2><br/> <h1>NK's</h1> <br/> <h2>Shopping Store!!</h2>
            
            {/* <h2>Get the<br /><span class="dis">Best Deals</span><br />You Want <br /> Dussehra Occassion</h2>
            <h3>From 1st Oct to 31st Oct</h3> */}
            {/* <a href="#" class="btn1">SHOP NOW</a> */}
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

export default connect(mapStateToProps)(Landing);
