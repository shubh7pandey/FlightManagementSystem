package com.cg.fmsc.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cg.fmsc.entity.BookingEntity;

public interface BookingRepo extends JpaRepository<BookingEntity, Long> {
	
	@Query(value =  "select * from booking where user_id = :mail",nativeQuery=true)
	List<BookingEntity> findAllByUserId(@Param("mail") String mail);
	
	@Modifying
	@Transactional
	@Query(value = "delete from booking where id = :id", nativeQuery = true)
	void deleteById(@Param("id")Long id);

}
