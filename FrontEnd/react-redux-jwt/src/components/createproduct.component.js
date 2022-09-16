import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { connect } from "react-redux";
import { addProd } from "../actions/auth";
import CheckButton from "react-validation/build/button";
import { BiLogOutCircle } from "react-icons/bi";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
const productName = (value) => {
    if (value.length < 3 || value.length > 30) {
        return (
            <div className="alert alert-danger" role="alert">
                The Product name must be between 3 and 20 characters.
            </div>
        );
    }
};

const productPrice = (value) => {
    if (value.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                enter valid price!!
            </div>
        );
    }
};


const productQuantity = (value) => {
    if (value.length === 0) {
        return (
            <div className="alert alert-danger" role="alert">
                enter valid quantity!
            </div>
          ) ;
    }
};




    class AddProd extends Component {
        constructor(props) {
            super(props);
            this.handleAddProd = this.handleAddProd.bind(this);
            this.onChangeProductName = this.onChangeProductName.bind(this);
            this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
            this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);


            this.state = {
                productName: "",
                productPrice: "",
                productQuantity: "",


                successful: false,
            };
        }

        onChangeProductName(e) {
            this.setState({
                productName: e.target.value,
            });
        }

        onChangeProductPrice(e) {
            this.setState({
                productPrice: e.target.value,
            });
        }

        onChangeProductQuantity(e) {
            this.setState({
                productQuantity: e.target.value,
            });
        }

        handleAddProd(e) {
            e.preventDefault();

            this.setState({
                successful: false,
            });

            this.form.validateAll();

            if (this.checkBtn.context._errors.length === 0) {
                this.props
                    .dispatch(
                        addProd(this.state.productName, this.state.productPrice, this.state.productQuantity)
                        
                        )
                    
                    .then(() => {
                        this.setState({
                            successful: true,
                           
                        });
                        alert("product added successfully");
                        this.props.history.push('/admin');
                    })
                    .catch(() => {
                        this.setState({
                            successful: false,
                        });
                    });
            }
        }

        render() {
            const { message } = this.props;

            return (

                <div className="col-md-12">
                    <div className="card bg-light text-dark">
                    <nav>
            <img src="logob.png" class="logob" />
            <ul>
              {/* <li><a href="">HOME</a></li>
              <li><a href="">ORDERS</a></li>
              <li><a href="">PROFILE</a></li>
              <li><a href="about.html">ABOUT US</a></li>
              <li><a href="contact.html">CONTACT US</a></li> */}
              <li><a href="admin">Go Back<BiLogOutCircle/></a></li>
              
            </ul>
          </nav>


                        <h1><center>Add Product </center></h1>

                        <Form
                            onSubmit={this.handleAddProd}
                            ref={(c) => {
                                this.form = c;
                            }}
                        >
                            {!this.state.successful && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="productName">Product Name</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="productName"
                                            value={this.state.productName}
                                            onChange={this.onChangeProductName}
                                            validations={[required, productName]}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <i class="fas fa-envelope prefix grey-text d-flex"></i>
                                        <label htmlFor="productPrice">Product Price</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="productPrice"
                                            value={this.state.productPrice}
                                            onChange={this.onChangeProductPrice}
                                            validations={[required, productPrice]}
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="productQuantity">Quantity</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="productQuantity"
                                            value={this.state.productQuantity}
                                            onChange={this.onChangeProductQuantity}
                                            validations={[required, productQuantity]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-dark btn-block">Add</button>
                                    </div>
                                </div>
                            )}

                            {message && (
                                <div className="form-group">
                                    <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={(c) => {
                                    this.checkBtn = c;
                                }}
                            />
                        </Form>


                    </div>
                </div>
            );
        }
    }
    function mapStateToProps(state) {
        const { message } = state.message;
        return {
            message,
        };
    }

    export default connect(mapStateToProps)(AddProd);