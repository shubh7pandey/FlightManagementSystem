package com.cg.fms.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.entity.ScheduledFlightEntity;
import com.cg.fms.exception.ScheduledFlightException;
import com.cg.fms.model.*;
import com.cg.fms.repo.*;

@Service
public class ScheduledFlightServiceImpl {
	
	@Autowired
	public AirportRepo aRepo;
	
	@Autowired
	public FlightRepo fRepo;
	
	@Autowired
	public ScheduledFlightRepo sRepo;
	
	
	@Autowired
	public FlightServiceImpl fService;
	
	@Autowired
	public AirportServiceImpl aService;
	
	public ScheduledFlightModel of(ScheduledFlightEntity source) {
		ScheduledFlightModel target = new ScheduledFlightModel();
		
		target.setId(source.getId());
		target.setArrivalTime(source.getArrivalTime());
		target.setDepartureTime(source.getDepartureTime());
		target.setDestination(aService.findByCode(source.getDestination()));
		target.setSource(aService.findByCode(source.getSource()));
		target.setFlight(fService.findById(source.getFlight()));
		target.setFlightPrice(source.getFlightPrice());
		target.setSeats(source.getSeats());
		
		return target;
	}
	
	public ScheduledFlightEntity of(ScheduledFlightModel source) {
		ScheduledFlightEntity target = new ScheduledFlightEntity();
		
		target.setArrivalTime(source.getArrivalTime());
		target.setDepartureTime(source.getDepartureTime());
		target.setDestination(source.getDestination().getCode());
		target.setSource(source.getSource().getCode());
		target.setFlight(source.getFlight().getNumber());
		target.setFlightPrice(source.getFlightPrice());
		target.setSeats(source.getSeats());
		
		return target;
	}
	
	
	
	public ScheduledFlightModel addScheduledFlight(ScheduledFlightModel schedule) throws ScheduledFlightException {
		return of(sRepo.save(of(schedule)));
	}
	public ScheduledFlightModel updateScheduledFlight(ScheduledFlightModel schedule) throws ScheduledFlightException {
		return of(sRepo.save(of(schedule)));
	}
	
	public List<ScheduledFlightModel> search(String source, String dest, String date){
//		return sRepo.findAllBySourceAndDestination(source, dest).stream().map(i -> of(i)).collect(Collectors.toList());
		
		List<ScheduledFlightModel> list = new  ArrayList<>();
		for(ScheduledFlightEntity i: sRepo.findAll()) {
			if(i.getSource().equalsIgnoreCase(source) && i.getDestination().equalsIgnoreCase(dest)) {
				list.add(of(i));
			}
		}

		return list;
	}
	
	public ScheduledFlightModel findById(long id) {
		return of(sRepo.findById(id).orElse(null));
	}
	
	public List<ScheduledFlightModel> findAll(){
		return sRepo.findAll().stream().map(i -> of(i)).collect(Collectors.toList());
	}
	

}
