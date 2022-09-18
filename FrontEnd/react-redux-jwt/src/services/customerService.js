import axios from "axios";
import authHeader from "./auth-header";

const Customer_URL = "http://localhost:9091/admin/";


class CustomerService {

    getAllCustomers() {
        return axios.get(Customer_URL + 'users/getall',{ headers: authHeader() });
      }

      deleteCustomer(customerId) {
        return axios.delete(Customer_URL  + 'users/delete' + customerId,{ headers: authHeader() });
      }

}

export default new CustomerService();