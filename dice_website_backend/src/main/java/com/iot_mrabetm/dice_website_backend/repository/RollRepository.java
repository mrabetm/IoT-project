package com.iot_mrabetm.dice_website_backend.repository;

import com.iot_mrabetm.dice_website_backend.models.Roll;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RollRepository extends CrudRepository<Roll, Integer> {
    List<Roll> findAll();

    Roll findById(int id);

    Roll save(Roll roll);

    Roll deleteById(int id);
}
