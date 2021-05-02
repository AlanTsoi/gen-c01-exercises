//The forecast today is 293 Kelvin.
const kelvin = 293;

//Celsius is similar to Kelvin
const celsius = kelvin - 273;

//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

//get a decimal number.
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);