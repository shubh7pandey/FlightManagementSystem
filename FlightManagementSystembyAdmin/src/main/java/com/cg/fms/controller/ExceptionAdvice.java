package com.cg.fms.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.fms.exception.AirportException;
import com.cg.fms.exception.FlightException;
import com.cg.fms.exception.ScheduledFlightException;

@RestControllerAdvice
public class ExceptionAdvice {
	
	@ExceptionHandler(FlightException.class)
	public ResponseEntity<String> userExceptionHandler(FlightException ex){
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(AirportException.class)
	public ResponseEntity<String> userExceptionHandler(AirportException ex){
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(ScheduledFlightException.class)
	public ResponseEntity<String> userExceptionHandler(ScheduledFlightException ex){
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> otherExceptionHandler(Exception ex){
		return new ResponseEntity<>(ex.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

