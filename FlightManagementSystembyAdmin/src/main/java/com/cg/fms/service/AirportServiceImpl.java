package com.cg.fms.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fms.entity.AirportEntity;
import com.cg.fms.exception.AirportException;
import com.cg.fms.model.AirportModel;
import com.cg.fms.repo.AirportRepo;

@Service
public class AirportServiceImpl implements AirportService{
	@Autowired
	private AirportRepo repo;

	private AirportModel of(AirportEntity source) {
		AirportModel result=null;
		if(source!=null) {
			result=new AirportModel();
			result.setName(source.getAirportName());
			result.setLocation(source.getAirportLocation());
			result.setCode(source.getAirportCode());
		}
		return result;
	}
	
	private AirportEntity of(AirportModel source) {
		AirportEntity result=null;
		if(source!=null) {
			result=new AirportEntity();
			result.setAirportName(source.getName());
			result.setAirportLocation(source.getLocation());
			result.setAirportCode(source.getCode());
		}
		return result;
	}
	@Override
	public AirportModel addAirport(AirportModel airport) throws AirportException {
		airport=of(repo.save(of(airport)));
		return airport;
	}

	@Override
	public List<AirportModel> findAll() {
		return repo.findAll().stream().map(entity->of(entity)).collect(Collectors.toList());
	}

	@Override
	public AirportModel findByCode(String string) {
		return of(repo.findByAirportCode(string));
	}
	
}