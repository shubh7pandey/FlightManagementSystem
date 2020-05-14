package com.cg.fmsc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cg.fmsc.model.AirportModel;


@Service
public class UserService {

	@Autowired
	private RestTemplate rest;
	
	public AirportModel[] getAirportList(){	
		return rest.getForObject("http://localhost:7002/airports", AirportModel[].class);
	}
	
}
