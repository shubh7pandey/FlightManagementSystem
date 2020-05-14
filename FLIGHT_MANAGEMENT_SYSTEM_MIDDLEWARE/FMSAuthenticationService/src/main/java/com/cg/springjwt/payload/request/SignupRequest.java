package com.cg.springjwt.payload.request;

import java.util.Set;

import javax.validation.constraints.*;
 
public class SignupRequest {
//	@NotBlank
	@Size(max = 10)
	private String firstName;
	
//	@NotBlank
	@Size(max = 10)
	private String lastName;
	
	@NotBlank
    @Size(max = 50)
    @Email
    private String email;
	
//	@NotBlank
	@Size(max = 10)
	private String mobile;
	
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
 
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 20)
    private String password;
  
    public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getUsername() {
        return username;
    }
 
    public void setUsername(String username) {
        this.username = username;
    }
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public Set<String> getRole() {
      return this.role;
    }
    
    public void setRole(Set<String> role) {
      this.role = role;
    }
    
//    public static void main(String p[]) {
//    	System.out.println("$2a$10$2h19jtRtUy3A5XIw5ChLHOqIWWho4YAPIwFxWLvN8r4FJ7nvdkxj2".length());
//    }
}
