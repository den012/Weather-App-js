let weather = {
    "apiKey": "c5b3176e74f3c382d595db68834fa37e",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid="
            + this.apiKey +""
        ).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        const city = document.getElementById('city');
        const temperature = document.getElementById('temp');
        const pic = document.getElementById('icon');
        const desc = document.getElementById('description');
        const humid = document.getElementById('humidity');
        const wind = document.getElementById('wind');

        city.innerHTML = "Weather in " + name;
        pic.src = "https://openweathermap.org/img/wn/" + icon +".png";
        desc.innerHTML = description;
        temperature.innerHTML = temp + "°C";
        humid.innerHTML = "Humidity: "+ humidity + "%";
        wind.innerHTML = "Wind speed: " + speed + " km/h";

    }
};

weather.fetchWeather("Piatra Neamt");

function getInput(){
    var inputCity = document.getElementById('searchbar').value;
    //console.log(inputCity);
    weather.fetchWeather(inputCity);
    document.getElementById('searchbar').value = '';
}