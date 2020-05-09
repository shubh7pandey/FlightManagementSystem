package com.cg.fms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

//import com.cg.ecm.EnableConfigServer;


@SpringBootApplication
@EnableConfigServer
@EnableEurekaClient
public class FmsConfigurationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FmsConfigurationServiceApplication.class, args);
	}

}
