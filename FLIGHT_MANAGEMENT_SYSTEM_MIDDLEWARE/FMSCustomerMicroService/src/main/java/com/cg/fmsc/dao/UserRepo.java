package com.cg.fmsc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cg.fmsc.entity.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, String> {
	
	@Query(value = "select * from user_table where email = :eMail ", nativeQuery = true)
	UserEntity findByeMail(@Param("eMail") String eMail);

}
