package com.iot_mrabetm.dice_website_backend.controller;


import com.iot_mrabetm.dice_website_backend.models.Roll;
import com.iot_mrabetm.dice_website_backend.repository.RollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

/**
 * @Author: Mortada M'Rabet
 * @Description: This class managed every mapping, which allows for data manipulation
 */
@RestController
@RequestMapping("/roll")
public class RollController {

    private final RollRepository rollRepository;

    @Autowired
    public RollController(RollRepository rollRepository) {
        this.rollRepository = rollRepository;
    }

    /**
     * @return an iterable list of rolls
     */
    @GetMapping
    public @ResponseBody Iterable<Roll> getAll(){
        return rollRepository.findAll();
    }

    @GetMapping(path = "/latest")
    public Roll getLatestRoll(){
        return rollRepository.getLatestRoll();
    }

    /**
     * @param id
     * @return a roll by its ID
     */
    @GetMapping(path = "/{id}")
    public Roll getRoll(@PathVariable int id) {
        return rollRepository.findById(id);
    }

    /**
     * @param roll
     * @return a response status whether the operation to add a roll was succesfull
     */
    @PostMapping()
    public ResponseEntity<Roll> createRoll(@RequestBody Roll roll){
        Roll newRoll = rollRepository.save(roll);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newRoll.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    /**
     * @param id
     * @return a response status whether the delete operation was succesfull
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Roll> deleteRoll(@PathVariable int id){
        Roll roll = rollRepository.deleteById(id);

        return ResponseEntity.ok(roll);
    }
}
