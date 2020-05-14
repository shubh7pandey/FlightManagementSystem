package com.cg.springjwt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.springjwt.models.UserModel;
import com.cg.springjwt.security.services.UserDetailsServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/customer")
	@PreAuthorize("hasAuthority('CUSTOMER')")
	public String customerAccess() {
		return "Customer Works.";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasAuthority('ADMIN')")
	public String adminAccess() {
		return "Admin Works.";
	}
	
//	@GetMapping("/user-details")
//	@PreAuthorize("hasAuthority('CUSTOMER')")
//	public UserModel getUserDetails(Authentication authentication) {
//		return userDetailsServiceImpl.getUserByUserName(authentication.getName());
//	}
}
