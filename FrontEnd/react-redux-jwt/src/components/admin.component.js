import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";




class Admin extends Component {
    render() {
    
    return (
        <div class="admin">

        <h2>Welcome Admin!!</h2>

        <header class="header" >
        <ul>
              <li><a href="">Add Product</a></li>
              <li><a href="">Update Product</a></li>
              <li><a href="">Delete Product</a></li>
              <li><a href="">Get A Product</a></li>
            </ul>

            </header>

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