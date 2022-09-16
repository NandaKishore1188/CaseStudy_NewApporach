import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import productService from "../services/productService";
import { connect } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";


class ListProducts extends Component {

    constructor(props) {
        super(props);



        this.state = {
            products:[]
        }

    }

    componentDidMount(){
        productService.getAllProducts().then((res)=>{
            this.setState({products:res.data});
        })
    }

    render() {
        return (

            <div className="col-md-12">
                    <div className="card bg-light text-dark">
                    <nav>
            <img src="logob.png" class="logob" />
            <ul>
              
              <li><a href="admin">Go Back<BiLogOutCircle/></a></li>
              
            </ul>
          </nav>
          </div>
          
            <div>

                 <br></br>
                 <h2 className="text-center">Products List</h2>
                 <br/>
                        <table className = "table table-striped table-bordered text-center ">

                            <thead>
                                <tr>
                                    <th> Product Id </th>
                                    <th> Product Name</th>
                                    <th> Product Price</th>
                                    <th> Product Quantity</th>
                                    {/* <th> Expiry Date</th>
                                    <th> Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.productId}>
                                             <td>{product.productId}</td>
                                             <td> { product.productName} </td>   
                                             <td> {product.productPrice}</td>
                                             <td> {product.productQuantity}</td>
                                             {/* <td> {drug.expiryDate}</td> */}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 </div>            
          
        )
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}
export default connect(mapStateToProps)(ListProducts);