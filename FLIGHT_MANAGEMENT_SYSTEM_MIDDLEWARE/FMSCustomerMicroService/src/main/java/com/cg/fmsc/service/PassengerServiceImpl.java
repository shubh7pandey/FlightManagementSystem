package com.cg.fmsc.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.cg.fmsc.dao.PassengerRepo;
import com.cg.fmsc.entity.PassengerEntity;
import com.cg.fmsc.model.PassengerModel;
import org.springframework.stereotype.Service;

@Service
public class PassengerServiceImpl implements PassengerService {

	@Autowired
	private PassengerRepo repo;
	
	public PassengerModel of(PassengerEntity source) {
		
		PassengerModel target = new PassengerModel();
		target.setAge(source.getAge());
		target.setName(source.getName());
		target.setUin(source.getUin());
		target.setBid(source.getbId());
		
		return target;
		
	}
	
	public PassengerEntity of(PassengerModel source) {
		
		PassengerEntity target = new PassengerEntity();
		target.setAge(source.getAge());
		target.setName(source.getName());
		target.setUin(source.getUin());
		target.setbId(source.getBid());
		
		return target;
		
	}
	
	@Override
	public List<PassengerModel> findAllByBid(long bid){
		
		List<PassengerModel> passengerModelList = new ArrayList<>();
		List<PassengerEntity> passengerEntityList = repo.findAllByBid(bid);
		for(PassengerEntity i: passengerEntityList) {
			passengerModelList.add(of(i));
		}
		
		return passengerModelList;
	}
	
	public PassengerModel add(PassengerModel model, Long bId) {
		model.setBid(bId);
		return of(repo.save(of(model)));
	}

}
