package com.teaflavours.rajsuman.teaflavours.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teaflavours.rajsuman.teaflavours.items.Product;
import com.teaflavours.rajsuman.teaflavours.repo.ProductRepository;

@RestController
@RequestMapping("/products")

public class ProductController {
	@Autowired
	private ProductRepository productRepository;

	@PostMapping
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {
	    Product saved = productRepository.save(product); //  
	    return ResponseEntity.ok(saved);
	}
    
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        Product existing = productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found"));

        existing.setName(updatedProduct.getName());
        existing.setDescription(updatedProduct.getDescription());
        existing.setPrice(updatedProduct.getPrice());

        Product saved = productRepository.save(existing);
        return ResponseEntity.ok(saved);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }
}