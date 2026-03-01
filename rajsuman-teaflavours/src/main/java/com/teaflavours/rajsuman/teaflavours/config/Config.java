package com.teaflavours.rajsuman.teaflavours.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;


@Configuration

@EnableWebSecurity
public class Config {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) 
            .headers(headers -> headers.frameOptions(frame -> frame.disable())) // allow H2 console if needed
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/api/test", "/actuator/**").permitAll()
                .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/swagger-ui.html").permitAll()
                .requestMatchers("/products/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults()); // enable basic auth for other endpoints

        return http.build();
    }
}