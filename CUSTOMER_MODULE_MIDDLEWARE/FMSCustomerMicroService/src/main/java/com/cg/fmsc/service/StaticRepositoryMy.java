//package com.cg.fmsc.service;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;
//
//import com.cg.fmsc.model.AirportModel;
//import com.cg.fmsc.model.FlightModel;
//import com.cg.fmsc.model.ScheduledFlightModel;
//
//public class StaticRepositoryMy {
//	
//	
//	AirportModel airport01 = new AirportModel();
//	AirportModel airport02 = new AirportModel();
//	FlightModel flight  = new FlightModel();
//	ScheduledFlightModel sFlight = new ScheduledFlightModel();
//	ScheduledFlightModel sFlight1 = new ScheduledFlightModel();
//	List<AirportModel> airportList = new ArrayList<AirportModel>();
//	
//	public StaticRepositoryMy() {
//		
//		airport01.setCode("IGA");
//		airport01.setLocation("NewDelhi");
//		airport01.setName("Indira Gandhi Int. Airport");
//		
//		airport02.setCode("JPA");
//		airport02.setLocation("Jaipur");
//		airport02.setName("SMS Int. Airport");
//		
//		airportList.add(airport01);
//		airportList.add(airport02);
//		
//		flight.setCapacity((long) 110);
//		flight.setModel("Air Bus");
//		flight.setName("Air Asia");
//		flight.setNumber((long) 11111);
//		
//		sFlight.setArrivalTime(LocalDateTime.of(2020, 05, 22, 12, 00));
//		sFlight.setDepartureTime(LocalDateTime.of(2020, 05, 22, 11, 00));
//		sFlight.setDestination(airport01);
//		sFlight.setFlight(flight);
//		sFlight.setFlightPrice(7000);
//		sFlight.setId(222);
//		sFlight.setSeats(flight.getCapacity());
//		sFlight.setSource(airport02);
//		sFlight.setStops(new ArrayList<>());
//		
//		sFlight1.setArrivalTime(LocalDateTime.of(2020, 06, 22, 13, 00));
//		sFlight1.setDepartureTime(LocalDateTime.of(2020, 06, 22, 12, 00));
//		sFlight1.setDestination(airport01);
//		sFlight1.setFlight(flight);
//		sFlight1.setFlightPrice(9000);
//		sFlight1.setId(222);
//		sFlight1.setSeats(flight.getCapacity());
//		sFlight1.setSource(airport02);
//		sFlight1.setStops(new ArrayList<>());
//		
//		
//	}
//
//	public List<ScheduledFlightModel> getsFlight() {
//		List<ScheduledFlightModel> list = new ArrayList<ScheduledFlightModel>();
//		list.add(sFlight);
//		list.add(sFlight1);
//		return list;
//	}
//
//	public List<AirportModel> getAirportList() {
//		return airportList;
//	}
//
//
//
//	
//	
//			
//	
//	
//
//}
