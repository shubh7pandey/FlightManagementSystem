package com.cg.fmsc.service;

import java.util.List;

import com.cg.fmsc.model.PassengerModel;

public interface PassengerService {

	List<PassengerModel> findAllByBid(long id);
	
}
