import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { connect } from "react-redux";
import { UpdateProd } from "../actions/auth";
import productService from "../services/productService";
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
  const productId = (value) => {
    // if (value.length < 3 || value.length > 30) {
    //     return (
    //         <div className="alert alert-danger" role="alert">
    //             The Product name must be between 3 and 20 characters.
    //         </div>
    //     );
    // }
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




    class UpdateProdu extends Component {
        constructor(props) {
            super(props);
            this.handleUpdateProdu = this.handleUpdateProdu.bind(this);
            this.onChangeProductId = this.onChangeProductId.bind(this);
            this.onChangeProductName = this.onChangeProductName.bind(this);
            this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
            this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);


            this.state = {
                productId:"",
                productName: "",
                productPrice: "",
                productQuantity: "",
                successful: false,
            };

            
        }
        // componentDidMount(){
        //     productService.updateProd(this.state.productId).then((res)=>{
        //         // this.setState({products:res.data});
        //         let products=res.data;
        //         this.setState({
        //             productId:products.productId,
        //             productName:products.productName,
        //             productPrice:products.productPrice,
        //             productQuantity:products.productQuantity
        //         });
        //     })
        // }

        onChangeProductId(e) {
            this.setState({
                productId: e.target.value,
            });
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

        handleUpdateProdu(e) {
            e.preventDefault();
            let products={
                productId:
                this.state.productId,
                productName:
                this.state.productName,
                productPrice:
                this.state.productPrice,
                productQuantity:
                this.state.productQuantity,
            }
            console.log('products=>'+JSON.stringify(products));

            this.setState({
                successful: false,
            });

            this.form.validateAll();

            if (this.checkBtn.context._errors.length === 0) {
                this.props
                    .dispatch(
                        UpdateProd(this.state.productId,this.state.productName, this.state.productPrice, this.state.productQuantity)
                        
                        )
                    
                    .then(() => {
                        this.setState({
                            successful: true,
                           
                        });
                        alert("product Updated successfully");
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

                        <h1><center>Update Product </center></h1>

                        <Form
                            onSubmit={this.handleUpdateProdu}
                            ref={(c) => {
                                this.form = c;
                            }}
                        >
                            {!this.state.successful && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="productId">Product Id</label>
                                        <Input
                                            type="text"
                                            className="form-control"
                                            name="productId"
                                            value={this.state.productId}
                                            onChange={this.onChangeProductId}
                                            validations={[required, productId]}
                                        />
                                    </div>
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
                                        <button className="btn btn-dark btn-block">Update</button>
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

    export default connect(mapStateToProps)(UpdateProdu);