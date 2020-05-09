package com.cg.fms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FlightManagementSystembyAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightManagementSystembyAdminApplication.class, args);
	}

}
