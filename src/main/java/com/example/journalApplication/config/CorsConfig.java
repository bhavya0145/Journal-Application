package com.example.journalApplication.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    // Inject the array of allowed origins from your properties file
    @Value("${app.cors.allowed-origins}")
    private String[] allowedOrigins;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // 1
                        .allowedOrigins(allowedOrigins) // 2
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") // 3
                        .allowedHeaders("*") // 4
                        .exposedHeaders("Authorization", "Link", "X-Total-Count") // 5
                        .allowCredentials(true) // 6
                        .maxAge(3600); // 7
            }
        };
    }
}
