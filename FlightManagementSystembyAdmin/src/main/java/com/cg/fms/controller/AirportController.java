package com.cg.fms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fms.exception.AirportException;
import com.cg.fms.model.AirportModel;
import com.cg.fms.service.AirportService;


@RestController
@RequestMapping("/airports")
@CrossOrigin
public class AirportController {
	@Autowired
	public AirportService airportService;

	@PostMapping
	public ResponseEntity<AirportModel> createAirport(@RequestBody AirportModel airport) throws AirportException{
		airport=airportService.addAirport(airport);
		return new ResponseEntity<>(airportService.addAirport(airport),HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<AirportModel>> getAllAirports(){
		
		return new ResponseEntity<>(airportService.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/{id:[0-9]{1,4}}")
	public ResponseEntity<AirportModel> findById(@PathVariable("id") String flightId) {
		ResponseEntity<AirportModel> response = null;

		AirportModel airport = airportService.findByCode(flightId);

		if (airport == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			response = new ResponseEntity<>(airport, HttpStatus.OK);
		}

		return response;
	}
	

}
