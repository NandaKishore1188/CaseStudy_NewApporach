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

  getAllProducts() {
    return axios.get(Product_URL + 'products/getall');
  }
  deleteProduct(productId) {
    return axios.delete(Product_URL  + 'products/delete/' + productId);
  }
  
  updateProd(products, productId){
    return axios.put(Product_URL  + 'products/update/' + productId, products);
}

  //   getPublicContent() {
  //     return axios.get(API_URL + "hello");
  //   }

  //   getGreetings() {
  //     return axios.get(API_URL + "hello", { headers: authHeader() });
  //   }

}

export default new ProductService();
