package com.cg.fms.service;

import java.util.List;

import com.cg.fms.exception.AirportException;
import com.cg.fms.model.AirportModel;

public interface AirportService {
	
	public AirportModel addAirport(AirportModel airport) throws AirportException;
	public List<AirportModel> findAll();
	public AirportModel findByCode(String code);
}