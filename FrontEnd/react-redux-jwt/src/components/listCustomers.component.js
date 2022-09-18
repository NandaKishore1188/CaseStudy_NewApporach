import React, { Component } from "react";
import customerService from "../services/customerService";
import { connect } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";


class ListCustomers extends Component {

    constructor(props) {
        super(props);



        this.state = {
            customers:[]
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);


    }

    deleteCustomer(customerId){
        customerService.deleteCustomer(customerId).then( res => {
            console.log("customerId");
            this.setState({customers: this.state.customers.filter(customers => customers.customerId !== customerId)});
            alert("Deleted successfully");
        });
    }


    componentDidMount(){
        customerService.getAllCustomers().then((res)=>{
            this.setState({customers:res.data});
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
                 <h2 className="text-center">Customers List</h2>
                 <br/>
                        <table className = "table table-striped table-bordered text-center ">

                            <thead>
                                <tr>
                                    <th> Customer Id </th>
                                    <th> Name</th>
                                    <th> Email Id</th>
                                    <th> Password</th>
                                    <th> Mobile</th>
                                    <th> Gender</th>
                                    <th> Actions</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.customerId}>
                                             <td>{customer.customerId}</td>
                                             <td> { customer.customerFullName} </td>   
                                             <td> {customer.customerEmailId}</td>
                                             <td> {customer.customerPassword}</td>
                                             <td> {customer.customerMobileNumber}</td>
                                             <td> {customer.customerGender}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete </button>

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
export default connect(mapStateToProps)(ListCustomers);