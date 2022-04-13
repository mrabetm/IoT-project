package com.iot_mrabetm.dice_website_backend.models;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Roll {
    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    public int id;

    @Column(name = "score")
    public int score;

    @Column(name = "roll_date")
    public Date date;

    public Roll(int id, int score, Date date) {
        this.id = id;
        this.score = score;
        this.date = date;
    }

    public Roll() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

//    @Override
//    public String toString(){
//        return String.format("Roll information: id = %d, score = %d, date = %t", getId(), getScore(), getDate());
//    }
}
