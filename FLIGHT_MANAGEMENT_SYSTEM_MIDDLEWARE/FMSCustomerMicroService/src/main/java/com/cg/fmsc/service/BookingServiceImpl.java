package com.cg.fmsc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cg.fmsc.dao.BookingRepo;
import com.cg.fmsc.entity.BookingEntity;
import com.cg.fmsc.model.BookingModel;
import com.cg.fmsc.model.PassengerModel;
import com.cg.fmsc.model.ScheduledFlightModel;

@Service
public class BookingServiceImpl implements BookingService {

//	StaticRepositoryMy sRepo = new StaticRepositoryMy();
	
	@Autowired
	private BookingRepo bRepo;
	
	@Autowired
	private PassengerServiceImpl pService;
	
	@Autowired
	private RestTemplate rest;
	
	public BookingModel of(BookingEntity entity) {
		
		BookingModel model = new BookingModel();
		
		model.setBookingDate(entity.getBookingDate());
		model.setCost(entity.getCost());		
		model.setFlight(rest.getForObject("http://localhost:7002/scheduledFlights/"+entity.getFlight(), ScheduledFlightModel.class));
		model.setId(entity.getId());
		model.setNumOfPassenger(entity.getNumOfPassenger());
		
		List<PassengerModel> passengerList = pService.findAllByBid(entity.getId());
		
		model.setPassengerList(passengerList);
		return model;
		
	}
	
	
	public BookingEntity of(BookingModel model, String userId)  {
	
		BookingEntity entity = new BookingEntity();
		
		entity.setBookingDate(model.getBookingDate());
		entity.setCost(model.getNumOfPassenger()*model.getFlight().getFlightPrice());
		entity.setUserId(userId);
		try {
			entity.setFlight(model.getFlight().getId());
		}
		catch(Exception e) {
			
		}
		entity.setNumOfPassenger(model.getNumOfPassenger());
		
		List<String> passengerList = new ArrayList<String>();
		
		try
		{
			for(PassengerModel i: model.getPassengerList()) {
				passengerList.add(String.valueOf(i.getUin()));
			}
		}
		catch(Exception e) {
			
		}
	
//		model.setPassengerlist(passengerList);
		return entity;
		
		
	}

	
	public List<BookingModel> add(BookingModel model, String userId)
	{
		BookingEntity entity =  bRepo.save(of(model,userId));
		for( PassengerModel i: model.getPassengerList()) {
			pService.add(i,entity.getId());
		}		
		return findAllByUserId(userId);

	}
	
	
	@Override
	public List<BookingModel> findAllByUserId(String id){
		List<BookingModel> bookingList = new ArrayList<BookingModel>();
		
		for(BookingEntity i: bRepo.findAllByUserId(id)) {
			bookingList.add(of(i));
		}
		return bookingList;
	}


	@Override
	public void deleteById(Long id) {
		bRepo.deleteById(id);
	} 


	
}