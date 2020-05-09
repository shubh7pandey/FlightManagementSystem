package com.cg.fms.model;

public class FlightModel {
	
	private long number;
	private String name;
	private String model;
	private long capacity;
	
	public long getNumber() {
		return number;
	}
	public void setNumber(long Number) {
		this.number = Number;
	}
	public String getName() {
		return name;
	}
	public void setName(String Name) {
		this.name = Name;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String Model) {
		this.model = Model;
	}
	public long getCapacity() {
		return capacity;
	}
	public void setCapacity(long Capacity) {
		this.capacity = Capacity;
	}

}