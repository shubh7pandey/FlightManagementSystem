package com.cg.fms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fms.entity.AirportEntity;

public interface AirportRepo extends JpaRepository<AirportEntity,Long>{

	AirportEntity findByAirportCode(String code);

}