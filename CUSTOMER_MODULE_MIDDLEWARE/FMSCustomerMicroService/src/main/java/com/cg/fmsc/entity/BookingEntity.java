package com.cg.fmsc.entity;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "booking")
public class BookingEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "id")	
	private long id;
	
	@Column(name = "bookingDate")
	private String bookingDate;
	
	@Column(name="userId")
	private String userId;
	
	@Column(name = "cost")
	private double cost;
	
	@Column(name = "flightId")
	private long flight;
	
	@Column(name = "numOfPassenger")
	private int numOfPassenger;

	
	
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

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

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public long getFlight() {
		return flight;
	}

	public void setFlight(long flight) {
		this.flight = flight;
	}

	public int getNumOfPassenger() {
		return numOfPassenger;
	}

	public void setNumOfPassenger(int numOfPassenger) {
		this.numOfPassenger = numOfPassenger;
	}

	
	
}