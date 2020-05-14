package com.cg.fmsc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cg.fmsc.model.ScheduledFlightModel;

@Service
public class ScheduledFlightService {

	@Autowired
	private RestTemplate rest;
	
	public ScheduledFlightModel[] findFight(String source, String dest , String date){	
		return rest.getForObject("http://localhost:7002/scheduledFlights/search/"+source+"/"+dest+"/"+date , ScheduledFlightModel[].class);
	}
	
}
