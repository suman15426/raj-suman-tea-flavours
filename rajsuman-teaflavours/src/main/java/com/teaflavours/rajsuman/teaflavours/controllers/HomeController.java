package com.teaflavours.rajsuman.teaflavours.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to Raj Suman Tea Flavours ☕ — brewed with backend precision!";
    }
}