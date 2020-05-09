package com.cg.fms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.entity.FlightEntity;
import com.cg.fms.exception.FlightException;
import com.cg.fms.model.FlightModel;
import com.cg.fms.repo.FlightRepo;

@Service
public class FlightServiceImpl implements FlightService{
	@Autowired
	private FlightRepo repo;
	
	private FlightModel of(FlightEntity source) {
		FlightModel result=null;
		if(source!=null) {
			result=new FlightModel();
			result.setNumber(source.getFlightNumber());
			result.setName(source.getFlightName());
			result.setModel(source.getFlightModel());
			result.setCapacity(source.getFlightCapacity());
		}
		return result;
	}
	private FlightEntity of(FlightModel source) {
		FlightEntity result=null;
		if(source!=null) {
			result=new FlightEntity();
			result.setFlightNumber(source.getNumber());
			result.setFlightName(source.getName());
			result.setFlightModel(source.getModel());
			result.setFlightCapacity(source.getCapacity());
					}
		return result;
	}

	@Override
	public FlightModel addFlight(FlightModel flight) throws FlightException {
		flight=of(repo.save(of(flight)));
		return flight;
	}

	@Override
	public FlightModel findById(long id) {
		return of(repo.findById(id).orElse(null));
	}
	
	public List<FlightModel> findAll(){
		return repo.findAll().stream().map(i -> of(i)).collect(Collectors.toList());
	}
	
}