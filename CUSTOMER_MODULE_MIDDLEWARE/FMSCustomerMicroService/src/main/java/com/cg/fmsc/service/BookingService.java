package com.cg.fmsc.service;

import java.util.List;

import com.cg.fmsc.entity.BookingEntity;
import com.cg.fmsc.model.BookingModel;

public interface BookingService {
	
	List<BookingModel> findAllByUserId(String id);
	void deleteById(Long id);

}
