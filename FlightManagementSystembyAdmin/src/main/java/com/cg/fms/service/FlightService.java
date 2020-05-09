package com.cg.fms.service;

import java.util.List;

import com.cg.fms.exception.FlightException;
import com.cg.fms.model.FlightModel;


public interface FlightService {
	
	public FlightModel addFlight(FlightModel flight) throws FlightException;
	public FlightModel findById(long id);
}