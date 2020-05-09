package com.cg.fmsc.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.fmsc.exception.UserException;

@RestControllerAdvice
public class UserControllerAdvise {

	@ExceptionHandler(UserException.class)
	public ResponseEntity<String> handleLoanTypeException(UserException exp){
		return new ResponseEntity<String>(exp.getMessage(),HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handlerOtherException(Exception exp){
		return new ResponseEntity<String>(exp.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
