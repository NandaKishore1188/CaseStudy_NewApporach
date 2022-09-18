import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { BiLogOutCircle } from "react-icons/bi";



class Admin extends Component {
    render() {

        return (
            <div className="col-md-12">
                <div className="card bg-light text-dark">
                    <div class="admin">

                        <h2>Welcome Admin!!</h2>

                        <header class="header" >

                            <nav>
                                <img src="logob.png" class="logob" />
                                <ul>
                                    {/* <li><a href="">HOME</a></li>
              <li><a href="">ORDERS</a></li>
              <li><a href="">PROFILE</a></li>
              <li><a href="about.html">ABOUT US</a></li>
              <li><a href="contact.html">CONTACT US</a></li> */}
                                    <li><a href="landing">LOG OUT<BiLogOutCircle /></a></li>

                                </ul>
                            </nav>

                            <ul >
                                <li><a href="addproduct">Add Product</a></li>
                                <li><a href="updateproduct">Update Product</a></li>
                                {/* <li><a href="">Delete Product</a></li> */}
                                <li><a href="listproducts">Get All Products </a></li>
                                <br/>
                                <li><a href="listcustomers">Get All Customers </a></li>

                                
                            </ul>

                        </header>

                    </div>
                </div>
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

export default connect(mapStateToProps)(Admin);