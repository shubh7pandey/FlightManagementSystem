package com.cg.fmsc.model;

import java.util.List;

public class ScheduledFlightModel {

	private long id;
	private FlightModel flight;
	private double flightPrice;
	private long seats;
	private List<AirportModel> stops;
	private AirportModel source;
	private AirportModel destination;
	private String arrivalTime;
	private String departureTime;

	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public FlightModel getFlight() {
		return flight;
	}
	public void setFlight(FlightModel flight) {
		this.flight = flight;
	}
	public double getFlightPrice() {
		return flightPrice;
	}
	public void setFlightPrice(double flightPrice) {
		this.flightPrice = flightPrice;
	}
	public Long getSeats() {
		return seats;
	}
	public void setSeats(Long long1) {
		this.seats = long1;
	}
	public List<AirportModel> getStops() {
		return stops;
	}
	public void setStops(List<AirportModel> stops) {
		this.stops = stops;
	}
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
		
}
