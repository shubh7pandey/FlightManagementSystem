package com.cg.fms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class FmsDiscoveryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FmsDiscoveryServiceApplication.class, args);
	}

}
