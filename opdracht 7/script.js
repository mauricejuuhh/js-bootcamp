var
GPSLocation = 'Amsterdam centraal',
CurrentWeather = 'cloudy',
CurrentTemperature = 18,
Wind = 10,
PrecipitationChance = 10,
Humidity = '70',
Maintenance = true,
firstName = "Melissa",
lastName = "Vriend",
Age = 20,
DayOfBirth = 10,
MonthOfBirth = 04,
YearOfBirth = 2000,
Student = false,
StudentOV = false;

var Opdracht1 = GPSLocation + CurrentTemperature + Maintenance;
console.log("1. " + Opdracht1);

var Opdracht2 = CurrentTemperature + CurrentWeather;
console.log("2. " + Opdracht2);

var Opdracht3 = CurrentTemperature + StudentOV;
console.log("3. " + Opdracht3);

var Opdracht4 = GPSLocation + StudentOV;
console.log("4. " + Opdracht4);

var Opdracht5 = CurrentTemperature + Humidity;
console.log("5. " + Opdracht5);

var Opdracht6 = Humidity + CurrentTemperature;
console.log("6. " + Opdracht6);
