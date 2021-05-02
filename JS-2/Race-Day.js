//Race numbers
let raceNumber = Math.floor(Math.random() * 1000);

//Runner registered
let earlyRegister = Math.floor(Math.random() * 2);


//random age ranged from 0 to 54
let age = Math.floor(Math.random() * 65)

if (age > 18 && earlyRegister) {
    raceNumber += 1000;
}

if (age > 18 && earlyRegister) {
    console.log(`You (race number:${raceNumber}, age:${age}, early register:${earlyRegister}) will race at 09:30 am.`);
} else if (age > 18 && !earlyRegister) {
    console.log(`You (race number:${raceNumber}, age:${age}, early register:${earlyRegister}) will race at 11:00 am.`);
} else if (age <= 18) {
    console.log(`You (race number:${raceNumber}, age:${age}, early register:${earlyRegister}) will race at 12:30 pm.`);
}
