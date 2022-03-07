package com.iot_mrabetm.dice_website_backend.repository;

import com.iot_mrabetm.dice_website_backend.models.Roll;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface RollRepository extends JpaRepository<Roll, Integer> {
    List<Roll> findAll();

    Roll findById(int id);

    Roll save(Roll roll);

    Roll deleteById(int id);
}
