package com.cg.fmsc.service;

import java.util.List;
import java.util.Set;

import com.cg.fmsc.entity.BookingEntity;
import com.cg.fmsc.entity.UserEntity;
import com.cg.fmsc.exception.UserException;
import com.cg.fmsc.model.BookingModel;
import com.cg.fmsc.model.UserModel;

public interface UserService {
	
	UserModel findByeMail(String mail);
	UserModel add(UserModel user) throws UserException;
	List<BookingModel> findBookingList(String mail) throws UserException;
	List<BookingModel> updateBookingList(String mail, BookingModel model) throws UserException;
	
 
}
