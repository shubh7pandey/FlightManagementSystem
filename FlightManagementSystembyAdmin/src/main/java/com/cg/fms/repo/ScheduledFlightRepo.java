package com.cg.fms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cg.fms.entity.ScheduledFlightEntity;

public interface ScheduledFlightRepo extends JpaRepository<ScheduledFlightEntity,Long> {

	
	List<ScheduledFlightEntity> findAllBySourceAndDestination(String source, String dest);
	
//	List<ScheduledFlightEntity> search(String source, String dest);
}
