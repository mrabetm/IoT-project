package com.iot_mrabetm.dice_website_backend;

import com.iot_mrabetm.dice_website_backend.controller.RollController;
import com.iot_mrabetm.dice_website_backend.models.Roll;
import com.iot_mrabetm.dice_website_backend.repository.RollRepository;
import org.junit.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.mockito.Mockito.when;
import static junit.framework.TestCase.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class DiceWebsiteBackendApplicationTests {

	@Autowired
	@MockBean
	private RollRepository rollRepo;

	@Autowired
	private RollController rollController;


	@Before
	public void createRolls(){
		Roll testRoll = new Roll(1, 4, new Date(2021- 1 -22));
		Roll testRoll2 = new Roll(2, 3, new Date(2021- 2 -22));
		Roll testRoll3 = new Roll(3, 2, new Date(2021- 3 -22));
		Roll testRoll4 = new Roll(4, 6, new Date(2021- 4 -22));
		Roll testRoll5 = new Roll(5, 1, new Date(2021- 5 -22));

		when(rollRepo.findById(testRoll.getId())).thenReturn(testRoll);
		when(rollRepo.findById(testRoll2.getId())).thenReturn(testRoll2);
		when(rollRepo.findById(testRoll3.getId())).thenReturn(testRoll3);
		when(rollRepo.findById(testRoll4.getId())).thenReturn(testRoll4);
		when(rollRepo.findById(testRoll5.getId())).thenReturn(testRoll5);
	}

	@Test
	@DirtiesContext
	void addRoll() {
		Roll roll = new Roll(6,2,new Date(2021- 6 -22));

		rollController.createRoll(roll);

		Assertions.assertEquals(2, roll.getScore());
	}

}
