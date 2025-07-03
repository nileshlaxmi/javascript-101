// JavaScript Program to °C Km to °F
const convertFahrenheitToCelsius = (celsius) => {
  if (typeof celsius == "number") return "Fahrenheit = " + ((celsius * 1.8)+32)?.toFixed(1) + "°F";
  else return "°C should be number";
};

console.log(convertFahrenheitToCelsius(35));
console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius("1"));
console.log(convertFahrenheitToCelsius("a"));
