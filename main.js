let raceNumber = Math.floor(Math.random() * 1000);
//console.log(`${raceNumber}`);
let early = true;
let age = 19;

if (early && age > 18){raceNumber += 1000;
}
if(early && age > 18){console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`);
} 
else if(!early && age > 18){console.log(`Race will beguin at 11:00, your race number is: ${raceNumber}.`);
}
else if (age < 18){console.log(`Race will beguin at 12:30, your race number is: ${raceNumber}.`);
}
else{
  console.log('Pleasde approach to the registration desk. Thanks!');
}

/*if (age >= 18 && registeredEarly) {console.log('Adult with the race number ' + `${raceNumber * 1000}`);
} else {
  console.log('No Adult');
}*/

