package com.cg.fmsc.model;

import java.util.ArrayList;
import java.util.List;

public class BookingModel {
	
	private long id;
	private String bookingDate;
	private List<PassengerModel> passengerList = new ArrayList<>();
	private double cost;
	private ScheduledFlightModel flight;
	private int numOfPassenger;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	public List<PassengerModel> getPassengerList() {
		return passengerList;
	}
	public void setPassengerList(List<PassengerModel> passengerList) {
		this.passengerList = passengerList;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public ScheduledFlightModel getFlight() {
		return flight;
	}
	public void setFlight(ScheduledFlightModel flight) {
		this.flight = flight;
	}
	public int getNumOfPassenger() {
		return numOfPassenger;
	}
	public void setNumOfPassenger(int numOfPassenger) {
		this.numOfPassenger = numOfPassenger;
	}
	
	

}
