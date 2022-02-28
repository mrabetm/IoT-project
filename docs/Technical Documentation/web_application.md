# Web Application

## Description and screenshots

####RollRepository
![img.png](img.png)
This repository is responsible for the multiple paths used to get or alter data which we fetch from the database
So if we wanted to get a list of rolls, we simply make a get request to the following url: localhost:8080/roll

## Back-end technology and database
Along with showcasing which technologies I used for the back-end, 
I will also explain why I used these methods/technologies:

Back-end = Spring boot

The reason why I choose spring boot, was mainly because I have some experience with this back-end framework.


Database = Mongo DB cluster

The reason why I choose a nosql database instead of a relational database was purely for the reason
that we are basically saving one thing from one object, which is the roll we make when rolling the dice. 

However, I did consider the fact that there are also benefits to using a relational database.
For example, when we want to make the web application more secure, we also want to save information about the initial dice.
This is also possible with a nosql database, but we can't relate a roll to this dice. This would mean that we don't were this
roll came from, when we have multiple dices. 


## Front-end technology
Front-end framework = React.js

## 3rd party API