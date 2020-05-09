package com.cg.fms.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="scheduled_flight_table")
public class ScheduledFlightEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id",nullable=false)
	private long id;
	
	@Column(name="flight_price",nullable=false)
	private double flightPrice;
	
	@Column(name="flight_seats",nullable=false)
	private long seats;
	
	@Column(name="arrival_time",nullable=false)
	private String arrivalTime;
	
	@Column(name="departure_time",nullable=false)
	private String departureTime;
	
	@Column(name="flight",nullable=false)
	private long flight;
	
	@Column(name="flight_source",nullable=false)
	private String source;
	
	@Column(name="flight_destination",nullable=false)
	private String destination;

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

	public long getFlight() {
		return flight;
	}

	public void setFlight(long flight) {
		this.flight = flight;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
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
