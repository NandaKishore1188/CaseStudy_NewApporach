package com.capg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.capg.entity.Product;

@RestController
@RequestMapping("/dashboard")
public class Controller {
	
	@Autowired
	private RestTemplate restTemplate;


	  @RequestMapping("/getById/{productId}")
	    public Product getProduct(@PathVariable("productId")Integer productId) {

	       return restTemplate.getForObject("http://ShoppingCartProductService/products/get/" + productId, Product.class);
	    }
	
	
	@RequestMapping("/all")
    public Product[] getAllTheProducts(){
		ResponseEntity<Product[]> response =
	            restTemplate.getForEntity("http://ShoppingCartProductService/products/getall", Product[].class);
	           Product[] product = response.getBody();
	            return (product);
	}
	
//	@RequestMapping("/delete/{productId}")
//	public Product deleteproduct(@PathVariable("productId") Integer productId){
//		
//		return restTemplate.delete("http://ShoppingCartProductService/products/delete/")+ productId , Product.class);
//	
//	}
}
