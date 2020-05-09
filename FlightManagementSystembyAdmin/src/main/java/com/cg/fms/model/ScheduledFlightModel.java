package com.cg.fms.model;

import java.util.List;

public class ScheduledFlightModel {
	private long id;
	private double flightPrice;
	private long seats;
	private String arrivalTime;
	private String departureTime;
	private FlightModel flight;
	private AirportModel source;
	private AirportModel destination;
	private List<AirportModel> stops;
 	
	
	public AirportModel getSource() {
		return source;
	}
	public void setSource(AirportModel source) {
		this.source = source;
	}
	public AirportModel getDestination() {
		return destination;
	}
	public void setDestination(AirportModel destination) {
		this.destination = destination;
	}
	public FlightModel getFlight() {
		return flight;
	}
	public void setFlight(FlightModel flight) {
		this.flight = flight;
	}
	public String getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public String getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public double getFlightPrice() {
		return flightPrice;
	}
	public void setFlightPrice(double flightPrice) {
		this.flightPrice = flightPrice;
	}
	public long getSeats() {
		return seats;
	}
	public void setSeats(long seats) {
		this.seats = seats;
	}
	

}
