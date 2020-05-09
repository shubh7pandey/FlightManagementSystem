package com.cg.fmsc.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fmsc.entity.UserEntity;
import com.cg.fmsc.exception.UserException;
import com.cg.fmsc.model.AirportModel;
import com.cg.fmsc.model.BookingModel;
import com.cg.fmsc.model.PassengerModel;
import com.cg.fmsc.model.ScheduledFlightModel;
import com.cg.fmsc.model.UserModel;
import com.cg.fmsc.service.BookingServiceImpl;
import com.cg.fmsc.service.PassengerServiceImpl;
import com.cg.fmsc.service.ScheduledFlightService;
import com.cg.fmsc.service.UserService;
import com.cg.fmsc.service.UserServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class UserController {
	
	@Autowired
	private UserServiceImpl service;
	
	@Autowired
	private BookingServiceImpl bService;
	
	@Autowired
	private PassengerServiceImpl pService;
	
	@Autowired
	private ScheduledFlightService sService;
	
	@GetMapping("/{id}")
	public ResponseEntity<UserModel> findById(@PathVariable("id") String id){
		return new ResponseEntity<UserModel>(service.findByeMail(id),HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<UserModel> add(@RequestBody UserModel user) throws UserException {
		return new ResponseEntity<UserModel>(service.add(user),HttpStatus.OK);
	}
	
	@GetMapping("/searchFlight/{source}/{destination}/{date}")
	public ResponseEntity<ScheduledFlightModel[]> findFlights(
			@PathVariable("source") String source,
			@PathVariable("destination") String dest,
			@PathVariable("date") String date){
		
		return new ResponseEntity<ScheduledFlightModel[]>(sService.findFight(source, dest, date),HttpStatus.OK);
	}
	
	@PostMapping("/changeBookingList/{userid}")
	public ResponseEntity<BookingModel> updateBooking(@PathVariable("userid") String id, @RequestBody BookingModel booking) throws UserException{
		return new ResponseEntity<>(bService.add(booking, id),HttpStatus.OK);
	}
	
	@GetMapping("/getBookingList/{userid}")
	public ResponseEntity<List<BookingModel>> getBookings(@PathVariable("userid") String userid) throws UserException{
		return new ResponseEntity<List<BookingModel>>(service.findBookingList(userid),HttpStatus.OK);
	}
	
	@GetMapping("/getAirportList")
	public ResponseEntity<AirportModel[]> getAirportList(){
		return new ResponseEntity<>(service.getAirportList(),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteById/{id}")
	public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") int id) {
		bService.deleteById((long) id);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@GetMapping("/getPassengers/{id}")
	public ResponseEntity<List<PassengerModel>> getPass(@PathVariable("id") long id){
		return new ResponseEntity<List<PassengerModel>>(pService.findAllByBid(id),HttpStatus.OK); 
	}
	
}
