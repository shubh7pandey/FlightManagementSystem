package com.cg.fmsc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fmsc.entity.PassengerEntity;

public interface PassengerRepo extends JpaRepository<PassengerEntity, Long> {
	
	List<PassengerEntity> findAllByBid(long bid);

}
