package com.capg.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.dto.ProductDTO;
import com.capg.entity.Product;
import com.capg.repository.ProductsRepository;



@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductsRepository productsRepository;
	
	@Override
	public ProductDTO addProducts(ProductDTO productDTO) {
		// TODO Auto-generated method stub
		Product product = new Product(productDTO);
		return new ProductDTO(productsRepository.save(product));	
	}

	@Override
	public List<ProductDTO> getAllProducts() {
		// TODO Auto-generated method stub
		List<Product> product = productsRepository.findAll();
		return product.stream().map(ProductDTO::new).collect(Collectors.toList());
	}

	@Override
	public ProductDTO getProductById(Integer productId) {
		// TODO Auto-generated method stub
		Product product = productsRepository.findById(productId).orElseThrow() ;
		return new ProductDTO(product);
	}

	@Override
	public ProductDTO getProductByName(String productName) {
		Product product = productsRepository.findByproductName(productName).orElseThrow();
		return new ProductDTO(product);
	}
	
//	@Override
//	    public Optional<Product> getProductByName(String productName) {
//	        return productsRepository.findByproductName(productName);
//	    }

	@Override
	public Product updateProduct(Product product) throws Exception {
		// TODO Auto-generated method stub
		Optional<Product> user = this.productsRepository.findById(product.getProductId());
		if (user.isPresent()) {
			Product productUpdate = user.get();
//			productUpdate.setProductType(product.getProductType());
			productUpdate.setProductName(product.getProductName());
//			productUpdate.setCategory(product.getCategory());
//			productUpdate.setRating(product.getRating());
//			productUpdate.setReview(product.getReview());
			productUpdate.setProductPrice(product.getProductPrice());
//			productUpdate.setDescription(product.getDescription());
			productsRepository.save(productUpdate);
	        return productUpdate;
	    } else {
	        throw new Exception("Record not found with id : " + product.getProductId());
	    }
	}

	@Override
	public void deleteProductById(Integer productId) {
		// TODO Auto-generated method stub
		Product product = productsRepository.findById(productId).orElseThrow(); 
		productsRepository.delete(product);
	}

}
