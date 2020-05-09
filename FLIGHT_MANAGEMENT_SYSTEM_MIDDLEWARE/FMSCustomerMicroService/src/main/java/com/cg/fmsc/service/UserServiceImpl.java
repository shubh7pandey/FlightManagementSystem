package com.cg.fmsc.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import com.cg.fmsc.dao.UserRepo;
import com.cg.fmsc.entity.BookingEntity;
import com.cg.fmsc.entity.UserEntity;
import com.cg.fmsc.exception.UserException;
import com.cg.fmsc.model.AirportModel;
import com.cg.fmsc.model.BookingModel;
import com.cg.fmsc.model.UserModel;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo uRepo;
	
	@Autowired
	private RestTemplate rest;
	
	@Autowired
	private BookingServiceImpl bService;
	
//	StaticRepositoryMy sRepo  = new StaticRepositoryMy();

	
	private UserModel of(UserEntity entity) {
		
		UserModel model = new UserModel();
		model.setBookingList(bService.findAllByUserId(entity.geteMail()));
		model.seteMail(entity.geteMail());
		
		model.setName(entity.getName());
		model.setPass(entity.getPass());
		model.setPhone(entity.getPhone());
		
		return model;
		
	}
	
	private UserEntity of(UserModel entity) {
		
		UserEntity model = new UserEntity();	
		model.seteMail(entity.geteMail());
		model.setName(entity.getName());
		model.setPass(entity.getPass());
		model.setPhone(entity.getPhone());
		
		return model;
	}
	
	@Override
	public UserModel findByeMail(String eMail) {
		return of(uRepo.findByeMail(eMail));
	}

	@Override
	public UserModel add(UserModel user) throws UserException {
		UserEntity entity = uRepo.findByeMail(user.geteMail());
		if(entity != null)
			throw new UserException("User Already exist");
		return of(uRepo.save(of(user)));
			
	}

	@Override
	public List<BookingModel> findBookingList(String id) throws UserException {
		UserEntity entity = uRepo.findByeMail(id);
		if(entity == null)
			throw new UserException("User Doesnt exist");
		return findByeMail(id).getBookingList();
	}

	@Override
	public List<BookingModel> updateBookingList(String eMail, BookingModel model) throws UserException {
		UserEntity entity = uRepo.findByeMail(eMail);
		if(entity == null)
		{
			throw new UserException("User Doesnt exist");
		}
		
		bService.add(model, eMail);
		return of(entity).getBookingList();
	}		
	
	
	public AirportModel[] getAirportList(){
		return rest.getForObject("http://localhost:7002/airports",AirportModel[].class);
	}
	
	
}
