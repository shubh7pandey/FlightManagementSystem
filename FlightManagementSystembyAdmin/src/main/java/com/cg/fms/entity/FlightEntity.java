package com.cg.fms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="flight_table")
public class FlightEntity {
	
	@Id
	@Column(name="flight_number")
	private long flightNumber;
	
	@Column(name="flight_name",nullable=false)
	private String flightName;
	
	@Column(name="flight_model",nullable=false)
	private String flightModel;
	
	@Column(name="flight_capacity")
	private long flightCapacity;

	public long getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(long flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightModel() {
		return flightModel;
	}

	public void setFlightModel(String flightModel) {
		this.flightModel = flightModel;
	}

	public long getFlightCapacity() {
		return flightCapacity;
	}

	public void setFlightCapacity(long flightCapacity) {
		this.flightCapacity = flightCapacity;
	}	
}