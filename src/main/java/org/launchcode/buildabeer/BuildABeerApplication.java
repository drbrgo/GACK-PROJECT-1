package org.launchcode.buildabeer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
public class BuildABeerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuildABeerApplication.class, args);

	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/user/fridge-javaconfig").allowedOrigins("http://localhost:3000");
				registry.addMapping("/user/admin-javaconfig").allowedOrigins("http://localhost:3000");
			}

		};
	}

}
