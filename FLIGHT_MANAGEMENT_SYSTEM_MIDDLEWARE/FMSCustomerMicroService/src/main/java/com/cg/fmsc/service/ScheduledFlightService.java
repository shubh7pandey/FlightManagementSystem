package com.cg.fmsc.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cg.fmsc.model.ScheduledFlightModel;

@Service
public class ScheduledFlightService {

//	@Autowired
//	StaticRepositoryMy repo = new StaticRepositoryMy();
	
	@Autowired
	private RestTemplate rest;
	
	public ScheduledFlightModel[] findFight(String source, String dest , String date){
		
//	 	List<ScheduledFlightModel> listAll = repo.getsFlight();
//	 	List<ScheduledFlightModel> list = new ArrayList<>();
//	 	for(ScheduledFlightModel i: listAll){
//	 		
//	 		if(i.getSource().getName().equalsIgnoreCase(source) && i.getDestination().getName().equalsIgnoreCase(dest)) {
//	 			list.add(i);
//	 		}
//	 	list.add(i);
//	 	}
	 	
	 	
	return rest.getForObject("http://localhost:7002/scheduledFlights/search/"+source+"/"+dest+"/"+date , ScheduledFlightModel[].class);
	}
	
}
