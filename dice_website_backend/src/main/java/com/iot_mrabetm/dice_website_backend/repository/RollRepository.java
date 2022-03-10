package com.iot_mrabetm.dice_website_backend.repository;

import com.iot_mrabetm.dice_website_backend.models.Roll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

public interface RollRepository extends JpaRepository<Roll, Integer> {
    List<Roll> findAll();

    Roll findById(int id);

    Roll save(Roll roll);

    Roll deleteById(int id);


    @Query(value = "select id, score, roll_date FROM zmrabetm.roll" +
            " order by id DESC LIMIT 1;",
    nativeQuery = true)
    Roll getLatestRoll();
}
