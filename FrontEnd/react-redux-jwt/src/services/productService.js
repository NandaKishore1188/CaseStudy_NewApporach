import axios from "axios";
import authHeader from "./auth-header";

const Product_URL = "http://localhost:9092/";

class ProductService {
    addProd(productName, productPrice, productQuantity) {
        return axios.post(Product_URL + "products/save", {
          productName,
          productPrice,
          productQuantity,
        });
      }



//   getPublicContent() {
//     return axios.get(API_URL + "hello");
//   }

//   getGreetings() {
//     return axios.get(API_URL + "hello", { headers: authHeader() });
//   }
  
}

export default new ProductService();
