package com.teaflavours.rajsuman.teaflavours.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teaflavours.rajsuman.teaflavours.items.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}