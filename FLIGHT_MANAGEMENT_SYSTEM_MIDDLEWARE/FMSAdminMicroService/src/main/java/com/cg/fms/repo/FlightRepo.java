package com.cg.fms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fms.entity.FlightEntity;

public interface FlightRepo extends JpaRepository<FlightEntity,Long>{

}