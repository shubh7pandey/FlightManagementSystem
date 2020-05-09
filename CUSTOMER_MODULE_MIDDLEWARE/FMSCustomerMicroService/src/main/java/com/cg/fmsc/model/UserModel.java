package com.cg.fmsc.model;

import java.util.List;
import java.util.Set;

import com.cg.fmsc.entity.BookingEntity;

public class UserModel {
	

	private String name;
	private String pass;
	private String phone;
	private String eMail;
	private List<BookingModel> bookingList;
	
	

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String geteMail() {
		return eMail;
	}
	public void seteMail(String eMail) {
		this.eMail = eMail;
	}
	public List<BookingModel> getBookingList() {
		return bookingList;
	}
	public void setBookingList(List<BookingModel> bookingList2) {
		this.bookingList = bookingList2;
	}

	
	
}
