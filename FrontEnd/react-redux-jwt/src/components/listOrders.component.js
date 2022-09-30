import React, { Component } from "react";

import orderService from "../services/orderService.js";
import { connect } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";


class ListOrders extends Component {

    constructor(props) {
        super(props);



        this.state = {
            orders:[]
        }
        this.deleteOrder = this.deleteOrder.bind(this);


    }

    deleteOrder(orderId){
        orderService.deleteOrder(orderId).then( res => {
            console.log("orderId");
            this.setState({orders: this.state.orders.filter(orders => orders.orderId !== orderId)});
            alert("Deleted successfully");
        });
    }


    componentDidMount(){
        orderService.getAllOrders().then((res)=>{
            this.setState({orders:res.data});
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
                 <h2 className="text-center">Orders List</h2>
                 <br/>
                        <table className = "table table-striped table-bordered text-center ">

                            <thead>
                                <tr>
                                    <th> order Id </th>
                                    <th> Product Name</th>
                                    <th> Product Price</th>
                                    <th> Quantity</th>
                                    <th> Cost</th>
                                    <th> Actions</th>
                                    {/* <th> Expiry Date</th>
                                    <th> Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.orderId}>
                                             <td>{order.orderId}</td>
                                             <td> { order.productname} </td>   
                                             <td> {order.quantity}</td>
                                             <td> {order.cost}</td>
                                             {/* <td> {drug.expiryDate}</td> */}
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrder(order.orderId)} className="btn btn-danger">Delete </button>

                                             </td>
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
export default connect(mapStateToProps)(ListOrders);