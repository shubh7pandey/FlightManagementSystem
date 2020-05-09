package com.cg.fms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fms.entity.ScheduledFlightEntity;
import com.cg.fms.exception.FlightException;
import com.cg.fms.exception.ScheduledFlightException;
import com.cg.fms.model.ScheduledFlightModel;
import com.cg.fms.service.ScheduledFlightServiceImpl;

@RestController
@RequestMapping("/scheduledFlights")
@CrossOrigin
public class ScheduledFlightController {
	
	
	@Autowired
	private ScheduledFlightServiceImpl flightService;
	
	@PostMapping
	public ResponseEntity<ScheduledFlightModel> createFlight(@RequestBody ScheduledFlightModel flight) throws FlightException{
		try {
			flight=flightService.addScheduledFlight(flight);
		} catch (ScheduledFlightException e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(flight,HttpStatus.OK);
	}
	
	@GetMapping("/search/{source}/{dest}/{date}")
	public ResponseEntity<List<ScheduledFlightModel>> searchFlight(@PathVariable("source") String source, @PathVariable("dest") String dest,@PathVariable("date") String date){
		return new ResponseEntity<>(flightService.search(source, dest,date),HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<ScheduledFlightModel> getFlight(@PathVariable("id") String id){
		return new ResponseEntity<>(flightService.findById(Long.valueOf(id)),HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<ScheduledFlightModel>> getFlight(){
		return new ResponseEntity<>(flightService.findAll(),HttpStatus.OK);
	}
	

}
