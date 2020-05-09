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

import com.cg.fms.exception.FlightException;
import com.cg.fms.model.FlightModel;
import com.cg.fms.service.FlightService;
import com.cg.fms.service.FlightServiceImpl;

@RestController
@RequestMapping("/flights")
@CrossOrigin
public class FlightController {
	
	@Autowired
	public FlightServiceImpl flightService;
	
	@PostMapping
	public ResponseEntity<FlightModel> createFlight(@RequestBody FlightModel flight) throws FlightException{
		flight=flightService.addFlight(flight);
		return new ResponseEntity<>(flight,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<FlightModel> findById(@PathVariable("id") Long flightId) {
		ResponseEntity<FlightModel> response = null;

		FlightModel flight = flightService.findById(flightId);

		if (flight == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			response = new ResponseEntity<>(flight, HttpStatus.OK);
		}

		return response;
	}
	@GetMapping
	public ResponseEntity<List<FlightModel>> findAll(){
		return new ResponseEntity<>(flightService.findAll(),HttpStatus.OK);
	}

}

